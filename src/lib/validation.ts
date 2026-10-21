import { z } from "zod";

const phoneRegex = /^[+()\-\s\d]{6,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "forms.errors.nameMin").max(120),
  email: z.string().email("forms.errors.emailInvalid"),
  phone: z.string().regex(phoneRegex, "forms.errors.phoneInvalid").or(z.literal("")).optional(),
  subject: z.string().min(3, "forms.errors.subjectMin").max(150),
  requestType: z.string().min(1, "forms.errors.requestTypeRequired"),
  message: z.string().min(10, "forms.errors.messageMin").max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: "forms.errors.consentRequired" }) }),
});

export const quoteSchema = z.object({
  organization: z.string().min(2, "forms.errors.orgMin").max(120),
  email: z.string().email("forms.errors.emailInvalid"),
  phone: z.string().regex(phoneRegex, "forms.errors.phoneInvalid").or(z.literal("")).optional(),
  service: z.string().min(1, "forms.errors.serviceRequired"),
  description: z.string().min(10, "forms.errors.messageMin").max(5000),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "forms.errors.consentRequired" }) }),
});

export const enrollmentSchema = z.object({
  fullName: z.string().min(2, "forms.errors.nameMin").max(120),
  email: z.string().email("forms.errors.emailInvalid"),
  phone: z.string().regex(phoneRegex, "forms.errors.phoneInvalid").or(z.literal("")).optional(),
  course: z.string().min(1, "forms.errors.courseRequired"),
  modality: z.string().min(1, "forms.errors.modalityRequired"),
  message: z.string().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "forms.errors.consentRequired" }) }),
});

export type ContactForm = z.infer<typeof contactSchema>;
export type QuoteForm = z.infer<typeof quoteSchema>;
export type EnrollmentForm = z.infer<typeof enrollmentSchema>;
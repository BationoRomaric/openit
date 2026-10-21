import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Romaric BATIONO",
    role: {
      fr: "Fondateur & Directeur Général",
      en: "Founder & CEO",
      es: "Fundador y Director General",
      ar: "المؤسس والمدير العام"
    },
    description: {
      fr: "Expert en systèmes d'information et télémédecine, passionné par l'innovation technologique au service de la santé.",
      en: "Expert in information systems and telemedicine, passionate about technological innovation for healthcare.",
      es: "Experto en sistemas de información y telemedicina, apasionado por la innovación tecnológica al servicio de la salud.",
      ar: "خبير في نظم المعلومات والطب عن بُعد، شغوف بالابتكار التكنولوجي في خدمة الصحة."
    },
    image: "/team/member-1.jpg",
    social: { linkedin: "#", twitter: "#", email: "contact@openit.bf", github: "#" }
  },
  {
    id: 2,
    name: "Prénom Nom",
    role: {
      fr: "Responsable Technique & Développement",
      en: "Technical Lead & Development",
      es: "Responsable Técnico y Desarrollo",
      ar: "المسؤول الفني والتطوير"
    },
    description: {
      fr: "Architecte de solutions numériques, spécialisé en développement web, mobile et infrastructures cloud.",
      en: "Digital solutions architect, specialized in web, mobile and cloud infrastructure.",
      es: "Arquitecto de soluciones digitales, especializado en desarrollo web, móvil e infraestructura en la nube.",
      ar: "مهندس حلول رقمية، متخصص في تطوير المواقع والتطبيقات والبنية التحتية السحابية."
    },
    image: "/team/member-2.jpg",
    social: { linkedin: "#", twitter: "#", email: "contact@openit.bf", github: "#" }
  },
  {
    id: 3,
    name: "Prénom Nom",
    role: {
      fr: "Coordination Projets Santé",
      en: "Health Projects Coordinator",
      es: "Coordinación de Proyectos de Salud",
      ar: "منسق المشاريع الصحية"
    },
    description: {
      fr: "Spécialiste en santé publique et télémédecine, assure le lien entre la technologie et les besoins médicaux.",
      en: "Public health and telemedicine specialist, bridging technology and medical needs.",
      es: "Especialista en salud pública y telemedicina, conectando la tecnología con las necesidades médicas.",
      ar: "متخصص في الصحة العامة والطب عن بُعد، يضمن التواصل بين التكنولوجيا والاحتياجات الطبية."
    },
    image: "/team/member-3.jpg",
    social: { linkedin: "#", twitter: "#", email: "contact@openit.bf", github: "#" }
  },
  {
    id: 4,
    name: "Prénom Nom",
    role: {
      fr: "Formation & Accompagnement",
      en: "Training & Support",
      es: "Formación y Acompañamiento",
      ar: "التدريب والدعم"
    },
    description: {
      fr: "Experte en ingénierie pédagogique, conçoit des programmes adaptés aux acteurs de l'écosystème numérique.",
      en: "Educational engineering expert, designing programs tailored to digital ecosystem stakeholders.",
      es: "Experta en ingeniería pedagógica, diseñando programas adaptados a los actores del ecosistema digital.",
      ar: "خبيرة في الهندسة التعليمية، تصمم برامج مكيفة لمنتسبي المنظومة الرقمية."
    },
    image: "/team/member-4.jpg",
    social: { linkedin: "#", twitter: "#", email: "contact@openit.bf", github: "#" }
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "fr" | "en" | "es" | "ar";

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/team${member.id}/400/400`;
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
        <CardDescription className="text-primary font-medium">
          {member.role[lang]}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {member.description[lang]}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Equipe() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Valeurs par défaut garanties
  const defaultTexts = {
    pageTitle: { fr: "Notre Équipe", en: "Our Team", es: "Nuestro Equipo", ar: "فريقنا" },
    intro: {
      fr: "Une équipe passionnée, engagée au service de l'innovation numérique et de la santé connectée en Afrique.",
      en: "A passionate team committed to digital innovation and connected healthcare across Africa.",
      es: "Un equipo apasionado dedicado a la innovación digital y a la salud conectada en África.",
      ar: "فريق شغوف يكرس جهوده للابتكار الرقمي وتطوير الرعاية الصحية المتصلة في أفريقيا."
    },
    subtitle: {
      fr: "Expertise, engagement et vision partagée",
      en: "Shared expertise, dedication and vision",
      es: "Experiencia, compromiso y visión compartida",
      ar: "خبرة، التزام ورؤية مشتركة"
    },
    sectionTitle: { fr: "Nos Valeurs", en: "Our Values", es: "Nuestros Valores", ar: "قيمنا" },
    valuesDescription: {
      fr: "Nous unissons nos compétences pour faire d'openIT un acteur de référence en matière de technologie et de télémédecine. Chaque membre apporte son expertise pour construire des solutions accessibles, durables et tournées vers l'avenir.",
      en: "We combine our skills to establish openIT as a leading force in technology and telemedicine. Every member contributes to building accessible, sustainable, future-ready solutions.",
      es: "Unimos nuestras capacidades para hacer de openIT un referente en tecnología y telemedicina. Cada miembro aporta su experiencia para construir soluciones accesibles, sostenibles y orientadas al futuro.",
      ar: "نجمع كفاءاتنا لنجعل من openIT نموذجاً رائداً في مجال التكنولوجيا والطب عن بُعد. كل عضو يساهم بخبرته لبناء حلول مستدامة، متاحة للجميع ومستشرفة للمستقبل."
    }
  };

  const getText = (key: keyof typeof defaultTexts) => {
    const fallback = defaultTexts[key][lang as keyof (typeof defaultTexts)["pageTitle"]] || defaultTexts[key].fr;
    return t(`team.${key}`, fallback);
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container-x space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">{getText("pageTitle")}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {getText("intro")}
            </p>
            <p className="text-base text-muted-foreground/80 italic">
              {getText("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mt-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">{getText("sectionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {getText("valuesDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
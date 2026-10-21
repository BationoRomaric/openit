import { GraduationCap, Code2, Smartphone, Server, Network, ShieldCheck, Wrench, Database, Cloud, BrainCircuit, Lightbulb, Rocket, Palette, Workflow, type LucideIcon } from "lucide-react";

export interface ServiceMeta { slug: string; icon: LucideIcon; technologies: string[]; }

export const SERVICES_META: ServiceMeta[] = [
  { slug: "formations-informatiques", icon: GraduationCap, technologies: ["Ateliers pratiques", "Laboratoires", "Suivi pédagogique"] },
  { slug: "developpement-web", icon: Code2, technologies: ["React", "Node.js", "PostgreSQL"] },
  { slug: "applications-mobiles-logiciels", icon: Smartphone, technologies: ["React Native", "Flutter", ".NET"] },
  { slug: "administration-systemes", icon: Server, technologies: ["Linux", "Windows Server", "Docker"] },
  { slug: "reseaux", icon: Network, technologies: ["Cisco", "MikroTik", "VLAN / VPN"] },
  { slug: "cybersecurite-audit", icon: ShieldCheck, technologies: ["Audit", "Durcissement", "Sensibilisation"] },
  { slug: "maintenance-assistance", icon: Wrench, technologies: ["Helpdesk", "Parc informatique", "Sauvegardes"] },
  { slug: "bases-de-donnees", icon: Database, technologies: ["PostgreSQL", "MySQL", "NoSQL"] },
  { slug: "cloud-devops-virtualisation", icon: Cloud, technologies: ["Cloud", "CI/CD", "Kubernetes"] },
  { slug: "ia-donnees", icon: BrainCircuit, technologies: ["Python", "Machine Learning", "Data pipelines"] },
  { slug: "conseil-si", icon: Lightbulb, technologies: ["Audit SI", "Urbanisation", "Gouvernance"] },
  { slug: "transformation-numerique", icon: Rocket, technologies: ["Conduite du changement", "Processus", "Outils collaboratifs"] },
  { slug: "creation-graphique-multimedia", icon: Palette, technologies: ["Identité visuelle", "Web design", "Supports print"] },
  { slug: "automatisation-processus", icon: Workflow, technologies: ["Automatisation", "API", "Intégration d'outils"] },
];

export function getServiceIndexBySlug(slug: string): number {
  return SERVICES_META.findIndex((s) => s.slug === slug);
}
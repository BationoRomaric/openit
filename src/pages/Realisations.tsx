import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const realisations = [
  {
    id: "site-asso",
    titre: "Site web associatif",
    description: "Plateforme de présentation et d'adhésion pour une structure locale."
  },
  {
    id: "app-gestion",
    titre: "Application de gestion",
    description: "Outil de suivi des activités et des membres pour une organisation."
  },
  {
    id: "formation-groupe",
    titre: "Session de formation",
    description: "Programme de montée en compétences dispensé à une promotion entière."
  },
  {
    id: "audit-securite",
    titre: "Audit de sécurité",
    description: "Diagnostic et recommandations pour renforcer la protection des systèmes."
  }
];

export default function Realisations() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("realisations.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("realisations.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realisations.map((r) => (
              <Card key={r.id}>
                <CardHeader>
                  <CardTitle>{r.titre}</CardTitle>
                  <CardDescription>{r.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 rounded-lg bg-primary/10 flex items-center justify-center text-primary/50 text-sm">
                    Aperçu visuel
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {t("realisations.voirDetail")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
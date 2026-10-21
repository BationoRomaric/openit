import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GraduationCap, Lightbulb, Server } from "lucide-react";

const services = [
  { icon: GraduationCap, titre: "Formation", description: "Parcours encadrés pour monter en compétence sur le numérique." },
  { icon: Code, titre: "Développement", description: "Sites web, applications mobiles et outils métiers sur mesure." },
  { icon: Server, titre: "Infrastructure", description: "Mise en place, maintenance et sécurisation de vos systèmes." },
  { icon: Lightbulb, titre: "Conseil", description: "Accompagnement dans la stratégie et la transformation digitale." }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("services.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Card key={i}>
                <CardHeader>
                  <s.icon size={32} className="text-primary mb-2" />
                  <CardTitle>{s.titre}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full mt-2">
                      {t("services.devis")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
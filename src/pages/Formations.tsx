import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award } from "lucide-react";

const formationKeys = [
  "devWeb",
  "reseaux",
  "cybersecurite",
  "dataIa",
  "telemedecine",
  "telecom"
] as const;

export default function Formations() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("formations.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("formations.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formationKeys.map((key) => (
              <Card key={key} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {t(`formations.list.${key}.titre`)}
                  </CardTitle>
                  <CardDescription>
                    {t(`formations.list.${key}.desc`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>{t("formations.duree")} : {t(`formations.list.${key}.duree`)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award size={16} />
                    <span>{t("formations.niveau")} : {t(`formations.list.${key}.niveau`)}</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button variant="gradient" className="w-full">
                    <BookOpen size={16} className="mr-2" />
                    {t("formations.inscrire")}
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
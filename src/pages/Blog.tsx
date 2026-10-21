import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: "article-1",
    titre: "Pourquoi et comment se former au numérique ?",
    extrait: "Le numérique transforme tous les secteurs. Voici des pistes pour bien démarrer et choisir sa voie.",
    date: "15 Octobre 2026"
  },
  {
    id: "article-2",
    titre: "Concevoir un site adapté au contexte local",
    extrait: "Performance, accessibilité et pertinence : les clés d'un outil numérique utile au plus grand nombre.",
    date: "10 Octobre 2026"
  },
  {
    id: "article-3",
    titre: "Sécuriser ses données sans budget important",
    extrait: "Gestes simples et outils gratuits pour protéger son activité et ses informations au quotidien.",
    date: "5 Octobre 2026"
  }
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("blog.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("blog.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Card key={a.id} className="flex flex-col">
                <CardHeader>
                  <p className="text-xs text-muted-foreground">{a.date}</p>
                  <CardTitle className="text-lg mt-1">{a.titre}</CardTitle>
                  <CardDescription className="mt-2">{a.extrait}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {t("blog.lireSuite")}
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
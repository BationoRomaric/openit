import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("about.page.title")}</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed">
            {t("about.page.intro")}
          </p>

          <div className="glass rounded-xl p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold">{t("about.collab")}</h2>
            <p className="text-muted-foreground">{t("about.collab.desc")}</p>
            <Link to="/contact">
              <Button variant="gradient">
                {t("about.ecrire")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
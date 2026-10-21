import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  { q: "Quel niveau faut-il pour s'inscrire aux formations ?", r: "Nos formations sont accessibles selon des niveaux clairement indiqués. Certaines commencent depuis les bases, d'autres demandent des prérequis — ceux-ci sont précisés sur chaque parcours." },
  { q: "Les formations sont-elles payantes ?", r: "Nous proposons des parcours à coût adapté, avec des possibilités d'accompagnement selon les situations. Contactez-nous pour connaître les tarifs en vigueur." },
  { q: "Combien de temps pour obtenir un devis ?", r: "Nous vous répondons généralement sous 48h à 72h après réception de votre demande complète." },
  { q: "Intervenez-vous dans tout le Burkina ?", r: "Oui, nous accompagnons des structures et des personnes sur tout le territoire, en présentiel comme à distance." },
  { q: "Puis-je proposer un partenariat ?", r: "Bien sûr ! Nous sommes toujours ouverts à des collaborations. Utilisez le formulaire de contact en indiquant \"Partenariat\" comme sujet." }
];

export default function Faq() {
  const { t } = useTranslation();
  const [ouvert, setOuvert] = useState<number | null>(null);

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("faq.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("faq.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x max-w-3xl space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOuvert(ouvert === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-medium"
              >
                {item.q}
                <ChevronDown size={18} className={`transition-transform ${ouvert === i ? "rotate-180" : ""}`} />
              </button>
              {ouvert === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                  {item.r}
                </div>
              )}
            </div>
          ))}

          <div className="glass rounded-xl p-6 text-center mt-8 space-y-3">
            <p className="font-medium">{t("faq.reponseAbsente")}</p>
            <Link to="/contact">
              <Button variant="gradient">
                {t("faq.nousEcrire")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
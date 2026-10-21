import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const annee = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marque */}
          <div className="md:col-span-2">
            <Link to="/" className="font-bold text-xl gradient-text">openIT</Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Formations · Conseil · Développement — Façonnons ensemble le futur du numérique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary transition-colors">
                {t("common.nav.home")}
              </Link>
              <Link to="/formations" className="block hover:text-primary transition-colors">
                {t("common.nav.courses")}
              </Link>
              <Link to="/services" className="block hover:text-primary transition-colors">
                {t("common.nav.services")}
              </Link>
              <Link to="/realisations" className="block hover:text-primary transition-colors">
                {t("common.nav.projects")}
              </Link>
              <Link to="/a-propos" className="block hover:text-primary transition-colors">
                {t("common.nav.about")}
              </Link>
            </nav>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-semibold mb-3">Liens utiles</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/blog" className="block hover:text-primary transition-colors">
                {t("common.nav.blog")}
              </Link>
              <Link to="/faq" className="block hover:text-primary transition-colors">
                {t("common.nav.faq")}
              </Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">
                {t("common.nav.contact")}
              </Link>
              <Link to="/demander-un-devis" className="block hover:text-primary transition-colors">
                {t("common.nav.quote")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {annee} openIT — Tous droits réservés.</p>
          <p>Conçu et développé avec soin.</p>
        </div>
      </div>
    </footer>
  );
}
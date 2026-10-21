import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Palette, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { THEMES, type ThemeMeta } from "@/context/themes";
import { useTheme } from "@/context/ThemeContext";

// Définitions locales — aucune dépendance à @/i18n
const LANGS = ["fr", "en", "es", "ar"] as const;
const isRTL = (lang: string): boolean => lang === "ar";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentLang = i18n.language;

  // ✅ Valeurs par défaut sur CHAQUE clé
  const navLinks = [
    { to: "/", label: t("common.nav.home", "Accueil") },
    { to: "/formations", label: t("common.nav.courses", "Formations") },
    { to: "/services", label: t("common.nav.services", "Services") },
    { to: "/realisations", label: t("common.nav.projects", "Réalisations") },
    { to: "/a-propos", label: t("common.nav.about", "À propos") },
    { to: "/equipe", label: t("common.nav.team", "Équipe") },
    { to: "/blog", label: t("common.nav.blog", "Blog") },
    { to: "/faq", label: t("common.nav.faq", "FAQ") },
    { to: "/contact", label: t("common.nav.contact", "Contact") },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="container-x flex items-center justify-between h-16 gap-2">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl gradient-text whitespace-nowrap">
          openIT
          <span className="hidden md:inline ml-2 text-xs font-normal text-muted-foreground">
            {t("common.slogan", "La Relève du Numérique")}
          </span>
        </Link>

        {/* Navigation bureau — ✅ whitespace-nowrap + padding réduit */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-2.5 py-2 text-sm font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Boutons droite bureau */}
        <div className="hidden lg:flex items-center gap-1.5">
          {/* Sélecteur de thème */}
          <div className="relative group">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Palette size={18} />
            </Button>
            <div className="absolute right-0 top-full mt-2 w-56 glass rounded-xl p-3 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {t("common.appearance", "Apparence")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {THEMES.map((th: ThemeMeta) => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id)}
                    className={`p-2 rounded-lg text-xs text-left transition-colors whitespace-nowrap ${
                      theme === th.id ? "bg-primary/20 ring-1 ring-primary" : "hover:bg-accent/40"
                    }`}
                  >
                    <span
                      className="block w-full h-4 rounded mb-1"
                      style={{ background: th.colorPreview }}
                    />
                    {th.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sélecteur de langue */}
          <div className="relative group">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Globe size={18} />
            </Button>
            <div
              className={`absolute ${
                isRTL(currentLang) ? "left-0" : "right-0"
              } top-full mt-2 w-40 glass rounded-xl p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
            >
              <p className="text-xs font-medium text-muted-foreground px-2 py-1">
                {t("common.language", "Langue")}
              </p>
              {LANGS.map((lng: string) => (
                <button
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${
                    currentLang === lng ? "bg-primary/20 font-medium" : "hover:bg-accent/40"
                  }`}
                >
                  {lng === "fr" && "Français"}
                  {lng === "en" && "English"}
                  {lng === "es" && "Español"}
                  {lng === "ar" && "العربية"}
                </button>
              ))}
            </div>
          </div>

          {/* Bouton devis */}
          <Link to="/demander-un-devis">
            <Button variant="gradient" size="sm" className="whitespace-nowrap">
              {t("common.nav.quote", "Devis")}
            </Button>
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border glass">
          <div className="container-x py-3 space-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link
                to="/demander-un-devis"
                className="flex-1"
                onClick={() => setMobileOpen(false)}
              >
                <Button variant="gradient" className="w-full">
                  {t("common.nav.quote", "Demander un devis")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
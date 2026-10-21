import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(d => ({ ...d, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données :", formData);
    setEnvoye(true);
    setTimeout(() => setEnvoye(false), 5000);
    setFormData({ nom: "", email: "", sujet: "", message: "" });
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container-x text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">{t("contact.page.title")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.page.subtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container-x max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">{t("contact.coordonnees")}</h2>
              {[
                { icon: Mail, label: "bationoromaric1@gmail.com" },
                { icon: Phone, label: "+226 72 00 37 11" },
                { icon: MapPin, label: "Ouagadougou / Bobo-Dioulasso — Burkina Faso" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              {envoye ? (
                <div className="glass rounded-xl p-8 text-center space-y-3">
                  <CheckCircle size={40} className="text-green-500 mx-auto" />
                  <h3 className="font-semibold text-lg">{t("contact.envoye")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.envoye.desc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("contact.nom")}</label>
                      <input
                        type="text" name="nom" value={formData.nom} onChange={handleChange} required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">{t("contact.email")}</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="vous@exemple.bf"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("contact.sujet")}</label>
                    <select
                      name="sujet" value={formData.sujet} onChange={handleChange} required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">{t("contact.sujet.choisir")}</option>
                      <option value="formation">{t("contact.sujet.formation")}</option>
                      <option value="devis">{t("contact.sujet.devis")}</option>
                      <option value="partenariat">{t("contact.sujet.partenariat")}</option>
                      <option value="autre">{t("contact.sujet.autre")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t("contact.message")}</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} required rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder={t("contact.message.placeholder")}
                    />
                  </div>
                  <Button variant="gradient" size="lg" className="w-full">
                    <Send size={16} className="mr-2" />
                    {t("contact.envoyer")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
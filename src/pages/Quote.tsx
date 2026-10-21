import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, FileText, Users, Code, Server, GraduationCap } from "lucide-react";

export default function Quote() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    structure: "",
    type: "",
    description: "",
    delai: "",
    budget: ""
  });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(d => ({ ...d, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de devis :", formData);
    setEnvoye(true);
    setTimeout(() => setEnvoye(false), 5000);
    setFormData({
      nom: "", email: "", telephone: "", structure: "",
      type: "", description: "", delai: "", budget: ""
    });
  };

  return (
    <main>
      <section className="section-padding">
        <div className="container-x max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <FileText size={40} className="mx-auto text-primary" />
            <h1 className="text-4xl font-bold">
              <span className="gradient-text">Demander un devis</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Décris-nous ton projet, nous te répondrons sous 48 à 72h.
            </p>
          </div>

          {envoye ? (
            <Card className="border-green-500/50 bg-green-500/5">
              <CardContent className="pt-6 text-center space-y-3">
                <CheckCircle size={48} className="text-green-500 mx-auto" />
                <h3 className="font-semibold text-lg">Demande envoyée !</h3>
                <p className="text-sm text-muted-foreground">
                  Nous étudions ton projet et te recontactons rapidement.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Ta demande</CardTitle>
                <CardDescription>Remplis le formulaire ci-dessous</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nom / Prénom *</label>
                      <input
                        type="text" name="nom" value={formData.nom} onChange={handleChange} required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Téléphone</label>
                      <input
                        type="tel" name="telephone" value={formData.telephone} onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Structure / Entreprise</label>
                      <input
                        type="text" name="structure" value={formData.structure} onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Type de prestation *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        { val: "formation", label: "Formation", icon: GraduationCap },
                        { val: "developpement", label: "Développement", icon: Code },
                        { val: "infrastructure", label: "Infrastructure", icon: Server },
                        { val: "conseil", label: "Conseil", icon: Users },
                      ].map(opt => (
                        <label
                          key={opt.val}
                          className={`flex flex-col items-center gap-1 p-3 rounded-lg border cursor-pointer transition-colors ${
                            formData.type === opt.val
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={opt.val}
                            checked={formData.type === opt.val}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <opt.icon size={18} />
                          <span className="text-xs">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Description du projet *</label>
                    <textarea
                      name="description" value={formData.description} onChange={handleChange} required rows={5}
                      placeholder="Décris ton besoin, les fonctionnalités souhaitées, le public cible..."
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Délai souhaité</label>
                      <select
                        name="delai" value={formData.delai} onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Choisir</option>
                        <option value="urgent">Urgent (moins de 2 semaines)</option>
                        <option value="court">Court (1 mois)</option>
                        <option value="moyen">Moyen (2-3 mois)</option>
                        <option value="long">Long (plus de 3 mois)</option>
                        <option value="flexible">Flexible / À discuter</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Budget estimé</label>
                      <select
                        name="budget" value={formData.budget} onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Choisir</option>
                        <option value="petit">Moins de 500 000 FCFA</option>
                        <option value="moyen">500 000 à 2 000 000 FCFA</option>
                        <option value="grand">2 à 5 millions FCFA</option>
                        <option value="entreprise">Plus de 5 millions FCFA</option>
                        <option value="non-defini">Non défini</option>
                      </select>
                    </div>
                  </div>

                  <Button variant="gradient" size="lg" className="w-full mt-2">
                    <Send size={16} className="mr-2" />
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
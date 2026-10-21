import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  GraduationCap, Code, Server, Shield,
  Lightbulb, Brain, Cloud, Settings
} from "lucide-react";
import Starfield3D from "@/components/hero/Starfield3D";

const icons = [GraduationCap, Code, Server, Shield, Lightbulb, Brain, Cloud, Settings];

export default function Home() {
  const { t } = useTranslation();

  const expertises = [
    {
      title: t("home.expertises.item1.title"),
      desc: t("home.expertises.item1.desc")
    },
    {
      title: t("home.expertises.item2.title"),
      desc: t("home.expertises.item2.desc")
    },
    {
      title: t("home.expertises.item3.title"),
      desc: t("home.expertises.item3.desc")
    },
    {
      title: t("home.expertises.item4.title"),
      desc: t("home.expertises.item4.desc")
    },
    {
      title: t("home.expertises.item5.title"),
      desc: t("home.expertises.item5.desc")
    },
    {
      title: t("home.expertises.item6.title"),
      desc: t("home.expertises.item6.desc")
    },
    {
      title: t("home.expertises.item7.title"),
      desc: t("home.expertises.item7.desc")
    },
    {
      title: t("home.expertises.item8.title"),
      desc: t("home.expertises.item8.desc")
    },
  ];

  const values = [
    t("home.values.item1"),
    t("home.values.item2"),
    t("home.values.item3"),
    t("home.values.item4"),
    t("home.values.item5"),
    t("home.values.item6"),
  ];

  const steps = [
    t("home.process.step1"),
    t("home.process.step2"),
    t("home.process.step3"),
    t("home.process.step4"),
    t("home.process.step5"),
  ];

  return (
    <main className="relative z-10">
      {/* Animation 3D en fond pleine page */}
      <Starfield3D />
      
      {/* Voile semi-transparent — lisibilité sans masquer l'animation */}
      <div className="fixed inset-0 z-5 bg-black/35 pointer-events-none" />
      
      {/* ─── SECTION HERO ─── */}
      <section className="min-h-screen flex items-center justify-center py-24 px-4">
        <div className="container-x text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-200 text-sm font-medium border border-sky-400/30 mb-6">
              {t("home.hero.badge")}
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
                {t("home.hero.title")}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-sky-300 mb-8">
              {t("home.hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formations">
                <Button
                  variant="gradient"
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 text-white min-w-[220px]"
                >
                  {t("home.hero.cta1")}
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm min-w-[220px]"
                >
                  {t("home.hero.cta2")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* ─── DOMAINES D'EXPERTISE ─── */}
      <section className="section-padding bg-slate-900/30 backdrop-blur-sm">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t("home.expertises.title")}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Card key={i} className="bg-slate-900/40 border-slate-700/50 backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <Icon size={32} className="text-sky-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ─── POURQUOI CHOISIR OPENIT ─── */}
      <section className="section-padding bg-slate-950/40">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t("home.values.title")}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-700/50 p-5 rounded-xl text-center backdrop-blur-sm hover:border-sky-500/50 transition-all">
                <p className="font-medium text-slate-200">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ─── NOTRE DÉMARCHE ─── */}
      <section className="section-padding bg-slate-900/30 backdrop-blur-sm">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t("home.process.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center font-bold mx-auto mb-3 text-white shadow-lg shadow-sky-500/20">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-slate-300">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ─── APPEL À L'ACTION ─── */}
      <section className="section-padding bg-slate-950/40">
        <div className="container-x text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {t("home.cta.title")}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/formations">
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-sky-500/25 text-white min-w-[220px]"
              >
                {t("home.cta.btn1")}
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500/50 text-slate-100 hover:bg-slate-800/30 backdrop-blur-sm min-w-[220px]"
              >
                {t("home.cta.btn2")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
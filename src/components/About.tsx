import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Cpu, Database, Layout, RefreshCw, Languages, MapPin, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const profile = PORTFOLIO_DATA.profile;

  const principles = [
    {
      icon: Cpu,
      title: t.about.h1Title,
      desc: t.about.h1Desc
    },
    {
      icon: Database,
      title: t.about.h2Title,
      desc: t.about.h2Desc
    },
    {
      icon: Layout,
      title: t.about.h3Title,
      desc: t.about.h3Desc
    },
    {
      icon: RefreshCw,
      title: t.about.h4Title,
      desc: t.about.h4Desc
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
            {t.about.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.about.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 text-balance">
            {t.about.sectionSubtitle}
          </p>
        </div>

        {/* Narrative & Practical Logistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Prose Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 font-medium text-slate-900 dark:text-slate-200">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>

            {/* Language Proficiencies */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-sky-500" />
                <span>{isRTL ? 'إتقان اللغات والتواصل:' : 'Language Proficiencies:'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.spokenLanguages.map((langItem, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {isRTL ? langItem.nameAr : langItem.nameEn}
                    </span>
                    <span className="text-xs text-sky-600 dark:text-sky-400 font-mono">
                      {isRTL ? langItem.levelAr : langItem.levelEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {t.about.highlightsTitle}
            </h3>

            <div className="space-y-3.5">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-all hover:border-slate-300 dark:hover:border-slate-700"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

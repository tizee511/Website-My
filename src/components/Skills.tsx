import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Sparkles, Terminal, Code2, Database, Box } from 'lucide-react';

export const Skills: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = PORTFOLIO_DATA.skillsCategories;

  const tabList = [
    { id: 'all', label: t.skills.tabs.all },
    { id: 'backend', label: t.skills.tabs.backend },
    { id: 'frontend', label: t.skills.tabs.frontend },
    { id: 'databases', label: t.skills.tabs.databases },
    { id: 'devops', label: t.skills.tabs.devops },
  ];

  const displayedCategories = activeTab === 'all'
    ? categories
    : categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
              {t.skills.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.skills.sectionTitle}
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-balance">
              {t.skills.sectionSubtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented control buttons) */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto shrink-0 max-w-full">
            {tabList.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-slate-900 dark:bg-sky-600 text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isRTL ? cat.title.ar : cat.title.en}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {isRTL ? cat.description.ar : cat.description.en}
                  </p>
                </div>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill, sIdx) => {
                  const levelText = isRTL ? skill.levelAr : skill.level;
                  const isMastery = skill.level === 'Core Mastery';

                  return (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-xs font-medium font-mono px-2 py-0.5 rounded-sm whitespace-nowrap ${
                              isMastery
                                ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                            }`}
                          >
                            {levelText}
                          </span>
                        </div>

                        {/* Unboxed Metadata with Typographic Separator */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <span>{skill.experienceYears} {isRTL ? 'سنوات تطبيق' : 'Yrs Applied'}</span>
                          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                          <span>{isRTL ? 'إنتاجي' : 'Production'}</span>
                        </div>
                      </div>

                      {/* Tech Tags (clean, subtle) */}
                      <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-2xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 px-1.5 py-0.5 rounded-xs border border-slate-200/60 dark:border-slate-800 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend Notice */}
        <div className="mt-8 text-xs text-slate-500 dark:text-slate-400 text-center font-mono">
          {t.skills.levelLegend}
        </div>
      </div>
    </section>
  );
};

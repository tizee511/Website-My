import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const educationList = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
            {t.education.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.education.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-balance">
            {t.education.sectionSubtitle}
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((item) => {
            const isDegree = item.type === 'degree';
            const degree = isRTL ? item.degree.ar : item.degree.en;
            const institution = isRTL ? item.institution.ar : item.institution.en;
            const period = isRTL ? item.period.ar : item.period.en;
            const details = isRTL ? item.details.ar : item.details.en;

            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400">
                      {isDegree ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                      {period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {degree}
                  </h3>

                  <div className="text-sm font-medium text-sky-600 dark:text-sky-400">
                    {institution}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {details}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>{isRTL ? 'مؤهل موثق ومعتمد' : 'Verified Academic & Technical Record'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
            {t.experience.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.experience.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-balance">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-s border-slate-200 dark:border-slate-800 ms-3 sm:ms-6 space-y-12">
          {experiences.map((exp, index) => {
            const role = isRTL ? exp.role.ar : exp.role.en;
            const company = isRTL ? exp.companyOrContext.ar : exp.companyOrContext.en;
            const period = isRTL ? exp.period.ar : exp.period.en;
            const location = isRTL ? exp.location.ar : exp.location.en;
            const desc = isRTL ? exp.description.ar : exp.description.en;
            const responsibilities = isRTL ? exp.responsibilities.ar : exp.responsibilities.en;

            return (
              <div key={exp.id} className="relative ps-6 sm:ps-8">
                {/* Timeline Node Dot */}
                <span className="absolute -start-2 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 bg-sky-500 shadow-xs" />

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
                  {/* Role & Period Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {role}
                      </h3>
                      <div className="text-sm font-medium text-sky-600 dark:text-sky-400">
                        {company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{period}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {desc}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.experience.keyResponsibilities}
                    </span>
                    <ul className="space-y-2">
                      {responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech tags */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-2xs font-mono px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

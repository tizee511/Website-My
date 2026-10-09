import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export const Education: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const educationList = PORTFOLIO_DATA.education;
  const certifications = PORTFOLIO_DATA.certifications;

  return (
    <section id="education" className="py-20 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
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

        {/* Academic Degree Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {isRTL ? 'المؤهل الأكاديمي والجامعي (Academic Degree)' : 'Academic Degree'}
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {educationList.map((item) => {
              const degree = isRTL ? item.degree.ar : item.degree.en;
              const institution = isRTL ? item.institution.ar : item.institution.en;
              const period = isRTL ? item.period.ar : item.period.en;
              const details = isRTL ? item.details.ar : item.details.en;

              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {degree}
                        </h4>
                        <div className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                          {institution}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {details}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>{isRTL ? 'مشروع التخرج المعتمد: لوحة تحكم نظام يمن نقل الإدارية' : 'Flagship Graduation Project: Yemen Naql System Dashboard'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {isRTL ? 'الشهادات والاعتمادات المهنية (Certifications)' : 'Professional Certifications'}
            </h3>
            <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">
              4 {isRTL ? 'شهادات معتمدة' : 'Verified Certifications'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const name = isRTL ? cert.name.ar : cert.name.en;
              const issuer = isRTL ? cert.issuer.ar : cert.issuer.en;

              return (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {name}
                      </h4>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-sm shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {issuer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

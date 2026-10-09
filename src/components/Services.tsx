import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, Database, ArrowUpRight, CheckCircle2, Shield, Wrench, Send } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceKey: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { lang, t, isRTL } = useLanguage();
  const services = PORTFOLIO_DATA.services;

  const handleServiceInquiry = (serviceId: string) => {
    let key = 'general';
    if (serviceId === 'srv-webapp') key = 'webapp';
    else if (serviceId === 'srv-systems') key = 'systems';
    else if (serviceId === 'srv-database') key = 'database';
    else if (serviceId === 'srv-apis') key = 'api';

    onSelectService(key);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
            {t.services.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.services.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-balance">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const title = isRTL ? service.title.ar : service.title.en;
            const desc = isRTL ? service.description.ar : service.description.en;
            const scope = isRTL ? service.scope.ar : service.scope.en;
            const deliverables = isRTL ? service.deliverables.ar : service.deliverables.en;

            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">
                      0{idx + 1}
                    </span>
                    <span className="text-2xs font-mono uppercase tracking-wider text-slate-400">
                      {isRTL ? 'خدمة متخصصة' : 'Specialized Engineering'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {desc}
                  </p>

                  {/* Scope */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.services.scopeTitle}
                    </span>
                    <ul className="space-y-2">
                      {scope.map((item, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <span className="text-2xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t.services.deliverablesTitle}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                      {deliverables}
                    </p>
                  </div>
                </div>

                {/* Request Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => handleServiceInquiry(service.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-sky-600 dark:hover:bg-sky-600 text-white transition-colors cursor-pointer"
                  >
                    <span>{t.services.requestCta}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

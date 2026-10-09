import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAvatar } from '../context/AvatarContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { lang, t, isRTL } = useLanguage();
  const { avatar } = useAvatar();
  const profile = PORTFOLIO_DATA.profile;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const name = isRTL ? profile.nameAr : profile.nameEn;
  const role = isRTL ? profile.roleAr : profile.roleEn;
  const summary = isRTL ? profile.summaryAr : profile.summaryEn;
  const location = isRTL ? profile.locationAr : profile.locationEn;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions Bar (no-print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 no-print">
          <h3 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
            {t.resumeModal.title}
          </h3>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resumeModal.printCv}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={t.resumeModal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 print:p-0 print:max-h-none">
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shadow-xs shrink-0"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {name}
                  </h1>
                  <p className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {role}
                  </p>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 sm:text-end shrink-0">
                <div>{isRTL ? profile.addressAr : profile.addressEn}</div>
                <div className="text-sky-600 dark:text-sky-400 font-semibold">{profile.phone}</div>
              </div>
            </div>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                <span>{profile.email}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <span>{profile.phone}</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-500"
              >
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-sky-500"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'الملخص المهني (Professional Summary)' : 'Professional Summary'}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'المهارات التقنية (Technical Skills)' : 'Technical Skills'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">PHP & Laravel:</span>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-0.5">PHP, Laravel, Laravel Sanctum, MVC Architecture, RESTful APIs</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">Databases:</span>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-0.5">SQL & MySQL Database Design, Relational Schemas, Transactions</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">Frontend & UI:</span>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-0.5">JavaScript, HTML & CSS, Tailwind CSS, UI/UX Design, Photoshop</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">Version Control:</span>
                <p className="text-slate-600 dark:text-slate-400 font-mono mt-0.5">Git & GitHub, Composer</p>
              </div>
            </div>
          </div>

          {/* Practical Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'الخبرة العملية (Experience)' : 'Experience'}
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp) => {
                const expRole = isRTL ? exp.role.ar : exp.role.en;
                const expCompany = isRTL ? exp.companyOrContext.ar : exp.companyOrContext.en;
                const expPeriod = isRTL ? exp.period.ar : exp.period.en;
                const expResponsibilities = isRTL ? exp.responsibilities.ar : exp.responsibilities.en;

                return (
                  <div key={exp.id} className="space-y-2 p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {expRole}
                        </span>
                        <span className="text-sky-600 dark:text-sky-400 font-semibold ms-1">
                          | {expCompany}
                        </span>
                      </div>
                      <span className="font-mono text-slate-500 dark:text-slate-400 shrink-0">
                        ({expPeriod})
                      </span>
                    </div>

                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 ps-4 list-disc">
                      {expResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'المشاريع المعتمدة (Selected Projects)' : 'Selected Projects'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {isRTL ? proj.title.ar : proj.title.en}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-2xs leading-relaxed">
                    {isRTL ? proj.shortDescription.ar : proj.shortDescription.en}
                  </p>
                  <div className="font-mono text-2xs text-sky-600 dark:text-sky-400 pt-1">
                    Tech: {proj.technologies.slice(0, 4).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'التعليم (Education)' : 'Education'}
            </h2>
            <div className="space-y-2">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {isRTL ? edu.degree.ar : edu.degree.en} – {isRTL ? edu.institution.ar : edu.institution.en}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {isRTL ? edu.period.ar : edu.period.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'الشهادات المعتمدة (Certifications)' : 'Certifications'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-slate-50/70 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    • {isRTL ? cert.name.ar : cert.name.en}
                  </span>
                  <span className="font-mono text-slate-500 dark:text-slate-400 text-2xs ms-2">
                    ({cert.year})
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spoken Languages */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1">
              {isRTL ? 'اللغات (Languages)' : 'Languages'}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-700 dark:text-slate-300">
              {profile.spokenLanguages.map((l, idx) => (
                <span key={idx}>
                  <strong className="text-slate-900 dark:text-white">
                    • {isRTL ? l.nameAr : l.nameEn}:
                  </strong>{' '}
                  {isRTL ? l.levelAr : l.levelEn}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between no-print">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {t.resumeModal.contactDirect} {profile.email}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white transition-colors cursor-pointer"
          >
            {t.resumeModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};

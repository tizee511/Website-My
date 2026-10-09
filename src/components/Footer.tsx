import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t, isRTL } = useLanguage();
  const profile = PORTFOLIO_DATA.profile;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fullName = isRTL ? profile.nameAr : profile.nameEn;
  const bioBrief = t.footer.bioBrief;

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 lg:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Brief Column */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#home"
              className="text-lg font-bold text-white hover:text-sky-400 transition-colors tracking-tight inline-block"
            >
              {fullName}
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {bioBrief}
            </p>
            <div className="text-xs font-mono text-slate-500">
              {isRTL ? profile.locationAr : profile.locationEn} · nashwanqiad@gmail.com
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {t.footer.connect}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors pt-2 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {fullName} — {t.footer.rights}
          </div>
          <div className="font-mono">
            PHP Native • TALL Stack • MySQL • Docker
          </div>
        </div>
      </div>
    </footer>
  );
};

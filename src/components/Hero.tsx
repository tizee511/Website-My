import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Database, Layers, ShieldCheck, FileText, Camera, RefreshCw } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { lang, t, isRTL } = useLanguage();
  const profile = PORTFOLIO_DATA.profile;

  const [currentAvatar, setCurrentAvatar] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('custom_developer_photo');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return profile.avatarImage;
  });

  const [hasCustomAvatar, setHasCustomAvatar] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem('custom_developer_photo'));
    } catch {
      return false;
    }
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCurrentAvatar(reader.result);
          setHasCustomAvatar(true);
          try {
            localStorage.setItem('custom_developer_photo', reader.result);
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCurrentAvatar(profile.avatarImage);
    setHasCustomAvatar(false);
    try {
      localStorage.removeItem('custom_developer_photo');
    } catch {
      // ignore
    }
  };

  const fullName = isRTL ? profile.nameAr : profile.nameEn;
  const role = isRTL ? profile.roleAr : profile.roleEn;
  const tagline = isRTL ? profile.taglineAr : profile.taglineEn;
  const location = isRTL ? profile.locationAr : profile.locationEn;

  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Editorial Kicker & Location */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-wide">
                {t.hero.kicker}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{location}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-sky-600 dark:text-sky-400">
                {role}
              </p>
            </div>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-balance">
              {tagline}
            </p>

            {/* Specialization Specs */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-2xl font-mono">
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                {isRTL ? 'التركيز الهندسي: ' : 'Core Focus: '}
              </span>
              <span>{isRTL ? profile.specializationAr : profile.specializationEn}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.hero.ctaContact}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-sky-500/30 text-sky-700 dark:text-sky-300 bg-sky-50/60 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.hero.ctaResume}</span>
              </button>
            </div>

            {/* Social & Verification Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium">
                {isRTL ? 'حسابات رسمية:' : 'Profiles:'}
              </span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-3">
            <div className="relative group w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-md">
              <img
                src={currentAvatar}
                alt={`${fullName} - Full-Stack Developer`}
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Frame Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between pointer-events-none">
                <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/10">
                  {isRTL ? 'مهندس برمجيات معتمد' : 'Verified Software Engineer'}
                </span>
                <span className="font-mono text-sky-300 bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs border border-white/10">
                  3+ Yrs Exp
                </span>
              </div>

              {/* Direct Photo Upload Overlay Action */}
              <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                <label
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-2xs font-semibold rounded-md bg-slate-900/80 backdrop-blur-xs text-white border border-white/20 hover:bg-slate-900 cursor-pointer transition-colors shadow-xs"
                  title={isRTL ? 'رفع أو استبدال صورتك الأصلية مباشرة' : 'Upload or replace your custom original photo'}
                >
                  <Camera className="w-3.5 h-3.5 text-sky-400" />
                  <span>{isRTL ? 'تغيير الصورة' : 'Upload Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
                {hasCustomAvatar && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="p-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-slate-300 hover:text-white border border-white/20 hover:bg-slate-900 cursor-pointer transition-colors"
                    title={isRTL ? 'استعادة الصورة الافتراضية' : 'Reset to default image'}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below the Split */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {/* Metric 1 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-sky-600 dark:text-sky-400 mb-2">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-mono font-bold text-slate-400">01</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                3+ {isRTL ? 'سنوات' : 'Years'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isRTL ? 'خبرة عملية متراكمة في هندسة الويب' : 'Practical web engineering experience'}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-sky-600 dark:text-sky-400 mb-2">
                <Code2 className="w-5 h-5" />
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                TALL & PHP
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isRTL ? 'إتقان Tailwind, Alpine, Laravel, Livewire' : 'Deep native mastery & reactive architecture'}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-sky-600 dark:text-sky-400 mb-2">
                <Database className="w-5 h-5" />
                <span className="text-xs font-mono font-bold text-slate-400">03</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                MySQL & ACID
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isRTL ? 'تطبيع المخططات وهندسة الاستعلامات' : 'Relational schema design & indexing'}
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-sky-600 dark:text-sky-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-mono font-bold text-slate-400">04</span>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                Docker & LEMP
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {isRTL ? 'بيئات تشغيل معزولة ومستقرة' : 'Reproducible containers & steady ops'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send, AlertCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  selectedServiceKey: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServiceKey }) => {
  const { lang, t, isRTL } = useLanguage();
  const profile = PORTFOLIO_DATA.profile;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedServiceKey || 'general',
    message: '',
    honeypot: '', // bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceKey) {
      setFormData((prev) => ({ ...prev, service: selectedServiceKey }));
    }
  }, [selectedServiceKey]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = isRTL ? 'الرجاء إدخال الاسم' : 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? 'الرجاء إدخال البريد الإلكتروني' : 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isRTL ? 'صيغة البريد الإلكتروني غير صالحة' : 'Invalid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = isRTL ? 'الرسالة قصيرة جدًا (على الأقل 10 أحرف)' : 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & log to local storage for persistence
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        existing.push({
          ...formData,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('portfolio_messages', JSON.stringify(existing));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.service}`);
  const mailtoBody = encodeURIComponent(
    `Hello Nashwan,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`
  );
  const directMailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-2">
            {t.contact.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.contact.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 text-balance">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Content Split: Direct Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <Mail className="w-4 h-4 text-sky-500" />
                <span>{t.contact.emailLabel}</span>
              </div>

              <div className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all">
                {profile.email}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t.contact.copiedNotice : t.contact.copyEmail}</span>
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'إرسال بريد الآن' : 'Compose Email'}</span>
                </a>
              </div>
            </div>

            {/* Location & Response Time */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{t.contact.locationLabel}</span>
              </div>

              <div className="text-base font-bold text-slate-900 dark:text-white">
                {isRTL ? profile.locationAr : profile.locationEn}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {isRTL
                  ? 'متاحة للتعاون المهني والعقود البرمجية عن بُعد أو محليًا، مع استجابة سريعة للرسائل خلال 24 ساعة.'
                  : 'Available for remote contract development or on-site consulting with swift turnaround times within 24 hours.'}
              </p>
            </div>

            {/* Official Professional Profiles */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t.contact.socialLabel}
              </div>

              <div className="space-y-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span>GitHub: tizee511</span>
                  </div>
                  <ArrowUpRight className={`w-3.5 h-3.5 text-slate-400 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className={`w-3.5 h-3.5 text-slate-400 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: 'general',
                          message: '',
                          honeypot: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
                    >
                      {t.contact.sendAnother}
                    </button>
                    <a
                      href={directMailtoUrl}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white"
                    >
                      {t.contact.directEmailBtn}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                    {t.contact.formTitle}
                  </h3>

                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_trap"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.name} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.email} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors font-mono"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Service / Subject Select */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.service}
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                    >
                      <option value="general">{t.contact.serviceOptions.general}</option>
                      <option value="webapp">{t.contact.serviceOptions.webapp}</option>
                      <option value="systems">{t.contact.serviceOptions.systems}</option>
                      <option value="database">{t.contact.serviceOptions.database}</option>
                      <option value="api">{t.contact.serviceOptions.api}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.contact.message} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.contact.sendingBtn : t.contact.sendBtn}</span>
                    </button>

                    <a
                      href={directMailtoUrl}
                      className="text-xs text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {t.contact.directEmailBtn}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

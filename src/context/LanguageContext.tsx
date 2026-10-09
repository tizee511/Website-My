import React, { createContext, useContext, useEffect, useState } from 'react';
import { UI_TRANSLATIONS } from '../data/portfolioData';

type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (newLang: Language) => void;
  t: typeof UI_TRANSLATIONS.ar;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'ar'; // Default Arabic as requested
  });

  const isRTL = lang === 'ar';

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [lang, isRTL]);

  const toggleLanguage = () => {
    setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = UI_TRANSLATIONS[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

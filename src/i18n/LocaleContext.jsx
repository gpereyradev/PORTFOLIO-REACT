import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initialLanguage, translate } from './locale.js';
import { englishUI } from './ui.en.js';
const LocaleContext = createContext(null);
export function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en'
      ? 'Guillermo Pereyra, software developer, UX/UI designer and Software Engineering with AI student. Explore my projects, certifications and playable prototypes.'
      : 'Guillermo Pereyra, desarrollador de software, diseñador UX/UI y estudiante de Ingeniería de Software con IA. Explora mis proyectos, certificados y prototipos jugables.');
  }, [language]);
  const value = useMemo(() => ({language, setLanguage(next) {
    if (!['es','en'].includes(next)) return;
    setLanguage(next);
    try { localStorage.setItem('gp-portfolio-language', next); } catch { /* Language still works without persistence. */ }
  }, t: text => translate(text, language, englishUI)}), [language]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
export function useLocale() { return useContext(LocaleContext); }

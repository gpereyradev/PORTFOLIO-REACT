export const supportedLanguages = ['es', 'en'];
export function detectLanguage(saved, languages = []) {
  if (supportedLanguages.includes(saved)) return saved;
  const primary = String(languages[0] || 'es').toLowerCase().split(/[-_]/)[0];
  return supportedLanguages.includes(primary) ? primary : 'es';
}
export function initialLanguage() {
  let saved;
  try { saved = localStorage.getItem('gp-portfolio-language'); } catch { /* Private browsing can block storage. */ }
  return detectLanguage(saved, navigator.languages?.length ? navigator.languages : [navigator.language]);
}
export function translate(text, language, dictionary) {
  if (language !== 'en' || typeof text !== 'string') return text;
  const key = text.replace(/\s+/g, ' ').trim();
  return dictionary[key] === undefined ? text : text.match(/^\s*/)[0] + dictionary[key] + text.match(/\s*$/)[0];
}

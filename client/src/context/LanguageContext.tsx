import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Language, Translations, translations } from "../i18n/translations";

export const LANG_STORAGE_KEY = "leanovex_lang";
const DEFAULT_LANGUAGE: Language = "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const detectLangFromPath = (pathname: string): Language | null => {
  const match = pathname.match(/^\/(en|fr)(?:\/|$)/);
  return match ? (match[1] as Language) : null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlLang = detectLangFromPath(location.pathname);
  const language: Language = urlLang ?? DEFAULT_LANGUAGE;

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLang: Language) => {
    if (nextLang === language) return;
    const rest = urlLang ? location.pathname.slice(3) : location.pathname;
    const newPath = `/${nextLang}${rest === "/" ? "" : rest}`;
    navigate(`${newPath}${location.search}${location.hash}`);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};

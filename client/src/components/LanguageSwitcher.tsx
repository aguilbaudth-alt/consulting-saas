import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 p-0.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-2.5 py-1 transition ${
          language === "en" ? "bg-blue-950 text-white" : "text-slate-500 hover:text-blue-900"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`rounded-full px-2.5 py-1 transition ${
          language === "fr" ? "bg-blue-950 text-white" : "text-slate-500 hover:text-blue-900"
        }`}
      >
        FR
      </button>
    </div>
  );
};

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationPT from "./locales/pt.json";
import translationEN from "./locales/en.json";
import translationES from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt", // <- aqui está a chave
    lng: "pt", // <- força o padrão como pt
    resources: {
      pt: { translation: translationPT },
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    detection: {
      order: [
        "navigator",
        "htmlTag",
        "cookie",
        "localStorage",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import "dayjs/locale/pt";
import "dayjs/locale/es";

import dayjs from "dayjs";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import pt from "./pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "pt",
    supportedLngs: ["pt", "en"],
    ns: ["translations"],
    defaultNS: "translations",
    resources: {
      pt: { translations: pt },
      en: { translations: en },
    },
    detection: {
      order: ["querystring", "localStorage", "sessionStorage", "navigator"],
      caches: ["localStorage", "sessionStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const detectedLanguage = i18n.language || "en";
dayjs.locale(detectedLanguage);

export default i18n;

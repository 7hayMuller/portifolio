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
    debug: false,
    fallbackLng: "en",
    supportedLngs: ["pt", "en"],
    ns: ["translations"],
    defaultNS: "translations",
    resources: {
      pt: { translations: pt },
      en: { translations: en },
    },
    detection: {
      order: ["localStorage", "sessionStorage", "querystring", "navigator"],
      caches: ["localStorage", "sessionStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof window !== "undefined") {
  dayjs.locale(i18n.language || "en");
}

export default i18n;

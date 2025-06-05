import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./translations/en/global.json";
import ar from "./translations/ar/globale.json";
import fr from "./translations/fr/global.json";

const DEFAULT_LANGUAGE = "en";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en,
      ar,
      fr,
    },
  });

// window.addEventListener('beforeunload', () => {
//   localStorage.setItem('i18nLang', DEFAULT_LANGUAGE);
// });

i18n.changeLanguage(DEFAULT_LANGUAGE);

export default i18n;

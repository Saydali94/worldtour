import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          siteName: "Altours Travel Agency",
          phone: "Phone",
          email: "Email",
        },
      },
      uz: {
        translation: {
          siteName: "Altours Sayohat Agentligi",
          phone: "Telefon",
          email: "Elektron pochta",
        },
      },
      ru: {
        translation: {
          siteName: "Туристическое агентство Altours",
          phone: "Телефон",
          email: "Эл. почта",
        },
      },
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LANG } from 'utility/constants';
import { en } from './locales/en.json';
import { zh } from './locales/zh.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: {
        lang: en
      },
      zh: {
        lang  : zh
      }
    },
    ns: ['lang'],
    defaultNS: 'lang',
    detection: {
      order: ['querystring'],
      lookupQuerystring: 'lng',
    },
    lng: LANG,
    whitelist: ['en', 'zh'],
    checkWhitelist: true,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  // .changeLanguage('en', (err, t) => {
  //   if (err) return console.log('something went wrong loading', err);
  // })
  ;

export default i18n;
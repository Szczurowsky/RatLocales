import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import XHR from 'i18next-xhr-backend';

import enFile from './locales/en.json';
import plFile from './locales/pl.json';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: options,
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',
      whitelist: ['en', 'pl'],
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: 'locales/{{lng}}.json',
      },
      resources: {
        en: {
          // eslint-disable-next-line camelcase
          translation: enFile,
        },
        pl: {
          // eslint-disable-next-line camelcase
          translation: plFile,
        },
      },
    });

export default i18n;

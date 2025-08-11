import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../data/en.json';
import hi from '../data/hi.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

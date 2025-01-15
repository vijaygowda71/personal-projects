import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '../localization/english.json';
import ar from '../localization/arabic.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: Localization.locale.startsWith('ar') ? 'ar' : 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;

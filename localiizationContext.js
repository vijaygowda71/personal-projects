import React, { createContext, useContext, useState, useCallback } from 'react';
import { I18nManager, LayoutAnimation } from 'react-native';
import { I18n } from 'i18n-js';

const LocalizationContext = createContext();

const translations = {
  en: { welcome: 'Hello', name: 'Charlie' },
  ja: { welcome: 'こんにちは', name: 'チャーリー' },
  ars: { welcome: 'مرحبا', name: 'تشارلي' },
  fr: { welcome: 'Bonjour', name: 'Charlie' }
};

const i18n = new I18n(translations);
i18n.enableFallback = true;

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const changeLanguage = useCallback((newLocale) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setLocale(newLocale);
    i18n.locale = newLocale;
    I18nManager.forceRTL(newLocale === 'ars');
  }, []);

  const t = useCallback((key, options) => {
    return i18n.t(key, options);
  }, []);

  return (
    <LocalizationContext.Provider value={{
      locale,
      changeLanguage,
      t,
      isRTL: locale === 'ars'
    }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
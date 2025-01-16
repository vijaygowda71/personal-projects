import React, { createContext, useContext, useState, useCallback } from 'react';
import { I18nManager, LayoutAnimation } from 'react-native';
import { I18n } from 'i18n-js';

const LocalizationContext = createContext();

const translations = {
  en: {
    welcome: 'Hello',
    name: 'Charlie',
    goToProfile: 'Go to Profile',
    goToSettings: 'Go to Settings',
    goToLogin: 'Go to Login',
    profileTitle: 'Profile',
    profileDescription: 'This is your profile page',
    settingsTitle: 'Settings',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password', 
    login: 'Login',
    enterName: 'Enter your name',
    forgotPassword: 'Forgot Password?',
    signUp: 'Sign Up',
  },
  ja: {
    welcome: 'こんにちは',
    name: 'チャーリー',
    goToProfile: 'プロフィールへ',
    goToSettings: '設定へ',
    goToLogin: 'ログインへ',
    profileTitle: 'プロフィール',
    profileDescription: 'これはあなたのプロフィールページです',
    settingsTitle: '設定',
    enterEmail: 'メールアドレスを入力してください',
    enterPassword: 'パスワードを入力してください',
    login: 'ログイン',
    enterName: 'あなたの名前を入力してください',
    forgotPassword: 'パスワードをお忘れですか？',
    signUp: 'サインアップ',
  },
  ars: {
    welcome: 'مرحبا',
    name: 'تشارلي',
    goToProfile: 'الذهاب إلى الملف الشخصي',
    goToSettings: 'الذهاب إلى الإعدادات',
    goToLogin: 'الذهاب إلى تسجيل الدخول',
    profileTitle: 'الملف الشخصي',
    profileDescription: 'هذه صفحة ملفك الشخصي',
    settingsTitle: 'الإعدادات',
    enterEmail: 'أدخل بريدك الإلكتروني',
    enterPassword: 'أدخل كلمة المرور الخاصة بك',
    login: 'تسجيل الدخول',  
    enterName: 'أدخل اسمك',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    signUp: 'سجل',
  },
  fr: {
    welcome: 'Bonjour',
    name: 'Charlie',
    goToProfile: 'Aller au profil',
    goToSettings: 'Aller aux paramètres',
    goToLogin: 'Aller à la page de connexion',
    profileTitle: 'Profil',
    profileDescription: 'Ceci est votre page de profil',
    settingsTitle: 'Paramètres',
    enterEmail: 'Entrez votre email',
    enterPassword: 'Entrez votre mot de passe',
    login: 'S\'identifier',
    enterName: 'Entrez votre nom',
    forgotPassword: 'Mot de passe oublié?',
    signUp: 'S\'ins crire',
  }
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
"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "fr" | "en" | "es" | "pt";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "app_locale";
const defaultLocale: Locale = "fr";
const validLocales: Locale[] = ["fr", "en", "es", "pt"];

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved && validLocales.includes(saved as Locale)) {
    return saved as Locale;
  }

  const browserLang = navigator.language.split("-")[0];
  if (validLocales.includes(browserLang as Locale)) {
    return browserLang as Locale;
  }

  return defaultLocale;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

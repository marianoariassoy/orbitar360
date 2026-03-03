"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getTranslations } from "./translations";

export function useT() {
  const { locale } = useLanguage();
  return getTranslations(locale);
}

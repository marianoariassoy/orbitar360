"use client";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <nav className="flex flex-col justify-end items-end gap-y-2 font-semibold text-sm">
      <button
        className={`hover:underline underline-offset-4 cursor-pointer ${locale === "fr" ? "underline" : ""}`}
        onClick={() => setLocale("fr")}
      >
        Français
      </button>
      <button
        className={`hover:underline underline-offset-4 cursor-pointer ${locale === "en" ? "underline" : ""}`}
        onClick={() => setLocale("en")}
      >
        English
      </button>
      <button
        className={`hover:underline underline-offset-4 cursor-pointer ${locale === "es" ? "underline" : ""}`}
        onClick={() => setLocale("es")}
      >
        Español
      </button>
      <button
        className={`hover:underline underline-offset-4 cursor-pointer ${locale === "pt" ? "underline" : ""}`}
        onClick={() => setLocale("pt")}
      >
        Português
      </button>
    </nav>
  );
}

export default LanguageSwitcher;

"use client";

import { useState } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-warm-gray/40 text-xs font-semibold hover:border-rose/40 transition-colors"
      >
        <span>{localeFlags[locale]}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-warm-gray/30 overflow-hidden min-w-[120px] z-50">
          {locales.map((l: Locale) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-medium hover:bg-rose-light/30 transition-colors ${
                locale === l ? "bg-rose-light/50 text-rose" : "text-foreground/70"
              }`}
            >
              <span className="font-semibold">{localeFlags[l]}</span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

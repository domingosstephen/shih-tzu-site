"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/lib/LocaleContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose to-accent-light flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow">
            SW
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-gradient">Shih Tzu</span>
            <span className="text-foreground">Welpen</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-rose transition-colors">{t("nav.home")}</Link>
          <Link href="/welpen" className="text-sm font-medium hover:text-rose transition-colors">{t("nav.puppies")}</Link>
          <Link href="/ueber-uns" className="text-sm font-medium hover:text-rose transition-colors">{t("nav.about")}</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-rose transition-colors">Blog</Link>
          <Link href="/kontakt" className="text-sm font-medium hover:text-rose transition-colors">{t("nav.contact")}</Link>
          <LanguageSwitcher />
          <Link
            href="/welpen"
            className="bg-rose text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-rose/20"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label={t("nav.menu")}
          >
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-xl transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-base font-medium">{t("nav.home")}</Link>
          <Link href="/welpen" onClick={() => setMobileOpen(false)} className="text-base font-medium">{t("nav.puppies")}</Link>
          <Link href="/ueber-uns" onClick={() => setMobileOpen(false)} className="text-base font-medium">{t("nav.about")}</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-base font-medium">Blog</Link>
          <Link href="/kontakt" onClick={() => setMobileOpen(false)} className="text-base font-medium">{t("nav.contact")}</Link>
          <Link href="/welpen" onClick={() => setMobileOpen(false)} className="bg-rose text-white px-6 py-3 rounded-full text-center text-sm font-semibold">
            {t("nav.cta")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-foreground text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-accent-light">Shih Tzu</span>
                <span className="text-white">Welpen</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md mb-6">{t("footer.desc")}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/welpen" className="hover:text-accent-light transition-colors">{t("nav.puppies")}</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-accent-light transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-accent-light transition-colors">{t("nav.contact")}</Link></li>
              <li><Link href="/blog" className="hover:text-accent-light transition-colors">Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-accent-light transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm">
              <li>hufmannardine@gmail.com</li>
              <li>+49 1573 9205655</li>
              <li>{t("contact.hours.value")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} ShihTzuWelpen. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent-light transition-colors">{t("footer.privacy")}</Link>
            <Link href="#" className="hover:text-accent-light transition-colors">{t("footer.imprint")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

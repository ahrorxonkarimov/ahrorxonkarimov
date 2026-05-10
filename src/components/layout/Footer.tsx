"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";

const InstagramSvg = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-ak">
      <div className="container-ak py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand — spans 2 cols on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-600 shrink-0">
                <Image src="/ahrorxon.jpg" alt="AK" width={28} height={28} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-white">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              Tibbiyot talabasi va Doclab.uz platformasi asoschisi.
            </p>
            <div className="flex gap-2">
              <a href={SITE_CONFIG.author.telegram} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors"><Send className="h-3.5 w-3.5" /></a>
              <a href={`mailto:${SITE_CONFIG.author.email}`} className="p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors"><Mail className="h-3.5 w-3.5" /></a>
              <a href={SITE_CONFIG.author.instagram} target="_blank" rel="noreferrer" className="p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors"><InstagramSvg /></a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Sahifalar</h4>
            <ul className="space-y-1.5">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Boshqa</h4>
            <ul className="space-y-1.5">
              {NAVIGATION_ITEMS.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-xs text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Aloqa</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <Mail className="h-3 w-3 text-gray-500 mt-0.5 shrink-0" />
                <span className="break-all">{SITE_CONFIG.author.email}</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-400">
                <Phone className="h-3 w-3 text-gray-500 shrink-0" /> {SITE_CONFIG.author.phone}
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-400">
                <MapPin className="h-3 w-3 text-gray-500 mt-0.5 shrink-0" /> {SITE_CONFIG.author.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-800 text-center">
          <p className="text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}

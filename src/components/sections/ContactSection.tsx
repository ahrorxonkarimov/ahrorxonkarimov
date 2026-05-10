"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Send, ExternalLink, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { createMessage } from "@/app/actions/messages";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsLoading(true);
    const result = await createMessage({ name, email, phone, message });
    setIsLoading(false);

    if (result.success) {
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section className="section-alt py-16 md:py-24 border-t">
      <div className="container-ak space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Aloqa uchun</h2>
          <p className="text-sm text-muted-foreground">
            Loyiha takliflari yoki rasmiy murojaatlar uchun quyidagi kanallardan foydalaning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="border rounded-lg overflow-hidden bg-card">
            <div className="divide-y">
              {/* Email */}
              <div className="flex items-center gap-4 px-5 py-4 hover:bg-accent/50 transition-colors">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Elektron pochta</p>
                  <a href={`mailto:${SITE_CONFIG.author.email}`} className="text-sm font-medium text-primary hover:underline">
                    {SITE_CONFIG.author.email}
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-center gap-4 px-5 py-4 hover:bg-accent/50 transition-colors">
                <Send className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Telegram</p>
                  <a href={SITE_CONFIG.author.telegram} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline">
                    @doclabceo
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 px-5 py-4 hover:bg-accent/50 transition-colors">
                <InstagramIcon />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Instagram</p>
                  <a href={SITE_CONFIG.author.instagram} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline">
                    @doclabceo
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 px-5 py-4 hover:bg-accent/50 transition-colors">
                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Telefon</p>
                  <a href={`tel:${SITE_CONFIG.author.phone.replace(/\s/g, '')}`} className="text-sm font-medium text-primary hover:underline">
                    {SITE_CONFIG.author.phone}
                  </a>
                </div>
              </div>

              {/* Location — NOT a link */}
              <div className="flex items-center gap-4 px-5 py-4">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Manzil</p>
                  <p className="text-sm font-medium">{SITE_CONFIG.author.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border rounded-lg p-5 bg-card space-y-4">
            <h3 className="text-base font-bold">Xabar yuborish</h3>

            {sent && (
              <div className="flex items-center gap-2 p-3 rounded bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium">
                <CheckCircle className="h-4 w-4 shrink-0" />
                Xabaringiz muvaffaqiyatli yuborildi!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Ismingiz *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary"
                    placeholder="To'liq ism"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Xabar *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Xabaringizni yozing..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isLoading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

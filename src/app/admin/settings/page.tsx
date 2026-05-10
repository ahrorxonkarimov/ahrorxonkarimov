"use client";

import { Save } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function AdminSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sozlamalar</h1>
        <p className="text-sm text-muted-foreground mt-1">Sayt va profil sozlamalarini boshqaring.</p>
      </div>

      {/* Profile Settings */}
      <section className="border rounded-lg overflow-hidden">
        <div className="px-4 py-3 bg-card border-b">
          <h2 className="text-sm font-bold">Profil ma&apos;lumotlari</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">To&apos;liq ism</label>
              <input type="text" defaultValue={SITE_CONFIG.name} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Chaqirilish ismi</label>
              <input type="text" defaultValue={SITE_CONFIG.preferredName} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email</label>
              <input type="email" defaultValue={SITE_CONFIG.author.email} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Telefon</label>
              <input type="text" defaultValue={SITE_CONFIG.author.phone} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Biografiya</label>
            <textarea rows={3} defaultValue={SITE_CONFIG.author.bio} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary resize-none" />
          </div>
        </div>
      </section>

      {/* Site Settings */}
      <section className="border rounded-lg overflow-hidden">
        <div className="px-4 py-3 bg-card border-b">
          <h2 className="text-sm font-bold">Sayt sozlamalari</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Sayt sarlavhasi</label>
              <input type="text" defaultValue={SITE_CONFIG.title} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Sayt URL</label>
              <input type="text" defaultValue={SITE_CONFIG.url} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">Meta tavsif</label>
            <textarea rows={2} defaultValue={SITE_CONFIG.description} className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary resize-none" />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border rounded-lg overflow-hidden">
        <div className="px-4 py-3 bg-card border-b">
          <h2 className="text-sm font-bold">Xavfsizlik</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Hozirgi parol</label>
              <input type="password" className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Yangi parol</label>
              <input type="password" className="w-full px-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors">
          <Save className="h-4 w-4" /> Saqlash
        </button>
      </div>
    </div>
  );
}

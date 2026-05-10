"use client";

import { Users, FileText, FolderOpen, Eye, TrendingUp, Clock, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Foydalanuvchilar", value: "24", icon: Users, change: "+3 bu hafta", href: "/admin/users" },
    { label: "Maqolalar", value: "12", icon: FileText, change: "4 ta qoralama", href: "/admin/posts" },
    { label: "Loyihalar", value: "3", icon: FolderOpen, change: "1 ta faol", href: "/admin/projects" },
    { label: "Xabarlar", value: "0", icon: MessageSquare, change: "Aloqa formasi", href: "/admin/messages" },
  ];

  const recentActivity = [
    { action: "Yangi foydalanuvchi ro'yxatdan o'tdi", user: "user@example.com", time: "5 daqiqa oldin" },
    { action: "\"Doclab.uz yangilanishi\" maqolasi tahrirlandi", user: "Admin", time: "2 soat oldin" },
    { action: "Yangi media fayl yuklandi", user: "Admin", time: "4 soat oldin" },
    { action: "Yangi foydalanuvchi ro'yxatdan o'tdi", user: "student@adti.uz", time: "1 kun oldin" },
    { action: "\"Tibbiyotda AI\" maqolasi e'lon qilindi", user: "Admin", time: "2 kun oldin" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Xush kelibsiz, Abdulloh. Saytingiz umumiy ko&apos;rinishi.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="card-ak group">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="h-5 w-5 text-muted-foreground" />
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            <p className="text-xs text-primary mt-2 font-medium">{stat.change}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/admin/posts" className="card-ak flex items-center gap-3 group">
          <div className="p-2 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600">
            <FileText className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold group-hover:text-primary transition-colors">Yangi maqola</p>
            <p className="text-xs text-muted-foreground">Blog postni yarating</p>
          </div>
        </Link>
        <Link href="/admin/projects" className="card-ak flex items-center gap-3 group">
          <div className="p-2 rounded bg-green-50 dark:bg-green-500/10 text-green-600">
            <FolderOpen className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold group-hover:text-primary transition-colors">Loyiha qo&apos;shish</p>
            <p className="text-xs text-muted-foreground">Yangi loyiha kiriting</p>
          </div>
        </Link>
        <Link href="/admin/media" className="card-ak flex items-center gap-3 group">
          <div className="p-2 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold group-hover:text-primary transition-colors">Media yuklash</p>
            <p className="text-xs text-muted-foreground">Rasm yoki fayl yuklang</p>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="border rounded-lg overflow-hidden">
        <div className="px-4 py-3 bg-card border-b">
          <h2 className="text-sm font-bold">So&apos;nggi faoliyat</h2>
        </div>
        <div className="divide-y">
          {recentActivity.map((item, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm truncate">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.user}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

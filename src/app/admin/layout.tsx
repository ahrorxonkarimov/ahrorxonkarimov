"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Xabarlar", href: "/admin/messages", icon: MessageSquare },
  { label: "Maqolalar", href: "/admin/posts", icon: FileText },
  { label: "Loyihalar", href: "/admin/projects", icon: FolderOpen },
  { label: "Materiallar", href: "/admin/materials", icon: FileText },
  { label: "Media", href: "/admin/media", icon: ImageIcon },
  { label: "Foydalanuvchilar", href: "/admin/users", icon: Users },
  { label: "Sozlamalar", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar — Desktop */}
      <aside className="hidden lg:flex w-56 flex-col border-r bg-card shrink-0">
        <div className="p-4 border-b flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold">Admin Panel</span>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2 text-sm rounded transition-colors",
                pathname === item.href
                  ? "bg-primary text-white font-semibold"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t">
          <form action={async () => {
            const { logoutUser } = await import("@/app/actions/auth");
            await logoutUser();
            window.location.href = "/admin/login";
          }}>
            <button type="submit" className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded transition-colors">
              <LogOut className="h-4 w-4" />
              Tizimdan chiqish
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-card border-b">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold">Admin</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded hover:bg-accent">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)}>
          <aside className="w-56 h-full bg-card border-r" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <span className="text-sm font-bold">Admin Panel</span>
            </div>
            <nav className="p-3 space-y-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 text-sm rounded transition-colors",
                    pathname === item.href
                      ? "bg-primary text-white font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-14 lg:pt-0">
        <div className="p-6 md:p-8 max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}

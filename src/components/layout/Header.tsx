"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-ak flex h-14 items-center justify-between">
        {/* Logo + Name with round avatar */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20 shrink-0">
            <Image src="/ahrorxon.jpg" alt="AK" width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded transition-colors",
                pathname === item.href
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="hidden sm:inline-flex h-8 items-center px-4 text-xs font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Kirish
          </Link>
          <button
            className="lg:hidden p-1.5 rounded text-muted-foreground hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-ak py-4 space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 text-sm font-medium rounded transition-colors",
                  pathname === item.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block mt-3 text-center py-2.5 text-sm font-semibold rounded bg-primary text-white"
              onClick={() => setIsOpen(false)}
            >
              Kirish
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

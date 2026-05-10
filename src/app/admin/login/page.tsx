"use client";

import React, { useState } from "react";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple hardcoded check for demonstration (In production, use a secure API route)
    setTimeout(() => {
      if (email === "ahrorxon.official@gmail.com" && password === "admin123") {
        document.cookie = "admin_auth=true; path=/; max-age=86400"; // 1 day expiration
        router.push("/admin");
        router.refresh();
      } else {
        setError("Email yoki parol noto'g'ri kiritildi.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-8 border rounded-2xl bg-card shadow-sm">
        <div>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
            Admin Panelga kirish
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Faqat vakolatli shaxslar (Doclab adminlari) uchun
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email manzil</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm focus:ring-1 focus:ring-primary"
                  placeholder="admin@doclab.uz"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Parol</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm focus:ring-1 focus:ring-primary"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md bg-primary py-2.5 px-4 text-sm font-semibold text-white hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isLoading ? "Tekshirilmoqda..." : "Tizimga kirish"}
          </button>

        </form>
      </div>
    </div>
  );
}

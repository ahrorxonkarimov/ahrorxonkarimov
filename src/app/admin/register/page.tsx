"use client";

import React, { useState } from "react";
import { UserPlus, Mail, Lock, AlertCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/auth";
import Link from "next/link";

export default function AdminRegisterPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (formData: FormData) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await registerUser(formData);
      if (result.error) {
        setError(result.error);
        setIsLoading(false);
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Tizimda xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 p-8 border rounded-2xl bg-card shadow-sm">
        <div>
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground">
            Ro'yxatdan o'tish
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Yangi administrator akkauntini yarating
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={handleRegister}>
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">To'liq ism</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm focus:ring-1 focus:ring-primary"
                  placeholder="Ismingizni kiriting"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email manzil</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  required
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
                  name="password"
                  required
                  minLength={6}
                  className="block w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm focus:ring-1 focus:ring-primary"
                  placeholder="Kamida 6 ta belgi"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md bg-primary py-2.5 px-4 text-sm font-semibold text-white hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isLoading ? "Yaratilmoqda..." : "Akkaunt yaratish"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-muted-foreground">
            Akkauntingiz bormi?{" "}
            <Link href="/admin/login" className="font-medium text-primary hover:underline">
              Tizimga kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

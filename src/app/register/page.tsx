"use client";

import { motion } from "framer-motion";
import { UserPlus, ArrowLeft, Mail, Lock, AlertCircle, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/auth";

export default function RegisterPage() {
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
        router.push("/admin"); // For now, the user can go to admin if they are an admin
        router.refresh();
      }
    } catch (err) {
      setError("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 md:p-12 rounded-[2.5rem] border bg-card shadow-2xl space-y-8"
      >
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
            <UserPlus className="h-10 w-10" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black tracking-tight uppercase text-foreground">Ro&apos;yxatdan o&apos;tish</h1>
          <p className="text-muted-foreground font-medium">Yangi profil yarating</p>
        </div>

        <form action={handleRegister} className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 rounded flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl border bg-background focus:ring-2 focus:ring-primary outline-none"
                placeholder="To'liq ismingiz"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl border bg-background focus:ring-2 focus:ring-primary outline-none"
                placeholder="Email manzil"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="password"
                name="password"
                required
                minLength={6}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border bg-background focus:ring-2 focus:ring-primary outline-none"
                placeholder="Parol (kamida 6 ta belgi)"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-white font-black uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-70"
          >
            {isLoading ? "Yaratilmoqda..." : <><UserPlus className="h-5 w-5" /> Ro&apos;yxatdan o&apos;tish</>}
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground font-medium">
            Akkauntingiz bormi?{" "}
            <Link href="/login" className="text-primary hover:underline">Kirish</Link>
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Bosh sahifaga qaytish
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

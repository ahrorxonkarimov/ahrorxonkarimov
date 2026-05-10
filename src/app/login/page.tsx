"use client";

import { motion } from "framer-motion";
import { User, LogIn, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md p-8 md:p-12 rounded-[2.5rem] border bg-card shadow-2xl space-y-8"
      >
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
            <User className="h-10 w-10" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-black tracking-tight uppercase text-foreground">Xush kelibsiz</h1>
          <p className="text-muted-foreground font-medium">Foydalanuvchi portali</p>
        </div>

        <div className="space-y-4">
          <p className="text-center text-sm text-muted-foreground italic">
            Foydalanuvchi akkauntlari tizimi hozirda ishlab chiqilmoqda. Tez orada Doclab foydalanuvchilari uchun barcha imkoniyatlar ochiladi.
          </p>
          
          <Link 
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 py-4 text-sm font-black uppercase tracking-widest hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Bosh sahifaga qaytish
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

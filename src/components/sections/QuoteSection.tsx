"use client";

import { motion } from "framer-motion";
import { Quote as QuoteIcon } from "lucide-react";

export default function QuoteSection() {
  // Static quote to avoid missing constants error
  const quote = "Allohni eslatadigan musibat, Allohni unuttiradigan ne'matdan yaxshiroq.";

  return (
    <section className="py-12">
      <div className="relative p-8 md:p-12 rounded-3xl border bg-card/50 overflow-hidden">
        <div className="absolute top-4 right-8 opacity-10">
          <QuoteIcon className="h-24 w-24" />
        </div>
        <blockquote className="relative z-10 space-y-4">
          <p className="text-2xl md:text-3xl font-medium italic text-foreground leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="text-sm text-muted-foreground">— Hikmatli so&apos;z</footer>
        </blockquote>
      </div>
    </section>
  );
}

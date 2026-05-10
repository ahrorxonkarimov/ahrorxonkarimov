"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 border-b">
      <div className="container-ak">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image — compact on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="order-1 lg:order-2 shrink-0"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/ahrorxon.jpg"
                alt={SITE_CONFIG.name}
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-2 lg:order-1 flex-1 text-center lg:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              {SITE_CONFIG.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {SITE_CONFIG.author.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Loyihalarim <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded border text-foreground hover:bg-accent transition-colors"
              >
                Bog&apos;lanish
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

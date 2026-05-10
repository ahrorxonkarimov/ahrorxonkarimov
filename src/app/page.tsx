"use client";

import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import { LATEST_POSTS } from "@/lib/constants";
import { ArrowRight, BookOpen, Newspaper, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const getIcon = (category: string) => {
    if (category === "Maqola") return BookOpen;
    if (category === "Loyiha") return Newspaper;
    return FileText;
  };

  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Latest Feed — Alt background */}
      <section className="section-alt py-16 md:py-20 border-b">
        <div className="container-ak space-y-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Yangiliklar va Maqolalar</h2>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Barchasi <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LATEST_POSTS.map((post, index) => {
              const Icon = getIcon(post.category);
              return (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={post.link} className="card-ak block group h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{post.date}</span>
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills + Education — White background */}
      <section className="py-16 md:py-20">
        <div className="container-ak">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <SkillsSection />
            <EducationSection />
          </div>
        </div>
      </section>
    </div>
  );
}

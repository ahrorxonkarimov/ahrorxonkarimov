"use client";

import { motion } from "framer-motion";
import { ExternalLink, Rocket, Layers, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Doclab.uz",
      tag: "Asosiy loyiha",
      description: "Doclab.uz — O'zbekistondagi eng yirik o'quv va ilmiy hujjatlar onlayn platformasi (marketpleysi). Bu yerda referatlar, kurs ishlari, diplom ishlari, mustaqil ishlar, taqdimotlar, biznes-rejalar va shartnoma namunalari mavjud. Foydalanuvchilar kerakli tayyor materiallarni yuklab olishlari yoki o'z intellektual mehnat mahsullarini sotuvga qo'yib daromad topishlari mumkin.",
      link: "https://doclab.uz",
      color: "bg-primary",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container-ak">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Loyihalarim
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Raqamli platformalar va zamonaviy texnologiyalar yo&apos;lidagi ishlarim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border bg-card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="h-24 w-24" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  {project.tag}
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
                  >
                    Platformaga o&apos;tish <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon */}
          <div className="rounded-3xl border border-dashed border-muted p-8 flex flex-col items-center justify-center text-center space-y-4 bg-secondary/10">
            <Layers className="h-10 w-10 text-muted-foreground" />
            <h3 className="text-xl font-bold text-muted-foreground">Yangi loyihalar tez orada...</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

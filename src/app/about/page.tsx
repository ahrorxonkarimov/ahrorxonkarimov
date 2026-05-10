"use client";

import Image from "next/image";
import { SITE_CONFIG, EDUCATION, SKILLS, LANGUAGES } from "@/lib/constants";
import { GraduationCap, Briefcase, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero band */}
      <section className="section-alt border-b py-12 md:py-16">
        <div className="container-ak">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
            {/* Photo card */}
            <div className="space-y-4">
              <div className="w-48 h-56 md:w-full md:h-auto md:aspect-[3/4] rounded-lg overflow-hidden border shadow-sm mx-auto md:mx-0">
                <Image src="/ahrorxon.jpg" alt={SITE_CONFIG.name} width={220} height={293} className="w-full h-full object-cover" />
              </div>
              {/* Quick facts under photo */}
              <div className="bg-card rounded-lg border p-4 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                  <span className="font-medium">Faol</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1.5">
                  <p className="flex items-center gap-2"><GraduationCap className="h-3.5 w-3.5 text-primary shrink-0" /> ADTI, 5-kurs</p>
                  <p className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5 text-primary shrink-0" /> Doclab.uz asoschisi</p>
                  <p className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-primary shrink-0" /> Namangan, O&apos;zbekiston</p>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Men haqimda</h1>
                <p className="text-muted-foreground mt-1">{SITE_CONFIG.author.role}</p>
              </div>

              <div className="text-base leading-relaxed text-foreground/80 space-y-4">
                <p>
                  Salom, men <strong>{SITE_CONFIG.name}</strong>, do&apos;stlar davrasida <strong>Abdulloh</strong> nomi bilan tanilganman.
                  Tibbiyot va texnologiyalar o&apos;rtasida ko&apos;prik qurish — mening hayotiy missiyam.
                </p>
                <p>
                  Hozirda <strong>Andijon davlat tibbiyot instituti</strong> 5-kurs talabasi bo&apos;lishimga qaramasdan,
                  <strong> Doclab.uz</strong> — O&apos;zbekistondagi eng yirik o&apos;quv va ilmiy hujjatlar onlayn platformasi ustida ish olib bormoqdaman.
                  Bu yerda talabalar, o&apos;qituvchilar va tadbirkorlar kerakli hujjatlarni topishi yoki o&apos;z hujjatlarini sotib daromad qilishi mumkin.
                </p>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 py-1 italic text-muted-foreground text-sm">
                &ldquo;Asl ismim Ahrorxon bo&apos;lsa-da, hayotda meni ko&apos;pincha Abdulloh deb bilishadi. Bu ism menga ma&apos;naviy yaqinroq.&rdquo;
              </blockquote>

              {/* Languages */}
              <div className="flex gap-4 pt-2">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-xs px-3 py-1.5 rounded border bg-card">
                    <Globe className="h-3 w-3 text-primary" />
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">— {lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-12 md:py-16 border-b">
        <div className="container-ak">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Ta&apos;lim va tajriba</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCATION.map((edu) => (
              <div key={edu.institution} className="card-ak space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-primary bg-accent px-2 py-0.5 rounded">{edu.period}</span>
                  <span className="text-xs text-muted-foreground">{edu.status}</span>
                </div>
                <h3 className="font-bold">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.faculty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="section-alt py-12 md:py-16 border-b">
        <div className="container-ak">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Faoliyatdan lavhalar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/feldsher.jpg", alt: "Feldsher davri" },
              { src: "/talaba.jpg", alt: "Talaba" },
              { src: "/labarant.jpg", alt: "Laboratoriya" },
              { src: "/talaba1.jpg", alt: "Talaba hayoti" },
            ].map((photo) => (
              <div key={photo.src} className="aspect-square rounded-lg overflow-hidden border">
                <Image src={photo.src} alt={photo.alt} width={300} height={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doclab */}
      <section className="py-12 md:py-16">
        <div className="container-ak">
          <div className="card-ak !p-6 md:!p-8 flex flex-col md:flex-row gap-6 items-start border-primary/20">
            <div className="w-14 h-14 rounded-lg overflow-hidden border shrink-0 bg-white flex items-center justify-center">
              <Image src="/doclab.png" alt="Doclab" width={48} height={48} className="object-contain" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="text-lg font-bold">Doclab.uz</h3>
                <p className="text-xs text-muted-foreground">O&apos;quv va ilmiy hujjatlar onlayn platformasi</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O&apos;zbekistondagi eng yirik o&apos;quv va ilmiy hujjatlar marketpleysi. Bu yerda referatlar, kurs ishlari, diplom ishlari,
                mustaqil ishlar, taqdimotlar, biznes-rejalar va shartnoma namunalari mavjud.
                Foydalanuvchilar kerakli materiallarni yuklab olishlari yoki o&apos;z hujjatlarini sotuvga qo&apos;yib daromad topishlari mumkin.
              </p>
              <a href="https://doclab.uz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Platformaga o&apos;tish &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

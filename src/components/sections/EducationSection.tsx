"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";

export default function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Ta&apos;lim</h2>

      <div className="space-y-4">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-ak space-y-2"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-semibold text-primary bg-accent px-2 py-0.5 rounded">
                {edu.period}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {edu.status}
              </span>
            </div>
            <h3 className="text-base font-bold">{edu.institution}</h3>
            <p className="text-sm text-muted-foreground">{edu.faculty}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

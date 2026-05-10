"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Ko&apos;nikmalar</h2>

      <div className="space-y-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="card-ak flex items-center justify-between gap-4"
          >
            <div className="flex-1">
              <p className="text-sm font-medium">{skill.title}</p>
              <div className="mt-2 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </div>
            <span className="text-sm font-semibold text-primary tabular-nums">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

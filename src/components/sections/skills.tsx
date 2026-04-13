"use client";

import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 gradient-border h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center">
                  <category.icon
                    size={20}
                    className="text-[--color-primary]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-[--color-primary]/20 transition-all duration-300 group cursor-default hover:scale-105"
                  >
                    <skill.icon
                      size={16}
                      className="text-[--color-muted] group-hover:text-[--color-primary] transition-colors flex-shrink-0"
                    />
                    <span className="text-sm text-[--color-muted] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

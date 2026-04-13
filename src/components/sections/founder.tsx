"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/lib/data";

export function FounderSection() {
  return (
    <section id="founder" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Meet the Founder"
          subtitle="The mind behind Nexora"
        />

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 gradient-border text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-secondary] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">BP</span>
            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              Briman Paul
            </h3>
            <p className="text-[--color-primary] font-medium">
              Founder &amp; Full Stack Developer
            </p>

            <p className="text-[--color-muted] mt-4 leading-relaxed max-w-xl mx-auto">
              Focused on building scalable systems and solving real-world
              problems with modern technologies. Briman founded Nexora to help
              businesses ship faster, build smarter, and grow with confidence
              through technology that works.
            </p>

            <div className="flex gap-4 justify-center mt-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

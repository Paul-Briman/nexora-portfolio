"use client";

import Image from "next/image";
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

        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 gradient-border">
            {/* 2-column layout: image left, text right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
              {/* Left — Image with gradient glow */}
              <div className="flex-shrink-0">
                <div
                  className="rounded-2xl p-1.5"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(139,92,246,0.15), transparent)",
                  }}
                >
                  <div className="relative w-64 h-[420px] sm:w-72 sm:h-[480px] rounded-2xl overflow-hidden shadow-xl group bg-[--color-card]">
                    <Image
                      src="/images/founder-photo.jpeg"
                      alt="Briman Paul — Founder of Nexora"
                      fill
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* Right — Text content */}
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-3xl font-bold text-white">Briman Paul</h3>
                <p className="text-[--color-primary] font-semibold mt-1 text-lg">
                  Founder &amp; Full Stack Developer
                </p>

                <p className="text-[--color-muted] mt-5 leading-relaxed text-base max-w-xl">
                  Briman leads Nexora with a focus on building scalable,
                  high-performance digital systems that solve real-world
                  business problems. His expertise spans modern web
                  technologies, backend architecture, and user-focused design.
                </p>

                {/* Social links */}
                <div className="flex gap-3 mt-7 justify-center lg:justify-start">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href={socialLinks.email}
                    aria-label="Email"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

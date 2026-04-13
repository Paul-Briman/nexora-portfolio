"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-xl font-bold text-gradient">
              Nexora
            </a>
            <p className="text-sm text-[--color-muted] mt-1">
              &copy; {new Date().getFullYear()} Briman Paul. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[--color-primary]/10 flex items-center justify-center text-[--color-muted] hover:text-[--color-primary] transition-all duration-300 hover:scale-110"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

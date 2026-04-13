"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Brand */}
          <div>
            <a href="#home" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/images/nexora-logo.svg"
                alt="Nexora"
                width={120}
                height={32}
              />
            </a>
            <p className="text-sm text-[--color-muted] mt-1">
              Scalable digital systems for modern businesses
            </p>
          </div>

          {/* Right — Social Icons */}
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

        {/* Row 2 */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-[--color-muted]">
            &copy; 2026 Nexora. All rights reserved.
          </p>
          <p className="text-xs text-[--color-muted]/50 mt-2">
            Built with precision. Shipped with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}

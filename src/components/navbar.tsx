"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-animate",
        isScrolled ? "glass py-3" : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <Image
            src="/images/nexora-logo.png"
            alt="Nexora Logo"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative group px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.label}
                  {/* Gradient underline */}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out",
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-70 group-hover:w-full group-hover:opacity-100"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={cn(
          "md:hidden glass overflow-hidden transition-all duration-300",
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-white bg-gradient-to-r from-[--color-primary]/20 to-[--color-secondary]/20"
                    : "text-[--color-muted] hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const MOBILE_NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Nexora", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

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

  // Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      {/* ── Header (desktop layout unchanged) ── */}
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
            onClick={closeMobile}
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

          {/* Desktop nav — untouched */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="md:hidden relative z-10 p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <div
              className={cn(
                "transition-transform duration-300",
                isMobileOpen ? "rotate-90" : "rotate-0"
              )}
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </div>
          </button>
        </nav>
      </header>

      {/* ── Mobile backdrop ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* ── Mobile menu panel ── */}
      <div
        className={cn(
          "fixed left-3 right-3 z-50 md:hidden transition-all duration-300 ease-out",
          isScrolled ? "top-[60px]" : "top-[76px]",
          isMobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        )}
      >
        <div className="bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

          {/* Nav links */}
          <ul className="py-3">
            {MOBILE_NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      "flex items-center justify-between px-6 py-3.5 text-[15px] font-medium border-b border-white/[0.05] last:border-0 transition-all duration-200 group",
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    )}
                    style={{
                      transitionDelay: isMobileOpen
                        ? `${i * 35}ms`
                        : "0ms",
                    }}
                  >
                    <span className="relative">
                      {item.label}
                      {/* Gradient underline */}
                      <span
                        className={cn(
                          "absolute left-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300",
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        )}
                      />
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="px-5 py-4 border-t border-white/[0.08]">
            <a
              href="#contact"
              onClick={closeMobile}
              className="block text-center py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

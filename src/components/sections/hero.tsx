"use client";

import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 hero-grid" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[--color-primary]/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[--color-secondary]/10 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Radial blur center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[--color-primary]/5 to-[--color-secondary]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="hero-animate-scale">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[--color-muted] mb-8">
            <Rocket size={14} className="text-[--color-primary]" />
            Digital Agency
          </div>
        </div>

        {/* Main heading */}
        <div className="hero-animate hero-animate-d2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Building{" "}
            <span className="text-gradient">Scalable Digital Systems</span>
            <br />
            for Modern Businesses
          </h1>
        </div>

        {/* Subtitle */}
        <div className="hero-animate hero-animate-d3">
          <p className="text-lg md:text-xl text-[--color-muted] max-w-2xl mx-auto mb-10">
            We design and develop high-performance web applications for
            startups, businesses, and entrepreneurs worldwide.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="hero-animate hero-animate-d4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#work" size="lg">
              View Our Work
              <ArrowRight size={20} />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get Started
              <Rocket size={20} />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-animate hero-animate-d5">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 rounded-full border-2 border-[--color-muted]/30 flex items-start justify-center p-1.5 animate-float">
              <div className="w-1.5 h-1.5 rounded-full bg-[--color-primary]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

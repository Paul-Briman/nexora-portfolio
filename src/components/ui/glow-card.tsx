"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "both";
}

export function GlowCard({
  children,
  className,
  glowColor = "both",
}: GlowCardProps) {
  const glowMap = {
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    both: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1),0_0_30px_rgba(139,92,246,0.1)]",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-500",
        "gradient-border",
        glowMap[glowColor],
        "hover:translate-y-[-4px]",
        className
      )}
    >
      {children}
    </div>
  );
}

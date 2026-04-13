"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[--color-muted] max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-[--color-primary] to-[--color-secondary] rounded-full" />
    </div>
  );
}

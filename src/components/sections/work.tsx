"use client";

import { ExternalLink, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { workProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";

function FeaturedProject() {
  const project = workProjects.find((p) => p.featured);
  if (!project) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <Star size={20} className="text-yellow-400 fill-yellow-400" />
        <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
          Featured Project
        </span>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden gradient-border">
        <div className="p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left column */}
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                {project.title}
              </h3>
              <p className="text-[--color-muted] text-lg leading-relaxed">
                {project.description}
              </p>

              {project.highlights && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-primary]">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[--color-muted]"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-400 mt-1 flex-shrink-0"
                        />
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[--color-primary]/10 text-[--color-primary] border border-[--color-primary]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.live && (
                <div className="flex gap-3 pt-2">
                  <Button href={project.live} size="md">
                    <ExternalLink size={18} />
                    View Live
                  </Button>
                </div>
              )}
            </div>

            {/* Right column - Results */}
            {project.results && (
              <div className="lg:w-80 space-y-4">
                <div className="glass rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp
                      size={18}
                      className="text-[--color-secondary]"
                    />
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-secondary]">
                      Results
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {project.results.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[--color-muted]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[--color-primary] to-[--color-secondary] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkProjectCard({
  project,
}: {
  project: (typeof workProjects)[0];
}) {
  return (
    <GlowCard className="flex flex-col h-full">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-[--color-muted] text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-[--color-muted] border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-sm text-[--color-primary] hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            View Project
          </a>
        )}
      </div>
    </GlowCard>
  );
}

export function WorkSection() {
  const otherProjects = workProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-secondary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="Real-world applications built for real businesses"
        />

        <FeaturedProject />

        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <WorkProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

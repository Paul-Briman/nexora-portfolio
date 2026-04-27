"use client";

import Image from "next/image";
import { ExternalLink, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { workProjects, type WorkProject } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

/* ===== Featured Project — hero-style showcase ===== */

function FeaturedProject() {
  const project = workProjects.find((p) => p.featured);
  if (!project) return null;

  return (
    <div className="mb-20">
      <div className="flex items-center gap-2 mb-6">
        <Star size={20} className="text-yellow-400 fill-yellow-400" />
        <span className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
          Featured Project
        </span>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden gradient-border group">
        {/* Full-width image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/60 to-transparent" />
          {/* Title overlay */}
          <div className="absolute bottom-6 left-8 right-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-gradient">{project.title}</span>
              <span className="text-white/60 font-normal text-2xl md:text-3xl ml-3">
                {project.subtitle}
              </span>
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left — Details */}
            <div className="flex-1 space-y-6">
              <p className="text-[--color-muted] text-lg leading-relaxed">
                {project.description}
              </p>

              {project.highlights && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[--color-primary]">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[--color-muted]"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-400 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
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

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.live && (
                  <Button href={project.live} size="md">
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button href={project.github} variant="outline" size="md">
                    <GithubIcon size={18} />
                    GitHub
                  </Button>
                )}
              </div>
            </div>

            {/* Right — Results */}
            {project.results && (
              <div className="lg:w-80 flex-shrink-0">
                <div className="glass rounded-2xl p-6 space-y-4 h-full">
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

/* ===== Project Card — premium SaaS style ===== */

function ProjectCard({
  project,
  index,
}: {
  project: WorkProject;
  index: number;
}) {
  return (
    <div
      className="group glass-card rounded-2xl overflow-hidden gradient-border transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_0_40px_rgba(59,130,246,0.1),0_0_40px_rgba(139,92,246,0.08)] flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-4 right-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[--color-primary]/15 text-[--color-primary] border border-[--color-primary]/25 backdrop-blur-sm">
              {project.status}
            </span>
          </div>
        )}

        {/* Floating title on image */}
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[--color-primary] mb-1">
            {project.subtitle}
          </p>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[--color-muted] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs rounded-full bg-white/[0.04] text-[--color-muted] border border-white/[0.08] group-hover:border-[--color-primary]/20 group-hover:text-white/80 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-auto pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-primary] hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-muted] hover:text-white transition-colors duration-300"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== Main Section ===== */

export function WorkSection() {
  const otherProjects = workProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-secondary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="Real-world products built for real businesses"
        />

        <FeaturedProject />

        {/* Project grid — 3 columns on large screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Gradient line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-secondary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something Powerful"
          subtitle="Ready to bring your project to life? Tell us what you need."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left column — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Start a Project
              </h3>
              <p className="text-[--color-muted] leading-relaxed">
                We&apos;re ready to discuss your next project, whether it&apos;s
                a full-stack application, a high-performance website, or a
                custom API. Tell us what you need and we&apos;ll bring it to
                life with scalable, production-ready code.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@nexora.dev",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Available Worldwide",
                },
                {
                  icon: Globe,
                  label: "Website",
                  value: "nexora.dev",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 text-[--color-muted]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-[--color-primary]" />
                  </div>
                  <div>
                    <p className="text-xs text-[--color-muted]/60 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 gradient-border space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[--color-muted] mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[--color-muted]/40 focus:outline-none focus:border-[--color-primary]/50 focus:ring-1 focus:ring-[--color-primary]/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[--color-muted] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[--color-muted]/40 focus:outline-none focus:border-[--color-primary]/50 focus:ring-1 focus:ring-[--color-primary]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[--color-muted] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-[--color-muted]/40 focus:outline-none focus:border-[--color-primary]/50 focus:ring-1 focus:ring-[--color-primary]/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle size={20} />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-400 text-center">
                  Thanks! We&apos;ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

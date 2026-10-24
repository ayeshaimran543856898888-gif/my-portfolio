"use client";

import Image from "next/image";
import { personalInfo, aboutHighlights } from "@/src/data/portfolioData";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import {
  Code,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

function About() {
  const { playHover, playClick } = useAudioFeedback();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2
          data-reveal
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Engineering Web Experiences with{" "}
          <span className="text-gradient">Precision & Artistry</span>
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base"
        >
          A brief overview of my engineering philosophy, technical journey, and
          dedication to creating high-standard digital products.
        </p>
      </div>

      {/* Main Content: Visual Left + Narrative & Pillars Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Showcase (5 cols) */}
        <div data-reveal className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden glass-card p-2 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0c0a18]">
              <Image
                src="/images/about-visual.jpg"
                alt={`Modern Software Engineering & Systems Architecture Visual - ${personalInfo.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06050b]/80 via-transparent to-transparent" />

              {/* Floating Stat Card inside visual */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400">Development Philosophy</p>
                  <p className="text-sm font-bold text-white">Full-Stack MERN Architecture</p>
                </div>
                <div className="h-8 w-8 rounded-lg bg-violet-600/30 flex items-center justify-center text-violet-300">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-violet-600/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Right Column: Narrative Story + Key Highlights (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div data-reveal className="space-y-4 text-zinc-300 leading-relaxed text-base">
            <p>
              Hello! I&apos;m <span className="text-white font-semibold">{personalInfo.name}</span>, a web developer focused on translating complex problems into clean, intuitive, and performant web solutions. My journey began with an innate curiosity for how software shapes our daily interactions, which led me to dive deeply into full-stack modern JavaScript development.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              Trained through comprehensive MERN Stack Development at <span className="text-violet-300 font-medium">PNY Institute</span>, alongside strong academic roots from <span className="text-violet-300 font-medium">Samanabad College</span> and <span className="text-violet-300 font-medium">Al Rehman School</span>, I combine disciplined problem-solving with a keen eye for aesthetic UI polish.
            </p>
          </div>

          {/* Highlights Grid */}
          <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {aboutHighlights.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={playHover}
                className="p-4 rounded-2xl glass-card border border-violet-500/15 hover:border-violet-400/40 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {item.badge}
                  </span>
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Contact & Live Projects Button */}
          <div data-reveal className="pt-2 flex items-center gap-4">
            <a
              href="#projects"
              onClick={playClick}
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group"
            >
              <span>Explore my interactive projects</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap About section using our custom Higher-Order Component
export default withSectionReveal(About, {
  sectionId: "about",
  badgeText: "About",
  glowColor: "rgba(139, 92, 246, 0.14)",
  staggerSpeed: 0.1,
});

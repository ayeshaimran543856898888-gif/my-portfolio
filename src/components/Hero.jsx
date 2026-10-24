"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { personalInfo, heroStats } from "@/src/data/portfolioData";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import { GithubIcon, LinkedinIcon } from "@/src/components/icons/BrandIcons";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  ChevronDown,
} from "lucide-react";

function Hero() {
  const { playClick, playHover } = useAudioFeedback();
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack & MERN Developer",
    "Next.js & React Specialist",
    "Tailwind & GSAP Enthusiast",
    "Clean Code & UI Craftsman",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Status Badge */}
          <div
            data-reveal
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>

          {/* Main Name & Title Heading */}
          <h1
            data-reveal
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient block sm:inline">
              {personalInfo.name}
            </span>
          </h1>

          {/* Dynamic Role Subheading */}
          <div
            data-reveal
            className="h-10 sm:h-12 flex items-center mb-6 overflow-hidden"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-violet transition-all duration-500">
              {roles[roleIndex]}
            </span>
          </div>

          {/* Bio Description */}
          <p
            data-reveal
            className="max-w-2xl text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8"
          >
            {personalInfo.tagline} Focused on crafting high-performing web
            experiences using <strong className="text-white font-semibold">Next.js</strong>,{" "}
            <strong className="text-white font-semibold">React</strong>,{" "}
            <strong className="text-white font-semibold">Tailwind CSS</strong>, and{" "}
            <strong className="text-white font-semibold">MERN Architecture</strong>.
          </p>

          {/* Action Buttons */}
          <div
            data-reveal
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-[#0e0c19] hover:bg-[#18142b] border border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              <span>Get In Touch</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="p-3 rounded-xl bg-[#0f0d1a] border border-white/10 hover:border-violet-400/50 text-zinc-400 hover:text-white transition-all hover:scale-105"
                title="GitHub Profile (Editable in portfolioData.js)"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="p-3 rounded-xl bg-[#0f0d1a] border border-white/10 hover:border-violet-400/50 text-zinc-400 hover:text-white transition-all hover:scale-105"
                title="LinkedIn Profile (Editable in portfolioData.js)"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div
            data-reveal
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-violet-500/15"
          >
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col text-center lg:text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Avatar with Neon Violet Backlight & Floating Badges (5 cols) */}
        <div
          data-reveal
          className="lg:col-span-5 flex justify-center items-center relative z-10"
        >
          {/* Ambient Circular Neon Rings */}
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
            {/* Pulsing Violet Ring */}
            <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-pulse-glow" />
            <div className="absolute -inset-4 rounded-full border border-violet-500/15 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/20 via-purple-600/10 to-transparent blur-2xl" />

            {/* Avatar Frame with Gradient Border */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden p-[2.5px] bg-gradient-to-tr from-violet-500 via-purple-500 to-indigo-500 shadow-[0_0_50px_rgba(139,92,246,0.35)]">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0a0814] relative">
                <Image
                  src="/images/avatar.jpg"
                  alt={`Professional Developer Portrait of ${personalInfo.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, 420px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Floating Floating Badge 1: MERN Certified */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 px-4 py-2.5 rounded-2xl glass-panel border border-violet-500/40 shadow-2xl flex items-center gap-3 animate-float">
              <div className="p-2 rounded-xl bg-violet-600/30 text-violet-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-wide">
                  MERN Stack
                </span>
                <span className="text-[10px] text-zinc-400">
                  PNY Institute Certified
                </span>
              </div>
            </div>

            {/* Floating Badge 2: Modern Tech */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 px-3.5 py-2 rounded-2xl glass-panel border border-purple-500/40 shadow-2xl flex items-center gap-2.5 animate-float [animation-delay:2.5s]">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  Next.js & GSAP
                </span>
                <span className="text-[10px] text-violet-300">
                  Interactive UIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        onClick={playClick}
        className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-violet-400 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-xs tracking-widest font-mono uppercase">
          Explore Below
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-violet-400" />
      </a>
    </div>
  );
}

export default withSectionReveal(Hero, {
  sectionId: "hero",
  badgeText: "Hero",
  glowColor: "rgba(139, 92, 246, 0.18)",
  staggerSpeed: 0.1,
});


"use client";

import { personalInfo, navLinks } from "@/src/data/portfolioData";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import { GithubIcon, LinkedinIcon } from "@/src/components/icons/BrandIcons";
import {
  ArrowUp,
  Phone,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const { playClick, playHover } = useAudioFeedback();

  const scrollToTop = () => {
    playClick();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-violet-500/20 bg-[#06040d] text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-violet-900/10 blur-[150px] rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand, Nav, Contact, Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-violet-500/15">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-500 to-fuchsia-400 p-[1.5px] shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <div className="w-full h-full bg-[#0c0a16] rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-200 to-purple-400 tracking-wider text-sm font-mono">
                  AI
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="text-[10px] text-violet-400 font-mono -mt-0.5">
                  Full Stack & MERN Developer
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Full Stack & MERN Developer specializing in high-performance web
              applications, interactive animations, and modern digital experiences.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="p-2.5 rounded-xl bg-[#0f0c1e] border border-white/10 hover:border-violet-400/50 text-zinc-400 hover:text-white transition-all"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="p-2.5 rounded-xl bg-[#0f0c1e] border border-white/10 hover:border-violet-400/50 text-zinc-400 hover:text-white transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-violet-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-zinc-300 hover:text-violet-300 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <p className="text-xs text-zinc-500 pt-1">
                Name, GitHub, LinkedIn and Email are editable in{" "}
                <code className="text-violet-400 font-mono">portfolioData.js</code>.
              </p>
            </div>
          </div>

          {/* Back to Top (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Scroll
            </h4>
            <button
              onClick={scrollToTop}
              onMouseEnter={playHover}
              className="group flex items-center gap-2 px-4 py-3 rounded-2xl glass-panel border border-violet-500/30 hover:border-violet-400 text-xs font-semibold text-white shadow-lg transition-all hover:-translate-y-1"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-violet-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>

          <div className="flex items-center gap-2 text-zinc-400">
            <span>Built with Next.js, Tailwind CSS, GSAP, and Redux Toolkit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

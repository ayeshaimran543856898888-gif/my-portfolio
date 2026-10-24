"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { closeQuickViewProject } from "@/src/store/portfolioSlice";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import { GithubIcon } from "@/src/components/icons/BrandIcons";
import {
  X,
  ExternalLink,
  CheckCircle,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ProjectQuickModal() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.portfolio.quickViewProject);
  const { playClick, playHover } = useAudioFeedback();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        dispatch(closeQuickViewProject());
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // lock scroll
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, dispatch]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      {/* Click outside backdrop to close */}
      <div
        className="absolute inset-0"
        onClick={() => {
          playClick();
          dispatch(closeQuickViewProject());
        }}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-violet-500/40 shadow-2xl p-6 sm:p-8 z-10 bg-[#0d0b1a]">
        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            dispatch(closeQuickViewProject());
          }}
          onMouseEnter={playHover}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-violet-400/50 transition-all"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Image Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-violet-500/30 bg-[#07050e] shadow-xl">
              <Image
                src={project.image}
                alt={`${project.title} Interface Preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            {/* Tags Strip */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-violet-600/15 border border-violet-500/30 text-violet-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.category} Showcase</span>
              </div>

              <h3
                id="modal-project-title"
                className="text-2xl font-bold text-white mb-2"
              >
                {project.title}
              </h3>

              <p className="text-xs font-mono text-violet-400 mb-4">
                {project.tagline}
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Technical Features:
                </h4>
                {project.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-violet-500/20">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-zinc-300 bg-[#141126] border border-white/10 hover:border-violet-400/50 hover:text-white transition-all"
                title="View Code Repository (Editable in portfolioData.js)"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

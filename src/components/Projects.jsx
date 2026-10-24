"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { projectsData } from "@/src/data/portfolioData";
import {
  setProjectFilter,
  setQuickViewProject,
} from "@/src/store/portfolioSlice";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import {
  ExternalLink,
  Eye,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Projects() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.portfolio.projectFilter);
  const { playClick, playHover } = useAudioFeedback();

  const filterTabs = ["All", "Frontend", "Utility", "Full Stack"];

  const filteredProjects =
    currentFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === currentFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Featured Portfolio</span>
        </div>
        <h2
          data-reveal
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Real-World <span className="text-gradient">Projects</span>
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base"
        >
          Explore interactive deployed applications featuring responsive design,
          robust logic, and clean architectures. Click any live demo to test.
        </p>

        {/* Redux-Connected Filter Tabs */}
        <div
          data-reveal
          className="flex flex-wrap justify-center items-center gap-2 mt-8 p-1.5 rounded-full bg-[#0d0b1a] border border-violet-500/20"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                playClick();
                dispatch(setProjectFilter(tab));
              }}
              onMouseEnter={playHover}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                currentFilter === tab
                  ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.6)] font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-violet-500/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            data-reveal
            onMouseEnter={playHover}
            className="group rounded-3xl glass-card border border-violet-500/20 hover:border-violet-400/50 transition-all flex flex-col justify-between overflow-hidden shadow-xl"
          >
            {/* Project Image Banner with Overlay & Hover Actions */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0a0815]">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient dark mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1a] via-black/20 to-transparent" />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0e0c1a]/80 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Quick Actions Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    playClick();
                    dispatch(setQuickViewProject(project));
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all shadow-lg"
                >
                  <Eye className="w-4 h-4 text-violet-400" />
                  <span>Quick View</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project Description & Tag Metadata */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-violet-500/20 transition-colors"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-violet-400" />
                  </a>
                </div>

                <p className="text-xs font-mono text-violet-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Buttons */}
              <div className="space-y-4 pt-4 border-t border-violet-500/15">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-[#141126] text-zinc-300 border border-violet-500/20 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Working Live Demo CTA Button */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:shadow-[0_0_20px_rgba(139,92,246,0.55)]"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      playClick();
                      dispatch(setQuickViewProject(project));
                    }}
                    className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-300 bg-[#120f24] hover:bg-[#1a1633] border border-violet-500/30 hover:text-white transition-all"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// Wrap with Higher-Order Component
export default withSectionReveal(Projects, {
  sectionId: "projects",
  badgeText: "Projects",
  glowColor: "rgba(139, 92, 246, 0.15)",
  staggerSpeed: 0.12,
});

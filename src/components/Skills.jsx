"use client";

import { useState } from "react";
import { skillsData } from "@/src/data/portfolioData";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import {
  Code2,
  Database,
  Palette,
  Terminal,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const { playHover, playClick } = useAudioFeedback();

  // All 12 specified skills
  const allSkills = skillsData.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category }))
  );

  const displayedSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((s) =>
          s.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "tools", label: "Tools & Design" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Arsenal</span>
        </div>
        <h2
          data-reveal
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base"
        >
          Modern, battle-tested toolset spanning web fundamentals, reactive
          frameworks, databases, and version control.
        </p>

        {/* Category Filter Pills */}
        <div
          data-reveal
          className="flex flex-wrap justify-center items-center gap-2 mt-8 p-1.5 rounded-full bg-[#0d0b1a] border border-violet-500/20"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playClick();
                setActiveTab(cat.id);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-violet-500/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div
        data-reveal
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {displayedSkills.map((skill, index) => (
          <div
            key={skill.name}
            onMouseEnter={playHover}
            className="group relative p-5 rounded-2xl glass-card border border-violet-500/15 hover:border-violet-400/50 transition-all flex flex-col justify-between"
          >
            {/* Top row: Name & level */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-violet-400">
                  {skill.level}%
                </span>
              </div>

              {/* Tag / Specialization */}
              <p className="text-xs text-zinc-400 font-mono mb-4">
                {skill.tag}
              </p>
            </div>

            {/* Glowing Progress Bar */}
            <div className="w-full">
              <div className="w-full h-2 rounded-full bg-[#18142b] overflow-hidden p-[1px]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-400 transition-all duration-1000 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            {/* Hover Glow Light Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Category Summary Cards */}
      <div
        data-reveal
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-violet-500/15"
      >
        <div className="p-6 rounded-2xl glass-panel border border-violet-500/20 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-violet-600/20 text-violet-300 shrink-0">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              Frontend & UX Architecture
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Responsive SPAs, server-rendered Next.js applications, Tailwind utility styling, and GSAP micro-animations.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-violet-500/20 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-purple-600/20 text-purple-300 shrink-0">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              Backend & Data Persistence
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              RESTful APIs with Node.js and Express, schema design in MongoDB, server logic, and Python automation.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border border-violet-500/20 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-300 shrink-0">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              Workflow & Graphic Design
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Git branching, collaborative GitHub repositories, and Canva visual asset creation for polished user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrap with Higher-Order Component
export default withSectionReveal(Skills, {
  sectionId: "skills",
  badgeText: "Skills",
  glowColor: "rgba(168, 85, 247, 0.12)",
  staggerSpeed: 0.08,
});

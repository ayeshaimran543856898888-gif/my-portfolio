"use client";

import { educationData } from "@/src/data/portfolioData";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

function Education() {
  const { playHover } = useAudioFeedback();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic & Technical Roots</span>
        </div>
        <h2
          data-reveal
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Education & <span className="text-gradient">Qualifications</span>
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base"
        >
          Verified formal education and specialized software engineering training.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Glowing Line */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-600 via-purple-500 to-transparent shadow-[0_0_12px_rgba(139,92,246,0.6)]"
        />

        <div className="flex flex-col gap-10">
          {educationData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                data-reveal
                onMouseEnter={playHover}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-12 group`}
              >
                {/* Timeline Card */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-3xl glass-card border border-violet-500/20 hover:border-violet-400/50 transition-all shadow-xl relative overflow-hidden">
                    {/* Top Meta: Degree & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm font-semibold text-violet-400 mb-3">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills/Competencies Acquired */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-violet-500/15">
                      {item.skillsAcquired.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-[#141126] text-zinc-300 border border-violet-500/20 text-[11px] font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Subtle corner light */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />
                  </div>
                </div>

                {/* Center Node Indicator */}
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-panel border border-violet-400 items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform bg-[#0a0815] z-10"
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-violet-500 to-purple-400 animate-pulse" />
                </div>

                {/* Empty opposite placeholder for spacing on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Wrap with Higher-Order Component
export default withSectionReveal(Education, {
  sectionId: "education",
  badgeText: "Education",
  glowColor: "rgba(139, 92, 246, 0.12)",
  staggerSpeed: 0.15,
});

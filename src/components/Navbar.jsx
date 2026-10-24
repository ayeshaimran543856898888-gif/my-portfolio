"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navLinks, personalInfo } from "@/src/data/portfolioData";
import {
  toggleSound,
  setMobileMenuOpen,
  setActiveSection,
} from "@/src/store/portfolioSlice";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import { Volume2, VolumeX, Menu, X, Sparkles, Send } from "lucide-react";

export default function Navbar() {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.portfolio.activeSection);
  const soundEnabled = useSelector((state) => state.portfolio.soundEnabled);
  const mobileMenuOpen = useSelector((state) => state.portfolio.mobileMenuOpen);
  const { playClick, playHover } = useAudioFeedback();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    playClick();
    dispatch(setActiveSection(sectionId));
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b border-violet-500/15 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Stylish AI Monogram & Ayesha Imran Wordmark */}
          <a
            href="#hero"
            onClick={() => handleNavClick("hero")}
            onMouseEnter={playHover}
            className="flex items-center gap-3 group cursor-pointer"
            aria-label={`${personalInfo.name} Portfolio Home`}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-indigo-400 p-[1.5px] shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(168,85,247,0.7)]">
              <div className="w-full h-full bg-[#0c0a16] rounded-[10px] flex items-center justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 tracking-wider text-base font-mono select-none">
                AI
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
                <span className="text-violet-400 font-mono text-xs">.dev</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase -mt-0.5 hidden sm:block">
                MERN &amp; NEXT.JS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0d0b18]/80 border border-violet-500/20 backdrop-blur-md shadow-inner"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  onMouseEnter={playHover}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-violet-500/10"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-violet-600/30 border border-violet-400/40 shadow-[0_0_12px_rgba(139,92,246,0.5)] -z-10" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Sound FX & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={() => {
                dispatch(toggleSound());
                playClick();
              }}
              onMouseEnter={playHover}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                soundEnabled
                  ? "bg-violet-600/20 border-violet-400/40 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                  : "bg-[#0f0d1b] border-white/10 text-zinc-400 hover:text-white hover:border-violet-500/30"
              }`}
              title={soundEnabled ? "Mute UI sounds" : "Enable UI sound feedback"}
              aria-label={soundEnabled ? "Mute UI sounds" : "Enable UI sound feedback"}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-violet-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-200 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let&apos;s Connect</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => dispatch(toggleSound())}
              className={`p-2 rounded-lg border ${
                soundEnabled
                  ? "bg-violet-600/20 border-violet-400/40 text-violet-300"
                  : "bg-[#0f0d1b] border-white/10 text-zinc-400"
              }`}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-violet-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => {
                playClick();
                dispatch(setMobileMenuOpen(!mobileMenuOpen));
              }}
              className="p-2 rounded-lg bg-[#0f0d1b] border border-violet-500/30 text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-violet-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="sm:hidden fixed inset-x-4 top-20 p-5 rounded-2xl glass-panel border border-violet-500/30 shadow-2xl backdrop-blur-2xl transition-all animate-fade-in"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-600/30 text-white border border-violet-500/40 font-semibold"
                      : "text-zinc-300 hover:bg-violet-500/10 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <Sparkles className="w-4 h-4 text-violet-400" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600"
            >
              <span>Get In Touch</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

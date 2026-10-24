"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { personalInfo } from "@/src/data/portfolioData";
import {
  setContactStatus,
  showToast,
  resetContactForm,
} from "@/src/store/portfolioSlice";
import { withSectionReveal } from "@/src/hoc/withSectionReveal";
import { useAudioFeedback } from "@/src/hooks/useAudioFeedback";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "@/src/components/icons/BrandIcons";
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  MapPin,
  Sparkles,
  MessageSquare,
  Clock,
} from "lucide-react";

function Contact() {
  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.portfolio.contactForm);
  const { playClick, playHover, playSuccess } = useAudioFeedback();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text, type) => {
    playClick();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
        dispatch(
          showToast({
            message: "Email address copied to clipboard!",
            type: "success",
          })
        );
      } else if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
        dispatch(
          showToast({
            message: "Phone number copied to clipboard!",
            type: "success",
          })
        );
      }
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();

    if (!formData.name || !formData.email || !formData.message) {
      dispatch(
        showToast({
          message: "Please fill in your name, email, and message.",
          type: "error",
        })
      );
      return;
    }

    // Simulate sending message with visual feedback & state
    dispatch(setContactStatus({ status: "submitting" }));

    setTimeout(() => {
      dispatch(setContactStatus({ status: "success" }));
      playSuccess();

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#8b5cf6", "#a855f7", "#ec4899", "#3b82f6"],
        });
      } catch {
        // Fallback if canvas is unavailable
      }

      dispatch(
        showToast({
          message: "Message received! Thank you for getting in touch.",
          type: "success",
        })
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        dispatch(resetContactForm());
      }, 5000);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          data-reveal
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2
          data-reveal
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p
          data-reveal
          className="mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base"
        >
          Have a project in mind, need a full-stack engineer, or want to discuss a
          collaborative role? My inbox is always open.
        </p>
      </div>

      {/* Main Grid: Contact Cards Left + Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards (5 cols) */}
        <div data-reveal className="lg:col-span-5 flex flex-col gap-5">
          {/* Direct Phone Card */}
          <div
            onMouseEnter={playHover}
            className="p-6 rounded-2xl glass-card border border-violet-500/20 hover:border-violet-400/50 transition-all flex items-start justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-600/20 text-violet-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Direct Phone / WhatsApp
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  onClick={playClick}
                  className="block text-lg font-bold text-white hover:text-violet-300 transition-colors mt-0.5"
                >
                  {personalInfo.phone}
                </a>
                <p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for calls & messages
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personalInfo.phone, "phone")}
              className="p-2 rounded-lg bg-[#141126] border border-white/10 hover:border-violet-400/40 text-zinc-400 hover:text-white transition-all"
              title="Copy phone number"
              aria-label="Copy phone number"
            >
              {copiedPhone ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Email Card (Ayesha Dev) */}
          <div
            onMouseEnter={playHover}
            className="p-6 rounded-2xl glass-card border border-violet-500/20 hover:border-violet-400/50 transition-all flex items-start justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-600/20 text-purple-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {personalInfo.emailIdentity || "Ayesha Dev"}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Editable
                  </span>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={playClick}
                  className="block text-base sm:text-lg font-bold text-white hover:text-violet-300 transition-colors mt-0.5 break-all"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Click to launch your mail client or customize in <code className="text-violet-400 font-mono">portfolioData.js</code>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 ml-2">
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={playClick}
                className="p-2 rounded-lg bg-[#141126] border border-white/10 hover:border-violet-400/40 text-violet-300 hover:text-white hover:bg-violet-600/20 transition-all"
                title={`Send email directly to ${personalInfo.email}`}
                aria-label={`Send email to ${personalInfo.email}`}
              >
                <Send className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleCopy(personalInfo.email, "email")}
                className="p-2 rounded-lg bg-[#141126] border border-white/10 hover:border-violet-400/40 text-zinc-400 hover:text-white transition-all"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Location & Quick Turnaround Card */}
          <div className="p-6 rounded-2xl glass-panel border border-violet-500/20 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Location: <strong className="text-white">{personalInfo.location}</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Response Time: <strong className="text-white">Within 24 Hours</strong></span>
            </div>
          </div>

          {/* Social Profiles Strip */}
          <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">
              Social Profiles:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141126] border border-white/10 hover:border-violet-400/50 text-xs font-semibold text-zinc-200 hover:text-white transition-all"
                title="Editable in portfolioData.js"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141126] border border-white/10 hover:border-violet-400/50 text-xs font-semibold text-zinc-200 hover:text-white transition-all"
                title="Editable in portfolioData.js"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-violet-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form (7 cols) */}
        <div data-reveal className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl glass-card border border-violet-500/20 shadow-2xl flex flex-col gap-5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-violet-500/15 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-zinc-400">Fill in the fields below and I&apos;ll get back to you promptly.</p>
              </div>
              <Sparkles className="w-5 h-5 text-violet-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-300">
                  Your Name <span className="text-violet-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0916] border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-300">
                  Your Email <span className="text-violet-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0916] border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-xs font-semibold text-zinc-300">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity / Collaboration"
                className="w-full px-4 py-2.5 rounded-xl bg-[#0b0916] border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-500 outline-none transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-300">
                Message <span className="text-violet-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, or requirements..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#0b0916] border border-white/10 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-sm text-white placeholder-zinc-500 outline-none resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={contactState.status === "submitting"}
              onMouseEnter={playHover}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all shadow-lg ${
                contactState.status === "submitting"
                  ? "bg-violet-800 opacity-70 cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {contactState.status === "submitting" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmitting Message...</span>
                </>
              ) : contactState.status === "success" ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Wrap with Higher-Order Component
export default withSectionReveal(Contact, {
  sectionId: "contact",
  badgeText: "Contact",
  glowColor: "rgba(139, 92, 246, 0.15)",
  staggerSpeed: 0.12,
});

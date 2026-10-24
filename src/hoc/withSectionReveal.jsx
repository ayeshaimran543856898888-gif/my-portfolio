"use client";

import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setActiveSection } from "@/src/store/portfolioSlice";

// Register ScrollTrigger once safely on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Higher-Order Component: withSectionReveal
 * 
 * Meaningfully enriches sections by:
 * 1. Synchronizing viewport visibility with Redux activeSection state via ScrollTrigger.
 * 2. Applying high-performance GSAP ScrollTrigger entrance animations with staggered reveals.
 * 3. Gracefully honoring user's 'prefers-reduced-motion' accessibility setting.
 * 4. Ensuring automatic cleanup with gsap.context() to avoid memory leaks.
 * 5. Injecting decorative ambient glow markers and accessible semantic wrappers.
 *
 * @param {React.ComponentType} WrappedComponent - The section component to wrap
 * @param {Object} options - Configuration options (sectionId, threshold, animationType)
 */
export function withSectionReveal(WrappedComponent, options = {}) {
  const {
    sectionId = "",
    badgeText = "",
    glowColor = "rgba(139, 92, 246, 0.12)", // violet glow
    staggerSpeed = 0.12,
  } = options;

  const EnhancedSection = (props) => {
    const sectionRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
      if (typeof window === "undefined" || !sectionRef.current) return;

      // Check user's motion preference for accessibility
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Setup GSAP Context for seamless scoping and automatic garbage collection
      const ctx = gsap.context(() => {
        // Redux Viewport Tracker: Active Section Sync
        if (sectionId) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => dispatch(setActiveSection(sectionId)),
            onEnterBack: () => dispatch(setActiveSection(sectionId)),
          });
        }

        // Entrance Animation: if reduced motion is requested, show immediately without motion
        if (prefersReducedMotion) {
          gsap.set(sectionRef.current, { opacity: 1, y: 0 });
          return;
        }

        // Target children with [data-reveal] attribute or animate the section children
        const revealElements = sectionRef.current.querySelectorAll("[data-reveal]");
        const targets = revealElements.length > 0 ? revealElements : sectionRef.current;

        gsap.fromTo(
          targets,
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: staggerSpeed,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }, sectionRef);

      return () => {
        ctx.revert(); // GSAP memory leak prevention and clean teardown
      };
    }, [dispatch]);

    return (
      <section
        id={sectionId || undefined}
        ref={sectionRef}
        data-section-id={sectionId}
        className="relative w-full py-20 lg:py-28 overflow-hidden transition-colors"
        aria-label={badgeText || sectionId}
      >
        {/* Subtle decorative ambient backdrop glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 w-[600px] h-[300px] blur-[140px] rounded-full opacity-60"
          style={{ background: glowColor }}
        />

        <WrappedComponent {...props} />
      </section>
    );
  };

  EnhancedSection.displayName = `withSectionReveal(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return EnhancedSection;
}

export default withSectionReveal;

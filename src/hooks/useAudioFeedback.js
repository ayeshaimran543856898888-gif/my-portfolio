"use client";

import { useCallback } from "react";
import { useSelector } from "react-redux";

/**
 * useAudioFeedback hook
 * Generates subtle, elegant futuristic UI sound cues using the Web Audio API.
 * Triggered only when audio is enabled in the Redux store.
 */
export function useAudioFeedback() {
  const soundEnabled = useSelector((state) => state.portfolio.soundEnabled);

  const playTone = useCallback(
    (frequency = 600, duration = 0.05, type = "sine", gainLevel = 0.04) => {
      if (!soundEnabled || typeof window === "undefined") return;

      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);

        gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch {
        // Ignore audio playback errors if user gesture restrictions apply
      }
    },
    [soundEnabled]
  );

  const playClick = useCallback(() => {
    playTone(720, 0.04, "triangle", 0.03);
  }, [playTone]);

  const playHover = useCallback(() => {
    playTone(480, 0.03, "sine", 0.015);
  }, [playTone]);

  const playSuccess = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.08 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.15);
      });
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  return { playClick, playHover, playSuccess };
}

export default useAudioFeedback;

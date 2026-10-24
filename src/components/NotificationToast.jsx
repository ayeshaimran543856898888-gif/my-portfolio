"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToast } from "@/src/store/portfolioSlice";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function NotificationToast() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.portfolio.toast);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, dispatch]);

  if (!toast.visible) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl glass-panel shadow-2xl border border-violet-500/30 text-white animate-fade-in transition-all"
    >
      {toast.type === "success" && (
        <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0" />
      )}
      {toast.type === "error" && (
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
      )}
      {toast.type === "info" && (
        <Info className="w-5 h-5 text-violet-300 shrink-0" />
      )}
      <span className="text-sm font-medium pr-2 text-zinc-100">
        {toast.message}
      </span>
      <button
        onClick={() => dispatch(hideToast())}
        className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-violet-500/10 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
}

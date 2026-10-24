import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "hero",
  projectFilter: "All",
  quickViewProject: null, // project object or null
  soundEnabled: false,
  ambientGlowColor: "violet", // "violet" | "cyber" | "neon"
  mobileMenuOpen: false,
  toast: {
    visible: false,
    message: "",
    type: "info", // "info" | "success" | "error"
  },
  contactForm: {
    status: "idle", // "idle" | "submitting" | "success" | "error"
    errorMessage: "",
  },
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setProjectFilter: (state, action) => {
      state.projectFilter = action.payload;
    },
    setQuickViewProject: (state, action) => {
      state.quickViewProject = action.payload;
    },
    closeQuickViewProject: (state) => {
      state.quickViewProject = null;
    },
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    setSoundEnabled: (state, action) => {
      state.soundEnabled = action.payload;
    },
    setAmbientGlowColor: (state, action) => {
      state.ambientGlowColor = action.payload;
    },
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    showToast: (state, action) => {
      state.toast = {
        visible: true,
        message: action.payload.message || "",
        type: action.payload.type || "info",
      };
    },
    hideToast: (state) => {
      state.toast.visible = false;
    },
    setContactStatus: (state, action) => {
      state.contactForm.status = action.payload.status;
      state.contactForm.errorMessage = action.payload.errorMessage || "";
    },
    resetContactForm: (state) => {
      state.contactForm.status = "idle";
      state.contactForm.errorMessage = "";
    },
  },
});

export const {
  setActiveSection,
  setProjectFilter,
  setQuickViewProject,
  closeQuickViewProject,
  toggleSound,
  setSoundEnabled,
  setAmbientGlowColor,
  setMobileMenuOpen,
  toggleMobileMenu,
  showToast,
  hideToast,
  setContactStatus,
  resetContactForm,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;

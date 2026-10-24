/**
 * Centralized Portfolio Data
 * 
 * NOTE FOR USER:
 * You can easily update your personal details, email, GitHub, LinkedIn,
 * and project links directly in this file.
 */

export const personalInfo = {
  // Name (Editable: Update with your preferred display name)
  name: "Ayesha Imran",
  role: "Full Stack & MERN Developer",
  tagline: "Crafting modern, high-performance web applications with seamless user experiences.",
  location: "Pakistan",
  availability: "Available for freelance & full-time roles",
  
  // Contact details
  phone: "033333333333", // Official phone number specified by user
  
  // Email identity (Editable until confirmed address)
  email: "ayeshadev@gmail.com", // EDITABLE: Set to your confirmed email address
  emailIdentity: "Ayesha Dev",
  isEmailPlaceholder: true, // Marker for editable prompt
  
  // Social links (Editable: Replace with your own profile links)
  github: "https://github.com/ayeshadev", // EDITABLE: Add your GitHub username
  linkedin: "https://linkedin.com/in/ayeshadev", // EDITABLE: Add your LinkedIn profile
  resumeUrl: "#contact", // Can link to a PDF in /public/resume.pdf when available
  
  bio: `I am a passionate Full Stack & MERN Stack Developer dedicated to engineering fast, accessible, and visually captivating digital products. With solid foundations in modern JavaScript, React, Next.js, and Node.js, I bridge the gap between aesthetic frontend design and robust backend architecture.`
};

export const heroStats = [
  { value: "4+", label: "Live Projects" },
  { value: "100%", label: "Responsive Design" },
  { value: "MERN", label: "Stack Proficiency" },
  { value: "Fast", label: "Performance Focused" }
];

export const aboutHighlights = [
  {
    title: "MERN Architecture",
    description: "Designing end-to-end full-stack applications with MongoDB, Express, React, and Node.js.",
    badge: "Full-Stack"
  },
  {
    title: "Next.js & Performance",
    description: "Building production-grade web apps with server components, optimized asset pipelines, and SEO.",
    badge: "Frontend"
  },
  {
    title: "Modern UI/UX & Motion",
    description: "Creating sleek dark-mode interfaces with Tailwind CSS, GSAP physics animations, and micro-interactions.",
    badge: "Design & UX"
  },
  {
    title: "Clean Code & Scalability",
    description: "Writing modular, testable code adhering to solid component patterns, HOCs, and Redux state management.",
    badge: "Engineering"
  }
];

export const skillsData = [
  {
    category: "Core & Frontend",
    description: "Foundational web standards and reactive component libraries",
    skills: [
      { name: "HTML5", level: 95, tag: "Semantic & SEO" },
      { name: "CSS3", level: 92, tag: "Modern Layouts" },
      { name: "JavaScript", level: 90, tag: "ES6+ Async/Await" },
      { name: "React.js", level: 88, tag: "Hooks & Architecture" },
      { name: "Next.js", level: 85, tag: "App Router & SSR" },
      { name: "Tailwind CSS", level: 92, tag: "Utility-first Styling" }
    ]
  },
  {
    category: "Backend & Database",
    description: "Server-side logic, API endpoints, and scalable persistence",
    skills: [
      { name: "Node.js", level: 84, tag: "REST APIs & Runtime" },
      { name: "MongoDB", level: 82, tag: "NoSQL & Mongoose" },
      { name: "Python", level: 75, tag: "Scripting & Fundamentals" }
    ]
  },
  {
    category: "Tools & Creative Design",
    description: "Version control workflows and creative graphic design",
    skills: [
      { name: "Git", level: 88, tag: "Branching & Workflow" },
      { name: "GitHub", level: 90, tag: "Collaboration & CI" },
      { name: "Canva", level: 85, tag: "Graphic & UI Assets" }
    ]
  }
];

export const educationData = [
  {
    id: "edu-1",
    degree: "MERN Stack Development",
    institution: "PNY Institute",
    period: "Professional Certification",
    status: "Completed",
    description: "Comprehensive hands-on training in full-stack JavaScript architecture: MongoDB database modeling, Express.js REST APIs, React dynamic UI development, and Node.js server environments.",
    skillsAcquired: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "State Management"]
  },
  {
    id: "edu-2",
    degree: "Intermediate",
    institution: "Samanabad College",
    period: "Higher Secondary Certificate",
    status: "Completed",
    description: "Focused academic program building strong analytical reasoning, problem solving, and computational foundations.",
    skillsAcquired: ["Analytical Thinking", "Mathematics", "Computer Science Principles"]
  },
  {
    id: "edu-3",
    degree: "Matriculation",
    institution: "Al Rehman School",
    period: "Secondary School Certificate",
    status: "Completed",
    description: "Established core scientific education and introductory programming logic with a strong academic track record.",
    skillsAcquired: ["Core Sciences", "Logic Development", "Computer Literacy"]
  }
];

export const projectsData = [
  {
    id: "digital-impacts",
    title: "Digital Impacts",
    category: "Frontend",
    tagline: "Modern Agency & Digital Analytics Platform",
    description: "A sleek, high-conversion web platform designed for digital campaigns and impact metrics. Features interactive marketing dashboards, real-time analytics visualizations, dynamic navigation, and fluid responsive styling.",
    liveUrl: "https://digital-impacts.vercel.app/",
    githubUrl: "https://github.com/ayeshadev", // EDITABLE
    image: "/images/project-digital-impacts.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "Analytics UI", "Responsive Design"],
    highlights: [
      "Dynamic interactive marketing and metrics dashboard",
      "Vivid dark purple aesthetics with high-contrast data visualization",
      "Optimized production build deployed seamlessly on Vercel"
    ]
  },
  {
    id: "form-handling",
    title: "Form Handling System",
    category: "Utility",
    tagline: "Dynamic Multi-Step Validation & Security Flow",
    description: "An advanced, interactive form processing application showcasing robust client-side validation, password strength calculation, real-time field feedback, step-by-step progress tracking, and accessible input ergonomics.",
    liveUrl: "https://form-handling-mauve.vercel.app/",
    githubUrl: "https://github.com/ayeshadev", // EDITABLE
    image: "/images/project-form-handling.jpg",
    tags: ["React", "Form Validation", "Tailwind CSS", "UX Design", "Vercel"],
    highlights: [
      "Multi-step registration workflow with progress indicators",
      "Instant visual field validation with inline error messaging",
      "Security-first password strength evaluation algorithm"
    ]
  },
  {
    id: "calculator",
    title: "Obsidian Calculator",
    category: "Utility",
    tagline: "High-Precision Glassmorphic Digital Calculator",
    description: "A modern mathematical calculator application featuring an obsidian glassmorphism aesthetic, glowing OLED interactive keys, parenthesis arithmetic evaluation, calculation history recall, and keyboard accessibility.",
    liveUrl: "https://calculator-mine-93f3.vercel.app/",
    githubUrl: "https://github.com/ayeshadev", // EDITABLE
    image: "/images/project-calculator.jpg",
    tags: ["JavaScript", "React", "CSS Glassmorphism", "Math Engine"],
    highlights: [
      "Real-time expression parser and calculation history stream",
      "Responsive tactile feedback with neon violet button illumination",
      "Lightweight, zero-latency arithmetic processing"
    ]
  },
  {
    id: "todo-app",
    title: "Apex Productivity Hub",
    category: "Full Stack",
    tagline: "Task Organization & Workflow Management",
    description: "A comprehensive task management and productivity suite built to streamline personal and professional workflows. Includes categorised task lists, status filters (All, In Progress, Completed), interactive checkmark animations, and persistent state storage.",
    liveUrl: "https://todo-app-git-master-mine-93f3.vercel.app/",
    githubUrl: "https://github.com/ayeshadev", // EDITABLE
    image: "/images/project-todo-app.jpg",
    tags: ["React", "State Management", "Local Persistence", "UI/UX"],
    highlights: [
      "Categorized task scheduling (Today, This Week, Backlog)",
      "Instant completion toggles with smooth transition physics",
      "Filtering by completion status and task priority indicators"
    ]
  }
];

export const navLinks = [
  { name: "Home", href: "#hero", sectionId: "hero" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Skills", href: "#skills", sectionId: "skills" },
  { name: "Education", href: "#education", sectionId: "education" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Contact", href: "#contact", sectionId: "contact" }
];

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/src/store/StoreProvider";
import BackgroundEffects from "@/src/components/BackgroundEffects";
import NotificationToast from "@/src/components/NotificationToast";
import ProjectQuickModal from "@/src/components/ProjectQuickModal";
import { personalInfo } from "@/src/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ayesha-portfolio.vercel.app"),
  title: `${personalInfo.name} | Full Stack & MERN Developer Portfolio`,
  description: `${personalInfo.name} — Full Stack & MERN Developer specializing in Next.js, React, Node.js, Tailwind CSS, and interactive GSAP web applications. Explore deployed projects and skills.`,
  keywords: [
    "Ayesha Imran",
    "Ayesha Dev",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Tailwind CSS",
    "Portfolio",
    "JavaScript Developer",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayesha-portfolio.vercel.app",
    title: `${personalInfo.name} | Full Stack & MERN Developer`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/images/avatar.jpg",
        width: 1200,
        height: 1200,
        alt: `${personalInfo.name} Professional Developer Portrait`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Full Stack & MERN Developer`,
    description: personalInfo.tagline,
    images: ["/images/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#06050b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#06050b] text-[#f8fafc] font-sans selection:bg-violet-600 selection:text-white">
        <StoreProvider>
          {/* Ambient Lighting & Dynamic Grid */}
          <BackgroundEffects />

          {/* Interactive Modals and Floating Alerts */}
          <NotificationToast />
          <ProjectQuickModal />

          {/* Application Tree */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}

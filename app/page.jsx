import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Education from "@/src/components/Education";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content" className="flex-1 flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

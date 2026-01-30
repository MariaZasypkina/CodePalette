import React from "react"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"
import useSEO from "./hooks/useSEO"

export default function App() {
  useSEO({
    title: "Modern Web Development Lab",
    description:
      "Modern web development studio building fast, clean, and maintainable websites for small businesses and startups. We focus on thoughtful architecture, accessible interfaces, and code that is easy to scale and support.",
    keywords: [
      "modern web design",
      "modern web developement",
      "website for small business",
      "custom website",
      "landing page",
      "conversion-focused web",
      "web design agency",
      "web design services",
      "Colorado web studio",
      "Creative Code Palette",
      "web development services", 
      "web development studio",
      "custom web development", 
      "modern web development",
      "responsive websites", 
      "US web development",
    ],
    canonicalPath: "/",
  });

  return (
    <main className="font-sans bg-white text-sage-dark">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

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
    title: "Modern Web Design for Small Businesses",
    description:
      "US-based web design agency crafting custom websites, landing pages, and small e-commerce for startups and small businesses. Modern, responsive, conversion-focused.",
    keywords: [
      "modern web design",
      "website design for small business",
      "custom website design",
      "landing page design",
      "conversion-focused web design",
      "web design agency",
      "web design services",
      "Colorado web design studio",
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

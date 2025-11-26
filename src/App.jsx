import React from "react"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"

export default function App() {
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

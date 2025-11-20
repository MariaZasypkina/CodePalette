import React from "react";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div>
      <main className="font-sans hero-gradient min-h-screen">
        <Navbar />

        <ProjectsSection></ProjectsSection>
      </main>
      <Footer />
    </div>
  );
}

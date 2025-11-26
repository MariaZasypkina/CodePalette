import React from "react";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div>
      <main className="font-sans hero-gradient min-h-screen">
        <Navbar />

        <div className="px-6 pt-4 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
          >
            <span className="text-xl leading-none">←</span>
            <span>Home</span>
          </Link>
        </div>

        <ProjectsSection></ProjectsSection>
      </main>
      <Footer />
    </div>
  );
}

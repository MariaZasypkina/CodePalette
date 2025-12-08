import React from "react";
import ProjectsSection from "../components/ProjectsSection";
import PageLayout from "../layouts/PageLayout";
import useSEO from "../hooks/useSEO";

export default function Projects() {
  useSEO({
    title: "Portfolio of Modern Websites",
    description:
      "View Creative Code Palette Studio projects: modern, responsive, and conversion-focused web design for US small businesses and startups.",
    keywords: [
      "web design portfolio",
      "modern website design",
      "responsive web design",
      "landing page design examples",
      "custom website design",
    ],
    canonicalPath: "/projects",
  });

  return (
    <PageLayout>
      <ProjectsSection />
    </PageLayout>
  );
}

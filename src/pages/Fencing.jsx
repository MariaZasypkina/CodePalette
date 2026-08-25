import React from "react";
import ProjectPageTemplate from "../layouts/ProjectPageTemplate";
import homeImg from "../assets/projects/lexies-scrubs/home.png";
import factsImg from "../assets/projects/lexies-scrubs/all-facts.png";
import mythImg from "../assets/projects/lexies-scrubs/myth-or-truth.png";
import questionImg from "../assets/projects/lexies-scrubs/question-form.png";
import adminImg from "../assets/projects/lexies-scrubs/admin.png";
import mobileImg from "../assets/projects/lexies-scrubs/mobile-home.png";

export default function Fencing() {
  const showcaseItems = [
    {
      title: "Home",
      type: "image",
      src: homeImg,
      className: "object-contain object-top bg-white",
    },
    {
      title: "All Facts",
      type: "image",
      src: factsImg,
      className: "object-contain object-top bg-white",
    },
    {
      title: "Myth or Truth",
      type: "image",
      src: mythImg,
      className: "object-contain object-top bg-white",
    },
    {
      title: "Submit a Question",
      type: "image",
      src: questionImg,
      className: "object-contain object-top bg-white",
    },
    {
      title: "Admin Dashboard",
      type: "image",
      src: adminImg,
      className: "object-contain object-top bg-white",
    },
    {
      title: "Mobile Experience",
      type: "image",
      src: mobileImg,
      className: "object-contain object-top bg-white",
    },
    { title: "Project Walkthrough", type: "video-placeholder" },
  ];

  const whatItDoes = {
    title: "What the Platform Does",
    items: [
      {
        label: "Science Stories",
        text: "turns body and medicine questions into short, approachable investigations.",
      },
      {
        label: "Fact Library",
        text: "organizes published stories in an easy-to-browse collection.",
      },
      {
        label: "Myth Checks",
        text: "separates common medical claims from evidence with clear, reader-friendly explanations.",
      },
      {
        label: "Community Questions",
        text: "gives curious readers a simple way to submit questions and future topic ideas.",
      },
      {
        label: "Content Management",
        text: "includes an admin area for creating, editing, and publishing posts.",
      },
    ],
  };

  const frontendOverview = {
    title: "Experience & Design",
    description:
      "A calm, editorial interface that makes science feel inviting, trustworthy, and easy to explore on any screen.",
    listItems: [
      "Clear navigation for facts, myth checks, and reader questions",
      "Soft scientific palette, generous spacing, and readable editorial typography",
      "Responsive layouts designed for desktop and mobile browsing",
      "Reusable cards for stories, myth checks, and educational content",
      "Accessible forms that make contributing an idea feel straightforward",
    ],
  };

  const contentWorkflow = {
    title: "Content Workflow",
    description:
      "The project supports an end-to-end publishing flow, from collecting questions to managing posts in one place.",
    listItems: [
      "Create and update science posts from the admin dashboard",
      "Publish content with dates and organized views",
      "Maintain a focused Myth or Truth collection",
      "Collect reader questions for future investigations",
    ],
  };

  const whatDemonstrates = {
    title: "What This Project Demonstrates",
    items: [
      "Translating an educational concept into a cohesive digital product",
      "Designing distinct editorial, form, and admin experiences",
      "Building responsive views that preserve the project’s visual voice",
      "Creating a content-first interface that is both warm and practical",
    ],
  };

  return (
    <ProjectPageTemplate
      title="Lexies Scrubs"
      subtitle="Science Education & Content Platform"
      description="Lexies Scrubs is a friendly science-learning platform that turns curious questions about the body and medicine into memorable, easy-to-follow investigations. It combines educational stories, myth checks, a question-submission experience, and an editorial dashboard in one cohesive product."
      descriptionExtra="The experience is designed to feel calm and credible while keeping complex topics approachable for curious readers."
      showcaseItems={showcaseItems}
      posterImage={homeImg}
      whatItDoes={whatItDoes}
      frontendOverview={frontendOverview}
      backendOverview={contentWorkflow}
      whatDemonstrates={whatDemonstrates}
      githubLink="https://github.com/MariaZasypkina/Lexies-Scrubs.git"
    />
  );
}

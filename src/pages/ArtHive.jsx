import React from "react";
import ProjectPageTemplate from "../layouts/ProjectPageTemplate";
import homeImg from "../assets/projects/ARHTIVE-home.png";
import galleryImg from "../assets/projects/ARHTIVE-gallery.png";
import aboutImg from "../assets/projects/ARHTIVE-about.png";
import bestOfImg from "../assets/projects/ARHTIVE-bestOf.png";
import adminImg from "../assets/projects/ARHTIVE-admin.png";
import walkthroughVideo from "../assets/projects/ARTHIVE-screen-record.mov";
import teamImg from "../assets/projects/ARTHIVE-team.png";

export default function ArtHive() {
  const showcaseItems = [
    { title: "Home", type: "image", src: homeImg },
    { title: "Gallery", type: "image", src: galleryImg },
    { title: "About", type: "image", src: aboutImg },
    { title: "Best Of", type: "image", src: bestOfImg },
    { title: "Admin", type: "image", src: adminImg, className: "md:translate-y-6" },
    { title: "Product Walkthrough", type: "video", src: walkthroughVideo },
  ];

  const whatItDoes = {
    title: "What the Platform Does",
    items: [
      {
        label: "Weekly Challenges",
        text: "browse active prompts with topics, descriptions, and deadlines: available to everyone.",
      },
      {
        label: "Artwork Gallery",
        text: "responsive gallery with sorting, quick views, and likes; each piece opens in a modal with preview and metadata.",
      },
      {
        label: "Submission Flow",
        text: "secure JPG and PNG uploads (up to 5 MB) with image preview, title, media type, and description.",
      },
      {
        label: "User Accounts & Roles",
        text: "Google OAuth or JWT auth; admins create challenges, moderate content, and manage users.",
      },
      {
        label: "Top Artworks Showcase",
        text: "highlight section for the most-liked creations.",
      },
    ],
  };

  const frontendOverview = {
    title: "Frontend Overview",
    description:
      "Fast, responsive, and comfortable for artists: focused on clarity, smooth navigation, and a distraction-free interface.",
    listItems: [
      "React 19 + Vite for a quick workflow",
      "React Router for clean page transitions",
      "Material UI with Emotion for styling and responsiveness",
      "Axios for API calls with structured error handling",
      "Global state via Context + useReducer",
      "JWT token flow plus Google OAuth sign-in",
      "Modular, feature-based components and protected routes",
      "Mobile-first UI with a flexible grid system",
    ],
  };

  const backendOverview = {
    title: "Backend Overview",
    description: "A secure, scalable REST API powering the platform.",
    listItems: [
      "User registration, login, profiles, and roles",
      "Challenge management with prompts and dates",
      "Artwork submission with image handling and metadata",
      "Endpoints for browsing, filtering, and viewing artworks",
      "Admin tools for moderation and challenge creation",
      "Seed scripts and JSON fixtures for consistent environments",
    ],
  };

  const techStack = {
    title: "Full Tech Stack",
    description: null,
    items: [
      { label: "Frontend", text: "React 19, Vite, React Router, Material UI, Emotion, Axios, Context API, Google OAuth, JWT handling" },
      { label: "Backend", text: "Node.js, Express, MongoDB, Mongoose, JWT auth, Multer for uploads, seed scripts" },
      { label: "Development & Tooling", text: "ESLint, Prettier, npm scripts, responsive design, REST API integration, modular file structure" },
    ],
  };

  const whatDemonstrates = {
    title: "What This Project Demonstrates",
    items: [
      "Building a complete full-stack application from scratch",
      "Strong React architecture and UI design",
      "Secure authentication with OAuth and JWT",
      "REST API development with role-based access",
      "Image processing and file upload flows",
      "Team collaboration with clean Git workflow and structure",
      "Production-ready mindset with validation, error handling, and seed data",
    ],
  };

  return (
    <ProjectPageTemplate
      title="ArtHive"
      subtitle="Full-Stack Collaborative Art Challenge Platform"
      description="ArtHive is a full-stack creative platform built to help artists stay inspired, experiment with new ideas, and share their work in a supportive community. The project combines a clean, modern frontend with a robust backend API that manages weekly challenges, artwork submissions, user profiles, and admin tools."
      descriptionExtra="The platform was developed as a team practicum project and showcases strong skills in full-stack engineering, UI design, authentication, data modeling, and API development."
      showcaseItems={showcaseItems}
      posterImage={homeImg}
      whatItDoes={whatItDoes}
      frontendOverview={frontendOverview}
      backendOverview={backendOverview}
      techStack={techStack}
      whatDemonstrates={whatDemonstrates}
      teamImg={teamImg}
      githubLink="https://github.com/MariaZasypkina/ArtHive.git"
    />
  );
}

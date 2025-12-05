import React from "react";
import ProjectPageTemplate from "../layouts/ProjectPageTemplate";
import landingImg from "../assets/projects/KindNet-lending.png";
import designImg from "../assets/projects/KindNet-design.png";
import homeImg from "../assets/projects/KindNet-home.png";
import mapImg from "../assets/projects/KindNet-map.png";
import post1Img from "../assets/projects/KindNet-post1.png";
import post2Img from "../assets/projects/KindNet-post2.png";
import signupImg from "../assets/projects/KindNet-signup.png";
import videoDemo from "../assets/projects/KindNet-video.mov";
import teamImg from "../assets/projects/KindNet-team.png";

export default function KindNet() {
  const showcaseItems = [
    { title: "Landing", type: "image", src: landingImg },
    { title: "Design", type: "image", src: designImg },
    { title: "Home", type: "image", src: homeImg },
    { title: "Map", type: "image", src: mapImg },
    { title: "Post #1", type: "image", src: post1Img },
    { title: "Post #2", type: "image", src: post2Img },
    { title: "Sign Up", type: "image", src: signupImg },
    { title: "Product Walkthrough", type: "video", src: videoDemo },
  ];

  const whatItDoes = {
    title: "What the Platform Does",
    items: [
      {
        label: "Item Sharing and Exchange",
        text: "post items to give or lend, browse categories, view details, and pick delivery or pickup.",
      },
      {
        label: "User Accounts and Profiles",
        text: "email verification, password reset, Google OAuth, customizable profiles.",
      },
      {
        label: "Community Trust System",
        text: "reviews and ratings for each completed exchange to build reputation.",
      },
      {
        label: "Smart Search and Geolocation",
        text: "search by ZIP, explore nearby items, and view locations on maps.",
      },
      {
        label: "Transaction Tracking",
        text: "structured history for every exchange between users.",
      },
    ],
  };

  const frontendOverview = {
    title: "Frontend Overview",
    description: "Clean, intuitive, and fast UI using Tailwind CSS and modular React architecture.",
    listItems: [
      "React 18 with Vite",
      "React Router 7 for navigation",
      "Tailwind CSS and PostCSS for styling",
      "Axios for API communication",
      "OAuth via @react-oauth/google",
      "Leaflet and React-Leaflet for maps",
      "Lucide React icons",
      "ESLint for code quality",
      "Feature-based components, forms, modals, layouts",
      "Protected routes for authenticated and admin actions",
      "Responsive design for desktop and mobile",
    ],
  };

  const backendOverview = {
    title: "Backend Overview",
    description: "Powers data flow, security logic, and business rules.",
    listItems: [
      "User registration with secure hashing and email verification",
      "JWT authentication plus Passport.js Google OAuth",
      "Item posting with multiple image uploads",
      "Cloudinary integration for storage and CDN delivery",
      "Zipcode and location-based searching",
      "Transaction history between users",
      "Feedback and rating system",
      "Rate limiting and advanced error handling",
      "Comprehensive validation using Joi",
    ],
  };

  const techStack = {
    title: "Tech Stack",
    items: [
      { label: "Frontend", text: "React 18, Tailwind CSS, React Router 7, Vite, Axios, Lucide React, Leaflet, React-Leaflet, @react-oauth/google" },
      { label: "Backend", text: "Node.js, Express, PostgreSQL, Sequelize, JWT, Passport.js, Cloudinary, Nodemailer, Joi, Bcrypt, express-rate-limit" },
      { label: "Tooling and Quality", text: "ESLint, Jest, Supertest, Nodemon, cross-env, PostCSS, Vite build pipeline" },
    ],
  };

  const whatDemonstrates = {
    title: "What This Project Demonstrates",
    items: [
      "Full-stack engineering in a real team environment",
      "REST API design with robust validation and error handling",
      "Strong authentication flows with JWT and OAuth",
      "Secure user management with email verification and account lockout",
      "Cloud storage and file upload pipelines",
      "Database modeling and relationship architecture",
      "Geolocation and map integration",
      "Frontend state management and modular UI development",
      "Clean git workflow and collaborative development",
      "Production-oriented mindset with environment configs and deployment-readiness",
    ],
  };

  return (
    <ProjectPageTemplate
      title="KindNet"
      subtitle="Full-Stack Community Sharing Platform"
      description="KindNet is a full-stack web application built as a team practicum project for Code the Dream. It is designed to support sustainable living by helping neighbors share items, reduce waste, and build community connections. The platform combines a modern frontend with a secure, feature-rich backend and demonstrates strong engineering practices across the entire stack."
      showcaseItems={showcaseItems}
      posterImage={landingImg}
      whatItDoes={whatItDoes}
      frontendOverview={frontendOverview}
      backendOverview={backendOverview}
      techStack={techStack}
      whatDemonstrates={whatDemonstrates}
      teamImg={teamImg}
      githubLink="https://github.com/MariaZasypkina/KindNet.git"
    />
  );
}

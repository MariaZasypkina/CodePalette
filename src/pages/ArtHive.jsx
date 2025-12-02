import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

  return (
    <main>
      <div className="min-h-screen p-8 bg-white text-sage-dark">
        <Navbar />

        <div className="pb-4 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
          >
            <span className="text-xl leading-none">←</span>
            <span>Home</span>
          </Link>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-lavender">
              Full-Stack Collaborative Art Challenge Platform
            </p>
            <h1 className="text-4xl font-bold text-lavender-dark">ArtHive</h1>
            <p className="text-lg">
              ArtHive is a full-stack creative platform built to help artists stay
              inspired, experiment with new ideas, and share their work in a
              supportive community. The project combines a clean, modern frontend
              with a robust backend API that manages weekly challenges, artwork
              submissions, user profiles, and admin tools.
            </p>
            <p className="text-lg">
              The platform was developed as a team practicum project and showcases
              strong skills in full-stack engineering, UI design, authentication,
              data modeling, and API development.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-lavender-dark">
              Screens &amp; Demo
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {showcaseItems.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <p className="font-semibold text-sage-dark">{item.title}</p>
                  </div>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`${item.title} screen`}
                      className={`w-full h-full object-cover ${item.className ?? ""}`}
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full"
                      poster={homeImg}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                What the Platform Does
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  <span className="font-semibold">Weekly Challenges:</span> browse
                  active prompts with topics, descriptions, and deadlines—available
                  to everyone.
                </li>
                <li>
                  <span className="font-semibold">Artwork Gallery:</span> responsive
                  gallery with sorting, quick views, and likes; each piece opens in
                  a modal with preview and metadata.
                </li>
                <li>
                  <span className="font-semibold">Submission Flow:</span> secure JPG
                  and PNG uploads (up to 5 MB) with image preview, title, media
                  type, and description.
                </li>
                <li>
                  <span className="font-semibold">User Accounts &amp; Roles:</span>{" "}
                  Google OAuth or JWT auth; admins create challenges, moderate
                  content, and manage users.
                </li>
                <li>
                  <span className="font-semibold">Top Artworks Showcase:</span>{" "}
                  highlight section for the most-liked creations.
                </li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Frontend Overview
              </h2>
              <p className="mb-4">
                Fast, responsive, and comfortable for artists—focused on clarity,
                smooth navigation, and a distraction-free interface.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>React 19 + Vite for a quick workflow</li>
                <li>React Router for clean page transitions</li>
                <li>Material UI with Emotion for styling and responsiveness</li>
                <li>Axios for API calls with structured error handling</li>
                <li>Global state via Context + useReducer</li>
                <li>JWT token flow plus Google OAuth sign-in</li>
                <li>Modular, feature-based components and protected routes</li>
                <li>Mobile-first UI with a flexible grid system</li>
              </ul>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Backend Overview
              </h2>
              <p className="mb-4">
                A secure, scalable REST API powering the platform.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>User registration, login, profiles, and roles</li>
                <li>Challenge management with prompts and dates</li>
                <li>Artwork submission with image handling and metadata</li>
                <li>Endpoints for browsing, filtering, and viewing artworks</li>
                <li>Admin tools for moderation and challenge creation</li>
                <li>Seed scripts and JSON fixtures for consistent environments</li>
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-sage-dark mb-2">Architecture</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Node.js + Express</li>
                  <li>MongoDB with Mongoose models</li>
                  <li>JWT authentication with role checks</li>
                  <li>Image upload endpoints (local or cloud storage)</li>
                  <li>Controllers, routes, middleware, validation, and error handling</li>
                </ul>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Full Tech Stack
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sage-dark mb-1">Frontend</p>
                  <p>
                    React 19, Vite, React Router, Material UI, Emotion, Axios,
                    Context API, Google OAuth, JWT handling
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sage-dark mb-1">Backend</p>
                  <p>
                    Node.js, Express, MongoDB, Mongoose, JWT auth, Multer for
                    uploads, seed scripts
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sage-dark mb-1">
                    Development &amp; Tooling
                  </p>
                  <p>
                    ESLint, Prettier, npm scripts, responsive design, REST API
                    integration, modular file structure
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
              What This Project Demonstrates
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Building a complete full-stack application from scratch</li>
              <li>Strong React architecture and UI design</li>
              <li>Secure authentication with OAuth and JWT</li>
              <li>REST API development with role-based access</li>
              <li>Image processing and file upload flows</li>
              <li>Team collaboration with clean Git workflow and structure</li>
              <li>Production-ready mindset with validation, error handling, and seed data</li>
            </ul>
          </section>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <img
            src={teamImg}
            alt="ArtHive team"
            className="w-full rounded-2xl shadow-md"
          />
          <div className="mt-6 text-center">
            <a
              href="https://github.com/MariaZasypkina/ArtHive.git"
              className="text-lavender-dark hover:text-lavender underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

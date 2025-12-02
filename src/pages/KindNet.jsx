import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
              Full-Stack Community Sharing Platform
            </p>
            <h1 className="text-4xl font-bold text-lavender-dark">KindNet</h1>
            <p className="text-lg">
              KindNet is a full-stack web application built as a team practicum
              project for Code the Dream. It is designed to support sustainable
              living by helping neighbors share items, reduce waste, and build
              community connections. The platform combines a modern frontend with
              a secure, feature-rich backend and demonstrates strong engineering
              practices across the entire stack.
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
                      className="w-full h-full object-contain bg-white"
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full"
                      poster={landingImg}
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
                  <span className="font-semibold">Item Sharing and Exchange:</span>{" "}
                  post items to give or lend, browse categories, view details, and
                  pick delivery or pickup.
                </li>
                <li>
                  <span className="font-semibold">User Accounts and Profiles:</span>{" "}
                  email verification, password reset, Google OAuth, customizable
                  profiles.
                </li>
                <li>
                  <span className="font-semibold">Community Trust System:</span>{" "}
                  reviews and ratings for each completed exchange to build
                  reputation.
                </li>
                <li>
                  <span className="font-semibold">Smart Search and Geolocation:</span>{" "}
                  search by ZIP, explore nearby items, and view locations on maps.
                </li>
                <li>
                  <span className="font-semibold">Transaction Tracking:</span>{" "}
                  structured history for every exchange between users.
                </li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Frontend Overview
              </h2>
              <p className="mb-4">
                Clean, intuitive, and fast UI using Tailwind CSS and modular React
                architecture.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>React 18 with Vite</li>
                <li>React Router 7 for navigation</li>
                <li>Tailwind CSS and PostCSS for styling</li>
                <li>Axios for API communication</li>
                <li>OAuth via @react-oauth/google</li>
                <li>Leaflet and React-Leaflet for maps</li>
                <li>Lucide React icons</li>
                <li>ESLint for code quality</li>
                <li>Feature-based components, forms, modals, layouts</li>
                <li>Protected routes for authenticated and admin actions</li>
                <li>Responsive design for desktop and mobile</li>
              </ul>
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Backend Overview
              </h2>
              <p className="mb-4">
                Powers data flow, security logic, and business rules.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>User registration with secure hashing and email verification</li>
                <li>JWT authentication plus Passport.js Google OAuth</li>
                <li>Item posting with multiple image uploads</li>
                <li>Cloudinary integration for storage and CDN delivery</li>
                <li>Zipcode and location-based searching</li>
                <li>Transaction history between users</li>
                <li>Feedback and rating system</li>
                <li>Rate limiting and advanced error handling</li>
                <li>Comprehensive validation using Joi</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Backend Architecture
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Node.js with Express</li>
                <li>PostgreSQL with Sequelize ORM</li>
                <li>Modular controllers and routes under /api/v1</li>
                <li>Custom error classes for predictable responses</li>
                <li>Automatic cleanup of orphaned images</li>
                <li>
                  Relationship modeling for users, items, images, transactions, and
                  reviews
                </li>
                <li>Production-ready configs with environment-based settings</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                Tech Stack
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sage-dark mb-1">Frontend</p>
                  <p>
                    React 18, Tailwind CSS, React Router 7, Vite, Axios, Lucide
                    React, Leaflet, React-Leaflet, @react-oauth/google
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sage-dark mb-1">Backend</p>
                  <p>
                    Node.js, Express, PostgreSQL, Sequelize, JWT, Passport.js,
                    Cloudinary, Nodemailer, Joi, Bcrypt, express-rate-limit
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sage-dark mb-1">
                    Tooling and Quality
                  </p>
                  <p>ESLint, Jest, Supertest, Nodemon, cross-env, PostCSS, Vite build pipeline</p>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 border border-gray-200 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
              What This Project Demonstrates
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Full-stack engineering in a real team environment</li>
              <li>REST API design with robust validation and error handling</li>
              <li>Strong authentication flows with JWT and OAuth</li>
              <li>Secure user management with email verification and account lockout</li>
              <li>Cloud storage and file upload pipelines</li>
              <li>Database modeling and relationship architecture</li>
              <li>Geolocation and map integration</li>
              <li>Frontend state management and modular UI development</li>
              <li>Clean git workflow and collaborative development</li>
              <li>Production-oriented mindset with environment configs and deployment-readiness</li>
            </ul>
          </section>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <img
            src={teamImg}
            alt="KindNet team"
            className="w-full rounded-2xl shadow-md"
          />
          <div className="mt-6 text-center">
            <a
              href="https://github.com/MariaZasypkina/KindNet.git"
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

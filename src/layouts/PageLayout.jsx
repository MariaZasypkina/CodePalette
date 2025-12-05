import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageLayout({ children, showBackLink = true }) {
  return (
    <div>
      <main className="font-sans hero-gradient min-h-screen">
        <Navbar />

        {showBackLink && (
          <div className="px-6 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
            >
              <span className="text-xl leading-none">←</span>
              <span>Home</span>
            </Link>
          </div>
        )}

        {children}
      </main>

      <Footer />
    </div>
  );
}

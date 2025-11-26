// src/pages/PlayAndWin.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Game from "../game/Game.jsx";

export default function PlayAndWin() {
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

        <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
          <Game />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// src/pages/PlayAndWin.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Game from "../game/Game.jsx";

export default function PlayAndWin() {
  return (
    <main className="font-sans hero-gradient min-h-screen">
      <Navbar />

      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <Game />
      </div>

      <Footer />
    </main>
  );
}

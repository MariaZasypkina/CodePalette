
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <main>
      <Navbar />

    <div className="min-h-screen p-8 bg-white text-sage-dark">
      <h1 className="text-4xl font-bold text-lavender-dark">GALLERY OF OUR FAVORITE STYLES </h1>
      <p className="mt-4 text-lg">Coming soon: Browse and purchase ready-to-use website templates!</p>
    </div>
    
<Footer />
    </main>
  );
}

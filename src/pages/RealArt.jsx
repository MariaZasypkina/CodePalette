
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RealArt() {
  return (
    <main>
      <Navbar />

    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-sage-600">GALLERY OF OUR ARTWORKS </h1>
      <p className="mt-4 text-lg text-gray-700">Coming soon: Browse and purchase our paintings and digital art!</p>
    </div>
    
<Footer />
    </main>
  );
}

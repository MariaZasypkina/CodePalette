import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ArtHive() {
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
     
      <h1 className="text-4xl font-bold text-lavender-dark">ArtHive</h1>
      <p className="mt-4 text-lg text-sage-dark">A creative sanctuary where artists discover inspiration through weekly challenges and meaningful community connection</p>
   
    </div>
     <Footer />
</main>
  );
}

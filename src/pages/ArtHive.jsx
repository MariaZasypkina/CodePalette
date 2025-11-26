import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ArtHive() {
  return (
    <main>
    <div className="min-h-screen p-8 bg-white text-sage-dark">
      <Navbar />
     
      <h1 className="text-4xl font-bold text-lavender-dark">ArtHive</h1>
      <p className="mt-4 text-lg text-sage-dark">A creative sanctuary where artists discover inspiration through weekly challenges and meaningful community connection</p>
   
    </div>
     <Footer />
</main>
  );
}

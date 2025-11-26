
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignIn() {
  return (
    <main>
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

    <div className="min-h-screen p-8 bg-white text-sage-dark">
      <h1 className="text-4xl font-bold text-lavender-dark">LOGIN TO YOUR ACCOUNT </h1>
      <p className="mt-4 text-lg">Coming soon: Your own space in our creative community!</p>
    </div>
    
<Footer />
    </main>
  );
}

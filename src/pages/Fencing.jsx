import React from "react";
import { Link } from "react-router-dom";

export default function Fencing() {
  return (
    <div className="min-h-screen p-8 bg-white text-sage-dark">
      <div className="pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
        >
          <span className="text-xl leading-none">←</span>
          <span>Home</span>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-lavender-dark">Fencing Team support project</h1>
      <p className="mt-4 text-lg">This project is created to help to raise funds for the youth Denver Fencing Team</p>
    </div>
  );
}

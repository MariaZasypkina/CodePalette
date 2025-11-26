import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { aboutText, skills, values } from "../data/aboutData";

export default function AboutUs() {
  return (
    <div>
      <main className="font-sans hero-gradient min-h-screen text-sage-dark">
        <Navbar />

        <div className="px-6 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
          >
            <span className="text-xl leading-none">←</span>
            <span>Home</span>
          </Link>
        </div>

        <section className="section-padding">
          <div className="container-centered space-y-10">
            <div className="space-y-4 text-left">
              <h1 className="heading-md text-lavender-dark">
                About Creative Code Palette
              </h1>
              <p className="text-lg leading-relaxed">{aboutText.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-sage-dark">
                  Our Toolbox
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 bg-sage text-white rounded-full text-sm shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-sage-dark">
                  Our Values
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 list-disc list-inside text-sage-dark">
                  {values.map((value, idx) => (
                    <li key={idx}>{value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

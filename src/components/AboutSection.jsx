import React from "react";
import { aboutText } from "../data/aboutData";
import howItWorksImg from "../assets/how-it-works.png";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white text-sage-dark" id="about">
      <div className="container-centered">
        <h2 className="heading-md text-lavender-dark mb-6 text-left">
          {aboutText.title}
        </h2>
        <p className="text-lg leading-relaxed mb-10 text-left">
          {aboutText.description}
        </p>

        <div className="mt-10 flex justify-center w-full">
          <img
            src={howItWorksImg}
            alt="How Creative Code Palette works"
            className="w-full max-w-5xl rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-gradient w-full h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="heading-xl text-lavender-dark">Creative Code Palette Studio</h1>
        <p className="text-center-max">
          Blending Artistry with Code: we design and build elegant digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

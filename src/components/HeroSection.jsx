import React from "react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="hero-gradient w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="heading-xl text-lavender-dark">
          Creative Code Palette Studio
        </h1>
        <p className="text-center-max">
          Blending Artistry with Code: we design and build elegant digital
          experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact">Contact Us</Button>
        </div>
      </div>

      <div className="mt-10 w-full self-stretch">
        <div className="infinite-waves">
          <div className="wave wave-back"></div>
          <div className="wave wave-front"></div>
        </div>
      </div>
    </section>
  );
}

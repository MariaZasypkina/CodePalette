import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white text-sage-dark">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-sage-dark">
          Get In Touch
        </h2>
        <p className="text-lg mb-6">
          We'd love to connect and hear about your project. Reach out to us at:
        </p>
        <a
          href="mailto:creative.code.palette@gmail.com"
          className="text-sage-dark text-lg hover:text-lavender underline"
        >
          creative.code.palette
        </a>
      </div>
    </section>
  );
}

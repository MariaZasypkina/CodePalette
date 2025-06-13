import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          I'd love to connect and hear about your project. Reach out to me at:
        </p>
        <a href="mailto:maria@example.com" className="text-blue-600 text-lg hover:underline">
          maria@example.com
        </a>
      </div>
    </section>
  );
}

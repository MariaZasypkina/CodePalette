import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to connect and hear about your project. Reach out to us at:
        </p>
        <a href="mailto:creative.code.palette@gmail.com" className="text-blue-600 text-lg hover:underline">
          creative.code.palette
        </a>
      </div>
    </section>
  );
}

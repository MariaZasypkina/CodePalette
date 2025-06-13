import React from "react";
import { aboutText, skills, values } from "../data/aboutData";

export default function AboutSection() {
  return (
    <section className="section-padding bg-white text-gray-900" id="about">
      <div className="container-centered">
        <h2 className="heading-md text-lavender-dark mb-6 text-left">
          {aboutText.title}
        </h2>
        <p className="text-lg leading-relaxed mb-10 text-left">
          {aboutText.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-dark">
              Our Toolbox
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 bg-sage text-gray-800 rounded-full text-sm shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-sage-dark">
              Our Values
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 list-disc list-inside text-gray-700">
              {values.map((value, idx) => (
                <li key={idx}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

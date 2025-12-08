import React from "react";
import PageLayout from "../layouts/PageLayout";
import { aboutText, skills, values } from "../data/aboutData";

export default function AboutUs() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-centered space-y-10">
          <div className="space-y-4 text-left">
            <h1 className="heading-md text-lavender-dark">
              About Creative Code Palette
            </h1>
            <p className="text-lg leading-relaxed">{aboutText.description}</p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 text-sage-dark">
            <h2 className="text-2xl font-semibold text-lavender-dark">What We Do</h2>
            <p className="text-lg leading-relaxed">
              We design and develop custom websites, landing pages, and small e-commerce experiences that help your ideas look clear, credible, and ready for growth. In addition to web design and development, the studio creates tailored chatbots, refines user journeys, and supports on-page SEO so your digital presence works smoothly for both humans and search engines.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you are launching a new project or refreshing an existing one, Creative Code Palette Studio offers a calm, structured process: discovery, UX architecture, visual design, and careful implementation on modern stacks like React, Node.js, and Webflow. The result is a responsive, accessible interface where code, content, and color palette feel cohesive across every screen.
            </p>
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
    </PageLayout>
  );
}

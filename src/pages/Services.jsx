import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Card from "../common/Card";
import useSEO from "../hooks/useSEO";

export default function Services() {
  useSEO({
    title: "Web Design Services & Landing Pages",
    description:
      "Web design agency for US small businesses and startups. We build custom websites, landing pages, and modern product sites that are responsive and conversion-focused.",
    keywords: [
      "web design services",
      "web design agency",
      "landing page design",
      "custom website design",
      "modern web design",
      "website design for small business",
      "conversion-focused web design",
    ],
    canonicalPath: "/services",
  });

  const services = [
    {
      id: 1,
      title: "Web & Mobile Apps",
      description:
        "Full-stack web and mobile applications with React, Node.js, and modern frameworks. From concept to deployment, we build scalable, high-performance products.",
      features: [
        "Custom web applications",
        "REST & GraphQL APIs",
        "Real-time features",
        "Mobile-responsive design",
      ],
      icon: "🚀",
    },
    {
      id: 2,
      title: "Interactive Art & Creative Coding",
      description:
        "Animated, interactive experiences that blend code with artistry. Canvas animations, creative interactions, immersive storytelling through technology.",
      features: [
        "Canvas & WebGL animations",
        "Micro-interactions & transitions",
        "Creative code installations",
        "Framer Motion & advanced animations",
      ],
      icon: "🎨",
    },
    {
      id: 3,
      title: "Brand & Product Websites",
      description:
        "Beautiful, conversion-focused websites for creative studios, freelancers, and businesses. Clean design, fast performance, modern stack.",
      features: [
        "Landing pages",
        "Portfolio sites",
        "CMS integration (Sanity, Contentful)",
        "SEO optimization",
      ],
      icon: "✨",
    },
    {
      id: 4,
      title: "Design Systems & UI Libraries",
      description:
        "Reusable component libraries and design systems to accelerate your team's development. Built with accessibility and consistency in mind.",
      features: [
        "React component libraries",
        "Figma-to-code workflows",
        "Tailwind & custom styling",
        "Accessibility (WCAG)",
        "Living documentation",
      ],
      icon: "🎯",
    },
    {
      id: 5,
      title: "Maintenance & Support",
      description:
        "Ongoing support, bug fixes, feature updates, and performance optimization. Keep your digital product running smoothly and stay ahead of the curve.",
      features: [
        "Code reviews & refactoring",
        "Performance optimization",
        "Security updates",
        "Feature enhancements",
      ],
      icon: "🔧",
    },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-lavender-dark mb-4">
          Our Services
        </h1>
        <p className="text-lg text-sage-dark max-w-2xl mx-auto">
          Blending artistry with code to deliver digital solutions that inspire and perform.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-lavender-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-sage-dark mb-6">{service.description}</p>

                <ul className="space-y-2 text-sm text-sage">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lavender">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-lavender-dark mb-4">
          Ready to bring your idea to life?
        </h2>
        <p className="text-lg text-sage-dark mb-8 max-w-2xl mx-auto">
          Let's talk about your project. Whether you're starting from scratch or scaling an existing product, we're here to help.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-lavender-dark text-white rounded-lg font-semibold hover:bg-lavender transition"
        >
          Get a Quote
        </Link>
      </section>
    </PageLayout>
  );
}

import React from "react";
import PageLayout from "../layouts/PageLayout";
import ContactForm from "../components/ContactForm";
import useSEO from "../hooks/useSEO";

const CONTACT_EMAIL = "creative.code.palette@gmail.com";

export default function Contact() {
  useSEO({
    title: "Contact Our Web Design Agency",
    description:
      "Contact Creative Code Palette Studio for custom website design, landing pages, and small business web projects. Serving US-based clients with modern, responsive design.",
    keywords: [
      "contact web design agency",
      "web design services",
      "custom website design",
      "landing page design",
      "web design company USA",
    ],
    canonicalPath: "/contact",
  });

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-centered space-y-10">
          <div className="space-y-4 text-left">
            <h1 className="heading-md text-lavender-dark">
              Get in Touch
            </h1>
            <p className="text-lg leading-relaxed">
              We'd love to hear from you! Whether you have a question about our services, want to discuss a project, or simply want to say hello, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-sage-dark">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sage font-semibold mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-lavender-dark hover:text-lavender"
                    >
                      creative.code.palette
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-sage-dark">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

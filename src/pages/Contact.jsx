import React, { useState } from "react";
import PageLayout from "../layouts/PageLayout";

const CONTACT_EMAIL = "creative.code.palette@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `From: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage rounded-lg focus:outline-none focus:border-lavender-dark"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage rounded-lg focus:outline-none focus:border-lavender-dark"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-sage rounded-lg focus:outline-none focus:border-lavender-dark"
                />
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

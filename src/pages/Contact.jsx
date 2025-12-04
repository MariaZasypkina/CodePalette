import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_EMAIL = "creative.code.palette@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "✓ Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: `✗ Error: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="font-sans hero-gradient min-h-screen text-sage-dark">
        <Navbar />

        <div className="px-6 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lavender-dark hover:text-lavender"
          >
            <span className="text-xl leading-none">←</span>
            <span>Home</span>
          </Link>
        </div>

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
                  {status.message && (
                    <div
                      className={`p-3 rounded-lg text-sm ${
                        status.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

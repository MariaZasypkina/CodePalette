import React from "react";
import PageLayout from "../layouts/PageLayout";
import Button from "../components/Button";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Creative Code Palette",
    description:
      "The page you are looking for does not exist or was moved. Return to the Creative Code Palette Studio homepage.",
    canonicalPath: "/",
  });

  return (
    <PageLayout showBackLink={false}>
      <section className="section-padding">
        <div className="container-centered text-center space-y-6">
          <p className="heading-xl text-sage-dark">404</p>
          <h1 className="heading-md text-sage-dark">Page Not Found</h1>
          <p className="text-lg text-sage-dark max-w-2xl mx-auto">
            The page you are looking for does not exist or was moved. Check
            the address or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

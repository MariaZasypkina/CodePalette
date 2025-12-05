import React from "react";
import PageLayout from "../layouts/PageLayout";
import Quiz from "../components/Quiz";

export default function QuizPage() {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-centered">
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-lavender-light via-white to-sage-light p-8 rounded-2xl mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-lavender-dark mb-4">
              Not sure what kind of website you need?
            </h1>
            <p className="text-lg text-sage-dark max-w-2xl mx-auto mb-2">
              Take a quick quiz and get a tailored recommendation in under 30 seconds.
            </p>
            <p className="text-base text-sage font-semibold">
              Find the right website for your business: 6 quick questions.
            </p>
          </div>

          {/* Quiz Component */}
          <div className="max-w-5xl mx-auto">
            <Quiz />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

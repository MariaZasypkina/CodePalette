import React from "react";
import PageLayout from "../layouts/PageLayout";
import quizData from "../data/quizData.json";
import useSEO from "../hooks/useSEO";

export default function Pricing() {
  useSEO({
    title: "Web Design Pricing & Packages",
    description:
      "Transparent web design pricing for custom websites, landing pages, and small business sites. View starting costs and monthly estimates from Creative Code Palette Studio.",
    keywords: [
      "web design pricing",
      "website design cost",
      "landing page pricing",
      "custom website design",
      "web design services",
      "web design agency",
    ],
    canonicalPath: "/pricing",
  });

  const order = [
    "landing",
    "portfolio",
    "booking",
    "business",
    "education",
    "store",
    "custom",
  ];

  const rows = order
    .map((key) => {
      const data = quizData.results[key];
      return {
        key,
        title: data.title,
        oneTime: data.oneTimeCost,
        monthly: data.monthlyCost,
        subtitle: data.subtitle,
      };
    })
    .filter(Boolean);

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-centered max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="heading-md text-lavender-dark">Pricing & Starting Costs</h1>
            <p className="text-sage-dark mt-2">Estimated starting prices and typical monthly costs. Final quotes depend on scope.</p>
          </div>

          <div className="grid gap-6">
            {rows.map((r) => (
              <div key={r.key} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-lavender-dark">{r.title}</h3>
                    <p className="text-sage mt-1">{r.subtitle}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-sage font-semibold">Starting price</p>
                    <p className="text-2xl font-bold text-lavender-dark">{r.oneTime}</p>
                    <p className="text-sm text-sage mt-2">Monthly: {r.monthly}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

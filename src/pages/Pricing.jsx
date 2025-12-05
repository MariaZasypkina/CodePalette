import React from "react";
import PageLayout from "../layouts/PageLayout";
import quizData from "../data/quizData.json";

export default function Pricing() {
  // Parse cost for sorting: extract first number from string
  const parseCostValue = (costStr) => {
    if (!costStr) return Infinity;
    const match = costStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : Infinity;
  };

  const rows = Object.entries(quizData.results)
    .map(([key, data]) => ({
      key,
      title: data.title,
      oneTime: data.oneTimeCost,
      monthly: data.monthlyCost,
      subtitle: data.subtitle,
      sortValue: parseCostValue(data.oneTimeCost),
    }))
    .sort((a, b) => a.sortValue - b.sortValue);

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

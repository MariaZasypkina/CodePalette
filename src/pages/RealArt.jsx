import React from "react";
import PageLayout from "../layouts/PageLayout";

export default function RealArt() {
  return (
    <PageLayout>
      <div className="min-h-screen p-8 bg-white text-sage-dark">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-lavender-dark">Gallery of Our Artworks</h1>
          <p className="text-lg">Coming soon: Browse and purchase our paintings and digital art!</p>
        </div>
      </div>
    </PageLayout>
  );
}

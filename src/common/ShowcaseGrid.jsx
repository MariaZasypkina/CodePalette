import React from "react";
import ShowcaseItem from "./ShowcaseItem";

export default function ShowcaseGrid({ items, posterImage }) {
  return (
    <section className="space-y-4 px-8">
      <h2 className="text-3xl font-bold text-sage-dark">
        Screens &amp; Demo
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <ShowcaseItem
            key={item.title}
            item={item}
            posterImage={posterImage}
          />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import Card from "./Card";

export default function InfoGrid({ sections }) {
  const gridClass = sections.length === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2";

  return (
    <section className={`grid gap-8 px-8 ${gridClass}`}>
      {sections.map((section, idx) => (
        <Card key={idx}>
          <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
            {section.title}
          </h2>
          {section.description && (
            <p className="mb-4">{section.description}</p>
          )}
          {section.items && (
            <ul className="space-y-3 list-disc list-inside">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {typeof item === "string" ? (
                    <span>{item}</span>
                  ) : (
                    <>
                      <span className="font-semibold">{item.label}:</span>{" "}
                      {item.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
          {section.listItems && (
            <ul className="space-y-2 list-disc list-inside">
              {section.listItems.map((item, itemIdx) => (
                <li key={itemIdx} className="text-sm text-sage">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </section>
  );
}

import React from "react";
import PageLayout from "./PageLayout";
import ShowcaseGrid from "../common/ShowcaseGrid";
import InfoGrid from "../common/InfoGrid";
import Card from "../common/Card";

export default function ProjectPageTemplate({
  title,
  subtitle,
  description,
  descriptionExtra,
  showcaseItems,
  posterImage,
  whatItDoes,
  frontendOverview,
  backendOverview,
  techStack,
  whatDemonstrates,
  teamImg,
  githubLink,
}) {
  return (
    <PageLayout>
      <div className="min-h-screen p-8 bg-white text-sage-dark">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-lavender">
              {subtitle}
            </p>
            <h1 className="text-4xl font-bold text-lavender-dark">{title}</h1>
            <p className="text-lg">{description}</p>
            {descriptionExtra && <p className="text-lg">{descriptionExtra}</p>}
          </header>

          {/* Showcase Grid */}
          {showcaseItems && (
            <ShowcaseGrid items={showcaseItems} posterImage={posterImage} />
          )}

          {/* Info Grids */}
          {(whatItDoes || frontendOverview) && (
            <InfoGrid
              sections={[
                ...(whatItDoes ? [whatItDoes] : []),
                ...(frontendOverview ? [frontendOverview] : []),
              ]}
            />
          )}

          {(backendOverview || techStack) && (
            <InfoGrid
              sections={[
                ...(backendOverview ? [backendOverview] : []),
                ...(techStack ? [techStack] : []),
              ]}
            />
          )}

          {/* What This Demonstrates */}
          {whatDemonstrates && (
            <Card>
              <h2 className="text-2xl font-semibold text-lavender-dark mb-3">
                {whatDemonstrates.title}
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                {whatDemonstrates.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        {/* Team and GitHub */}
        {(teamImg || githubLink) && (
          <div className="max-w-5xl mx-auto mt-12">
            {teamImg && (
              <img
                src={teamImg}
                alt="Project team"
                className="w-full rounded-2xl shadow-md"
              />
            )}
            {githubLink && (
              <div className="mt-6 text-center">
                <a
                  href={githubLink}
                  className="text-lavender-dark hover:text-lavender underline"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

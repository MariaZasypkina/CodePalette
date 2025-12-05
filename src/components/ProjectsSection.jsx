import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
import playWinThumb from "../assets/projects/play-and-win.png";
import kindNetImg from "../assets/projects/kindnet.png";
import artHiveImg from "../assets/projects/arthive.png";
import fencingImg from "../assets/projects/fencing.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "ARTHIVE: a creative community with weekly artistic challenges",
      description:
        "A creative sanctuary where artists discover inspiration through weekly challenges and meaningful community connections",
      github: "https://github.com/MariaZasypkina/ArtHive.git",
      details: "/arthive",
      image: artHiveImg,
    },
    {
      id: 2,
      title: "KindNet. The easiest way to support your local community",
      description:
        "Project to help people find needed goods and services. Map, ZIP lookup and advanced search.",
      github: "https://github.com/MariaZasypkina/KindNet.git",
      details: "/kindnet",
      image: kindNetImg,
    },
    {
      id: 3,
      title: "Play & Win: Discount Arcade Game",
      description:
        "A playful arcade mini-game where visitors cross the road, avoid crocos, collect coins and win a random discount on web design & development services.",
      image: playWinThumb,
      github: "https://github.com/MariaZasypkina/cross-the-road-game.git",
      details: "/play-and-win",
    },
    {
      id: 4,
      title: "Youth Fencing Team Support Page",
      description:
        "This project is created to help to raise funds for the youth Denver Fencing Team",
      github: "https://github.com/MariaZasypkina/FencingNonProfit.git",
      details: "/fencing",
      image: fencingImg,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 text-sage-dark">
      <div className="max-w-5xl mx-auto">
        {/* Clickable Quiz Banner placed above projects title */}
        <Link to="/quiz" className="block mb-12">
          <div className="bg-gradient-to-br from-lavender-light via-white to-sage-light p-6 rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl md:text-3xl font-bold text-lavender-dark mb-2">
              Not sure what kind of website you need?
            </h3>
            <p className="text-sage-dark max-w-2xl mx-auto">
              Take a quick quiz and get a tailored recommendation in under 30 seconds.
            </p>
          </div>
        </Link>

        <h2 className="text-3xl font-semibold mb-8 text-lavender-dark">
          Favorite Projects of Our Studio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id}>
              {project.image && (
                <Link to={project.details}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 shadow-md hover:shadow-lg transition-shadow"
                  />
                </Link>
              )}

              <h3 className="text-xl font-semibold mb-2 text-lavender-dark">
                {project.title}
              </h3>

              <p className="mb-4">{project.description}</p>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-lavender-dark hover:text-lavender underline"
                  >
                    GitHub
                  </a>
                )}
                {project.details && (
                  <a
                    href={project.details}
                    className="text-lavender-dark hover:text-lavender underline"
                  >
                    Details
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

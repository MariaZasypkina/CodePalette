import React from "react";
import playWinThumb from "../assets/projects/play-and-win.png";
import kindNetImg from "../assets/projects/kindnet.png";
import artHiveImg from "../assets/projects/arthive.png";
import fencingImg from "../assets/projects/fencing.png";
import { Link } from "react-router-dom";

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
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          FAVORITE PROJECTS OF OUR STUDIO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white flex flex-col"
            >
              {project.image && (
                <Link to={project.details}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 shadow-md hover:shadow-lg transition-shadow"
                  />
                </Link>
              )}

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex gap-4 mt-auto">
                {/* only current links */}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.details && (
                  <a
                    href={project.details}
                    className="text-blue-600 hover:underline"
                  >
                    Details
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

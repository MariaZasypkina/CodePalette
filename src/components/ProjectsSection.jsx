import React from "react";
import playWinThumb from "../assets/projects/play-and-win.png"; // <-- твой скрин игры

export default function ProjectsSection() {
  // четыре проекта, из которых третий — игра
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description:
        "Short project description goes here. A sentence or two about what it does.",
      github: "#",
      live: "#",
      details: "/projects/1",
    },
    {
      id: 2,
      title: "Project Title 2",
      description:
        "Short project description goes here. A sentence or two about what it does.",
      github: "#",
      live: "#",
      details: "/projects/2",
    },
    {
      id: 3,
      title: "Play & Win: Discount Arcade Game",
      description:
        "A playful arcade mini-game where visitors cross the road, avoid crocos, collect coins and win a random discount on web design & development services.",
      image: playWinThumb,
      github: "https://github.com/MariaZasypkina/cross-the-road-game.git",
      live: "/play-and-win",
      details: "/play-and-win",
    },
    {
      id: 4,
      title: "Project Title 4",
      description:
        "Short project description goes here. A sentence or two about what it does.",
      github: "#",
      live: "#",
      details: "/projects/4",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white flex flex-col"
            >
              {/* Если есть скрин — показываем */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 shadow-md"
                />
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
                {project.live && (
                  <a
                    href={project.live}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
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

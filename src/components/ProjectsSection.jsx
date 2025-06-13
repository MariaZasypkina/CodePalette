import React from "react"

export default function ProjectsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-2xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
              <p className="text-gray-600 mb-4">Short project description goes here. A sentence or two about what it does.</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                <a href="#" className="text-blue-600 hover:underline">Live Demo</a>
                <a href={`/projects/${i}`} className="text-blue-600 hover:underline">Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
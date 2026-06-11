// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="pt-24 mx-auto max-w-6xl px-4 pb-16 space-y-8">
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold">Portafolio</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Una selección de proyectos donde combinamos diseño simple, desarrollo
          moderno y automatización.
        </p>
      </section>

      <div className="flex flex-wrap gap-2 text-xs">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              activeFilter === f
                ? 'bg-lan-primary text-slate-50 border-lan-primary'
                : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

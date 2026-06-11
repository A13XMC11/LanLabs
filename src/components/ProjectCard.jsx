// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="card flex flex-col p-5 gap-3"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {project.img ? (
        <img
          src={project.img}
          alt={project.title}
          className="mb-3 w-full h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="mb-3 flex h-40 w-full items-end rounded-lg bg-gradient-to-br from-lan-primary via-lan-secondary to-slate-900 p-4 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
              {project.category}
            </p>
            <p className="mt-1 text-xl font-bold">{project.title}</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-lan-soft/20 text-lan-primary dark:bg-slate-800 dark:text-lan-accent">
          {project.category}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Stack: {project.stack.join(', ')}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Impacto: {project.impact}
      </p>
      {project.url && project.url !== '#' && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex text-sm text-lan-secondary hover:text-lan-accent"
        >
          Ver proyecto →
        </a>
      )}
    </motion.article>
  );
}

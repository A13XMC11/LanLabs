// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';

export default function Home() {
  const topServices = services.slice(0, 3);
  const topProjects = projects.slice(0, 3);

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-lan-secondary">
            LANLABS • WEB • AUTOMATIZACIÓN
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Crea, gestiona y automatiza.{' '}
            <span className="text-lan-secondary dark:text-lan-accent">
              Así de fácil, así de LanLabs.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Sitios modernos, flujos con n8n y procesos automáticos para que la
            tecnología trabaje por ti mientras tú te ocupas de lo importante.
          </p>

          <div className="flex flex-wrap gap-3">
            <CTAButton size="lg" />
            <Link
              to="/portafolio"
              className="inline-flex items-center px-5 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Ver Portafolio →
            </Link>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            “La tecnología amigable que se adapta a ti”, con un toque de humor y
            cero dramas técnicos.
          </p>
        </motion.div>

        {/* Visual simple con gradiente y “bloques” tipo dashboard */}
        <motion.div
          className="relative h-72 md:h-80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-lan-primary via-lan-secondary to-lan-accent opacity-80 shadow-soft-lg" />

          <div className="absolute inset-4 rounded-[1.75rem] bg-slate-950/10 dark:bg-black/30 backdrop-blur-md border border-slate-100/40 dark:border-slate-700/60 p-4 flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div className="h-2 w-2 rounded-full bg-yellow-300" />
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="card bg-slate-900/70 border-slate-700/60 text-slate-100 p-3 flex flex-col gap-1">
                <span className="text-xs text-slate-400">Dashboard</span>
                <span className="text-sm font-semibold">Control Vehicular</span>
                <div className="mt-2 h-16 rounded-xl bg-slate-800/80" />
              </div>
              <div className="card bg-slate-900/70 border-slate-700/60 text-slate-100 p-3 flex flex-col gap-1">
                <span className="text-xs text-slate-400">Flujo n8n</span>
                <span className="text-sm font-semibold">Reportes diarios</span>
                <div className="mt-2 h-16 rounded-xl bg-slate-800/80" />
              </div>
              <div className="col-span-2 card bg-slate-900/70 border-slate-700/60 text-slate-100 p-3 flex items-center justify-between">
                <span className="text-xs text-slate-300">
                  Tareas automatizadas
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/90 text-slate-900 font-semibold">
                  ON
                </span>
              </div>
            </div>

            <p className="text-[10px] text-slate-100/80 text-right">
              LanLabs • web + automatización
            </p>
          </div>
        </motion.div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Servicios</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              De la idea al flujo automatizado, paso a paso.
            </p>
          </div>
          <Link
            to="/servicios"
            className="text-sm text-lan-secondary hover:text-lan-accent"
          >
            Ver todos los servicios →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {topServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Portafolio resumen */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Proyectos recientes</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Casos reales donde la tecnología se volvió aliada.
            </p>
          </div>
          <Link
            to="/portafolio"
            className="text-sm text-lan-secondary hover:text-lan-accent"
          >
            Ver portafolio completo →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {topProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <h2 className="text-2xl font-bold">Lo que dicen los clientes</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              ¿Listo para que la tecnología trabaje por ti?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Cuéntanos qué quieres lograr y te proponemos una ruta clara:
              página web, flujo con n8n o ambas. Sin tecnicismos raros.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <CTAButton />
            <div className="flex gap-3 text-xs text-slate-500 dark:text-slate-400">
              <a
                href="https://t.me/alexander_mc11"
                target="_blank"
                rel="noreferrer"
              >
                Escríbenos por Telegram
              </a>
              <span>•</span>
              <a
                href="https://instagram.com/s2.h0_?igsh=MW42NDd1NzJ2a3FpZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

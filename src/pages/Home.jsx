// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton.jsx';
import StatsBar from '../components/StatsBar.jsx';
import BotDemo from '../components/BotDemo.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';
import { FaCircle } from 'react-icons/fa';

export default function Home() {
  // Show bot (id:1), automatización (id:2), web (id:4)
  const topServices = [
    services.find(s => s.id === 1),
    services.find(s => s.id === 2),
    services.find(s => s.id === 4),
  ];
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
            LANLABS • IA • AUTOMATIZACIÓN • WEB
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Automatiza tu negocio con IA.{' '}
            <span className="text-lan-secondary dark:text-lan-accent">
              Más ventas, menos trabajo manual.
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Bots de WhatsApp, flujos inteligentes y páginas que convierten. Para emprendedores que quieren que la tecnología trabaje por ellos.
          </p>

          <div className="flex flex-wrap gap-3">
            <CTAButton size="lg">Quiero automatizar mi negocio</CTAButton>
            <Link
              to="/servicios"
              className="inline-flex items-center px-5 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Ver servicios →
            </Link>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 space-x-4">
            <span className="inline-flex items-center gap-1">✓ Sin contrato largo</span>
            <span className="inline-flex items-center gap-1">✓ Resultados en días</span>
            <span className="inline-flex items-center gap-1">✓ Soporte incluido</span>
          </p>
        </motion.div>

        {/* Visual: Mini Chat Mockup */}
        <motion.div
          className="relative h-72 md:h-80"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-lan-primary via-lan-secondary to-lan-accent opacity-80 shadow-soft-lg" />

          <div className="absolute inset-4 rounded-[1.75rem] bg-slate-950/10 dark:bg-black/30 backdrop-blur-md border border-slate-100/40 dark:border-slate-700/60 p-4 flex flex-col gap-3">
            {/* Chat Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaCircle className="w-2 h-2 text-lan-bot animate-pulse" />
                <span className="text-xs font-medium text-slate-100">Bot activo 24/7</span>
              </div>
            </div>

            {/* Chat Bubbles */}
            <div className="flex-1 flex flex-col gap-3 justify-center">
              <div className="bg-white/90 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-slate-900 dark:text-slate-100 max-w-[80%]">
                ¡Hola! ¿En qué puedo ayudarte?
              </div>
              <div className="bg-lan-primary text-slate-50 dark:text-slate-50 rounded-2xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%] self-end">
                Quiero info de precios
              </div>
              <div className="bg-white/90 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-slate-900 dark:text-slate-100 max-w-[80%]">
                Con gusto 😊 Te cuento...
              </div>
            </div>

            <p className="text-[10px] text-slate-100/80 text-right font-medium">
              Powered by IA
            </p>
          </div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <StatsBar />

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Nuestros servicios</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Desde bots con IA hasta páginas web que convierten.
            </p>
          </div>
          <Link
            to="/servicios"
            className="text-sm text-lan-secondary hover:text-lan-accent"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {topServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              flagship={service.flagship}
              features={service.features}
              ctaMessage={service.ctaMessage}
            />
          ))}
        </div>
      </section>

      {/* BOT DEMO */}
      <BotDemo />

      {/* Portafolio resumen */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold">Proyectos recientes</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Proyectos reales de web, automatización e IA.
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
        <div className="grid gap-5 md:grid-cols-2">
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
              ¿Listo para que tu negocio trabaje solo mientras tú duermes?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Cuéntanos tu negocio y te mostramos qué se puede automatizar. Sin tecnicismos, sin contratos raros.
            </p>
          </div>
          <CTAButton size="lg">Hablar con LanLabs por WhatsApp</CTAButton>
        </div>
      </section>
    </div>
  );
}

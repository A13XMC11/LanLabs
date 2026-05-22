// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import StatsBar from '../components/StatsBar.jsx';
import BotDemo from '../components/BotDemo.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';
import { FaCheckCircle } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// Show bot (id:1), automatización (id:2), web (id:4)
const topServices = [
  services.find((s) => s.id === 1),
  services.find((s) => s.id === 2),
  services.find((s) => s.id === 4),
];
const topProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — scroll-driven video
      ═══════════════════════════════════════════════════════════════ */}
      <HeroVideo />

      {/* ═══════════════════════════════════════════════════════════════
          STATS — dark band, animated numbers
      ═══════════════════════════════════════════════════════════════ */}
      <StatsBar />

      {/* ═══════════════════════════════════════════════════════════════
          SERVICIOS
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10"
        aria-labelledby="servicios-heading"
      >
        {/* Section header */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-lan-secondary">
            Lo que hacemos
          </span>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              id="servicios-heading"
              className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100"
            >
              Soluciones que generan<br className="hidden sm:block" /> resultados reales
            </h2>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-lan-secondary dark:text-lan-accent
                         hover:text-lan-primary dark:hover:text-white transition-colors cursor-pointer"
            >
              Ver todos los servicios
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
            Desde bots inteligentes hasta páginas que convierten. Elige lo que necesitas,
            combínalos, o déjanos recomendar la mejor solución para tu negocio.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {topServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              flagship={service.flagship}
              features={service.features}
              ctaMessage={service.ctaMessage}
              metric={service.metric}
              iconType={service.iconType}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOT DEMO — existing component, light background
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-slate-50/80 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
        <BotDemo />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PORTAFOLIO
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10"
        aria-labelledby="portfolio-heading"
      >
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-lan-secondary">
            Casos reales
          </span>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2
              id="portfolio-heading"
              className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100"
            >
              Proyectos que ya<br className="hidden sm:block" /> están generando valor
            </h2>
            <Link
              to="/portafolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-lan-secondary dark:text-lan-accent
                         hover:text-lan-primary dark:hover:text-white transition-colors cursor-pointer"
            >
              Ver portafolio completo
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            Proyectos reales de web, automatización e IA — con resultados documentados.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {topProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIOS
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="bg-slate-50 dark:bg-slate-900/60
                   border-y border-slate-200/60 dark:border-slate-800/60"
        aria-labelledby="testimonios-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-lan-secondary">
              Clientes que confían
            </span>
            <h2
              id="testimonios-heading"
              className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100"
            >
              Lo que dicen quienes<br className="hidden sm:block" /> ya trabajan con nosotros
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA FINAL — dark premium section
      ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-lan-dark"
        aria-label="Llamada a la acción final"
      >
        {/* Background orbs */}
        <div className="hero-orb w-80 h-80 top-[-60px] left-[-60px]
                        bg-lan-secondary/15 opacity-50" />
        <div className="hero-orb w-60 h-60 bottom-[-40px] right-[-40px]
                        bg-lan-ai/10 opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-lan-secondary/40 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center space-y-8">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                             bg-lan-secondary/15 border border-lan-secondary/30
                             text-lan-accent text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-lan-bot animate-pulse" />
              Siguiente paso
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              ¿Listo para que tu negocio<br />
              <span className="text-gradient-blue">trabaje mientras tú duermes?</span>
            </h2>

            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Cuéntanos tu negocio en 5 minutos y te mostramos exactamente
              qué se puede automatizar. Sin tecnicismos, sin contratos raros,
              sin presiones.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <CTAButton size="lg">
              Hablar con LanLabs por WhatsApp
            </CTAButton>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         border border-slate-600 text-slate-300 text-sm font-medium
                         hover:border-slate-400 hover:text-white transition-all cursor-pointer"
            >
              Explorar servicios primero
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 text-xs pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {['Respuesta en minutos', 'Sin compromisos', 'Proyectos desde $300', '100% online'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <FaCheckCircle className="text-lan-bot w-3 h-3" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

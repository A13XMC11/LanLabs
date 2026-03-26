// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <main className="pt-24 mx-auto max-w-6xl px-4 pb-16 space-y-14">
      {/* Intro Section */}
      <section className="space-y-4 max-w-3xl">
        <span className="badge-ai">Automatización · IA · Web</span>
        <h1 className="text-4xl md:text-5xl font-bold">
          Soluciones que generan resultados
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Elige el servicio que necesitas o combínalos. Adaptable a cualquier presupuesto, enfocado en que ganes más y trabajes menos.
        </p>
      </section>

      {/* Para quién es LanLabs - Personas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">¿Para quién es LanLabs?</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: 'Emprendedores', desc: 'Quieres más clientes sin trabajar más horas' },
            { title: 'Negocios locales', desc: 'Tienes procesos manuales que roban tu tiempo' },
            { title: 'Freelancers/Agencias', desc: 'Quieres ofrecer más sin contratar más' },
          ].map((persona, idx) => (
            <motion.div
              key={idx}
              className="card p-6 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-lan-primary dark:text-lan-accent">
                {persona.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {persona.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Nuestros servicios</h2>

        {/* Flagship Bot Service - Full Width */}
        <div>
          <ServiceCard
            key={services[0].id}
            title={services[0].title}
            description={services[0].description}
            flagship={services[0].flagship}
            features={services[0].features}
            ctaMessage={services[0].ctaMessage}
          />
        </div>

        {/* Remaining 5 Services - 2 Column Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(1).map((service) => (
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

      {/* Process Section */}
      <section className="card p-8 space-y-6">
        <h2 className="text-2xl font-bold">Nuestro proceso</h2>
        <div className="process-grid text-sm">
          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">1. Reunión de descubrimiento</h3>
            <p className="process-card-body">
              Hablamos de tu negocio, tus problemas y tus objetivos para entender bien el contexto.
            </p>
          </article>

          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">2. Propuesta y roadmap</h3>
            <p className="process-card-body">
              Definimos alcance, prioridades, tiempos y costos de forma clara y sin sorpresas.
            </p>
          </article>

          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">3. Diseño y desarrollo</h3>
            <p className="process-card-body">
              Creamos la web y los flujos en iteraciones pequeñas, probables y fáciles de revisar.
            </p>
          </article>

          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">4. Lanza, mide y escala</h3>
            <p className="process-card-body">
              Entregamos, medimos resultados y hacemos ajustes para que el sistema mejore solo.
            </p>
          </article>
        </div>
        <CTAButton className="mt-2" />
      </section>
    </main>
  );
}

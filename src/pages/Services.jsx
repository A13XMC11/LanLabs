// src/pages/Services.jsx
import React from 'react';
import CTAButton from '../components/CTAButton.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <main className="pt-24 mx-auto max-w-6xl px-4 pb-16 space-y-10">
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-3xl font-bold">Servicios</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Un catálogo pensado para que elijas solo lo que necesitas:
          desarrollo web, páginas dinámicas, automatizaciones con n8n e
          integraciones.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="card p-6 space-y-2">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {service.description}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Categoría: {service.category}
            </p>
          </article>
        ))}
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Nuestro proceso</h2>
        <div className="process-grid text-sm">
          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">1. Reunión de descubrimiento</h3>
            <p className="process-card-body">
              Hablamos de tu negocio, tus problemas y tus objetivos para entender
              bien el contexto.
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
              Definimos alcance, prioridades, tiempos y costos de forma clara y
              sin sorpresas.
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
              Creamos la web y los flujos en iteraciones pequeñas, probables y
              fáciles de revisar.
            </p>
          </article>

          <article className="process-card">
            <div className="process-align">
              <span className="process-dot red" />
              <span className="process-dot yellow" />
              <span className="process-dot green" />
            </div>
            <h3 className="process-card-title">4. Automatiza y evoluciona</h3>
            <p className="process-card-body">
              Conectamos n8n, configuramos reportes y dejamos todo documentado
              para que puedas seguir creciendo.
            </p>
          </article>
        </div>
        <CTAButton className="mt-2" />
      </section>
    </main>
  );
}

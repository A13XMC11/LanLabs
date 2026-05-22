// src/pages/About.jsx
import React from 'react';
import Logo from '../../img/Logo.PNG';
import CafeWeb from '../../img/cafe_web.png';
import Fiabilidad from '../../img/fiabilidad.png';
import { FaReact, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiN8N, SiSqlite, SiSupabase } from 'react-icons/si';
import { TbApi, TbWebhook } from 'react-icons/tb';
import { RiRobot2Line } from 'react-icons/ri';

export default function About() {
  return (
    <main className="pt-24 mx-auto max-w-4xl px-4 pb-16 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Sobre LanLabs</h1>
        <div className="pt-4 flex items-center justify-center">
          <img
            src={Logo}
            alt="Logo LanLabs"
            className="h-48 w-auto drop-shadow-md"
          />
        </div>
        <p className="text-slate-600 dark:text-slate-300">
          LanLabs es un estudio digital especializado en automatización con inteligencia artificial. Creamos bots de WhatsApp, asistentes IA, flujos automáticos y sitios web para emprendedores y negocios que quieren crecer sin trabajar más horas.
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          Nuestro nombre refleja lo que somos: un laboratorio relajado y cercano, donde experimentar es parte del proceso. "Lan" representa esa filosofía de trabajar con inteligencia, evitando la fricción y las complicaciones; "Labs" recuerda que cada proyecto es un espacio de prueba, mejora y aprendizaje continuo.
        </p>
      </section>

      {/* Misión callout */}
      <div className="card p-6 border-l-4 border-lan-secondary space-y-2">
        <span className="badge-ai">Misión</span>
        <p className="text-lg font-semibold">
          "Hacer que la tecnología trabaje por ti, no al revés."
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Soluciones adaptables — económicas o avanzadas — enfocadas en generar ingresos, optimizar procesos y reducir trabajo manual.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="card p-6 space-y-3">
          <div className="w-full flex justify-center">
            <img
              src={CafeWeb}
              alt="Ilustración de trabajo en LanLabs"
              className="max-h-40 w-auto rounded-xl object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold">Cómo trabajamos</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Empezamos escuchando: entendemos tu negocio, tus dolores actuales y lo que realmente quieres lograr. A partir de ahí, proponemos un camino viable, con entregas claras y funcionales que puedas ver y probar rápido.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Hoy nos especializamos en automatización con inteligencia artificial: bots de WhatsApp, asistentes IA y flujos con n8n para que tus procesos funcionen solos. Construimos lo que tu negocio necesita para escalar sin esclavizarte al trabajo manual.
          </p>
        </article>

        <article className="card p-6 space-y-3">
          <div className="w-full flex justify-center">
            <img
              src={Fiabilidad}
              alt="Ilustración de valores en LanLabs"
              className="max-h-40 w-auto rounded-xl object-contain"
            />
          </div>
          <h2 className="text-xl font-semibold">Nuestros valores</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>
              <strong>Claridad:</strong> explicamos sin lenguaje raro para que entiendas qué hacemos, cómo lo hacemos y qué resultado puedes esperar.
            </li>
            <li>
              <strong>Eficiencia:</strong> simplificamos procesos, reducimos tareas repetitivas y dejamos que la tecnología trabaje por ti.
            </li>
            <li>
              <strong>Cercanía:</strong> escuchamos primero, proponemos después y construimos a tu lado con un trato transparente.
            </li>
            <li>
              <strong>Humor sutil:</strong> creemos que incluso los proyectos complejos se llevan mejor con un toque de buen humor.
            </li>
          </ul>
        </article>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Nuestro stack</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Usamos herramientas modernas y confiables para que tu proyecto esté listo para crecer:
        </p>
        <ul className="stack-icons">
          {[
            { name: 'React',       key: 'react',    label: 'React',        icon: FaReact,       color: 'text-sky-400' },
            { name: 'Tailwind',    key: 'tailwind', label: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'Vercel',      key: 'vercel',   label: 'Vercel',       icon: SiVercel,      color: 'text-slate-600 dark:text-slate-300' },
            { name: 'n8n',         key: 'n8n',      label: 'n8n',          icon: SiN8N,         color: 'text-rose-400' },
            { name: 'APIs REST',   key: 'apis',     label: 'APIs REST',    icon: TbApi,         color: 'text-emerald-500' },
            { name: 'Webhooks',    key: 'webhooks', label: 'Webhooks',     icon: TbWebhook,     color: 'text-indigo-400' },
            { name: 'SQLite',      key: 'sqlite',   label: 'SQLite / SQL', icon: SiSqlite,      color: 'text-amber-400' },
            { name: 'GitHub',      key: 'github',   label: 'GitHub',       icon: FaGithub,      color: 'text-slate-600 dark:text-slate-300' },
            { name: 'Claude AI',   key: 'claude',   label: 'Claude AI',    icon: RiRobot2Line,  color: 'text-violet-500' },
            { name: 'Supabase',    key: 'supabase', label: 'Supabase',     icon: SiSupabase,    color: 'text-emerald-400' },
            { name: 'WhatsApp',    key: 'whatsapp', label: 'WhatsApp API', icon: FaWhatsapp,    color: 'text-green-500' },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <li key={tool.name} className={`stack-icon stack-${tool.key}`}>
                <div className="stack-icon-inner">
                  <Icon className={`stack-icon-badge ${tool.color}`} />
                </div>
                <span className="stack-icon-label">{tool.label}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

// src/pages/About.jsx
import React from 'react';
import Logo from '../../img/Logo.PNG';
import CafeWeb from '../../img/cafe_web.png';
import Fiabilidad from '../../img/fiabilidad.png';
import { FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiN8N, SiSqlite } from 'react-icons/si';
import { TbApi, TbWebhook } from 'react-icons/tb';

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
          LanLabs nace como un estudio digital que combina simplicidad,
          creatividad y el poder de la inteligencia artificial para acompañar a
          personas y negocios en su transformación digital, sin estrés ni
          tecnicismos innecesarios.
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          Nuestro nombre refleja lo que somos: un laboratorio relajado y
          cercano, donde experimentar es parte del proceso. "Lan" representa
          esa filosofía de trabajar con inteligencia, evitando la fricción y las
          complicaciones; "Labs" recuerda que cada proyecto es un espacio de
          prueba, mejora y aprendizaje continuo.
        </p>
      </section>

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
            Empezamos escuchando: entendemos tu negocio, tus dolores actuales y
            lo que realmente quieres lograr. A partir de ahí, proponemos un
            camino viable, con entregas claras y funcionales que puedas ver y
            probar rápido.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Diseñamos y desarrollamos sitios web modernos, claros y enfocados en
            resultados, pero vamos más allá de una página bonita. Nos
            especializamos en páginas dinámicas y automatizaciones con n8n para
            que puedas gestionar información, generar reportes automáticos y
            ordenar procesos que antes eran un dolor de cabeza.
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
              <strong>Claridad:</strong> explicamos sin lenguaje raro para que
              entiendas qué hacemos, cómo lo hacemos y qué resultado puedes
              esperar.
            </li>
            <li>
              <strong>Eficiencia:</strong> simplificamos procesos, reducimos
              tareas repetitivas y dejamos que la tecnología trabaje por ti.
            </li>
            <li>
              <strong>Cercanía:</strong> escuchamos primero, proponemos después
              y construimos a tu lado con un trato transparente.
            </li>
            <li>
              <strong>Humor sutil:</strong> creemos que incluso los proyectos
              complejos se llevan mejor con un toque de buen humor.
            </li>
          </ul>
        </article>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Nuestro stack</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Usamos herramientas modernas y confiables para que tu proyecto esté
          listo para crecer:
        </p>
        <ul className="stack-icons">
          {[
            { name: 'React', key: 'react', label: 'React', icon: FaReact, color: 'text-sky-400' },
            { name: 'Tailwind', key: 'tailwind', label: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
            { name: 'Vercel', key: 'vercel', label: 'Vercel', icon: SiVercel, color: 'text-slate-100' },
            { name: 'n8n', key: 'n8n', label: 'n8n', icon: SiN8N, color: 'text-rose-400' },
            { name: 'APIs REST', key: 'apis', label: 'APIs REST', icon: TbApi, color: 'text-emerald-400' },
            { name: 'Webhooks', key: 'webhooks', label: 'Webhooks', icon: TbWebhook, color: 'text-indigo-400' },
            { name: 'SQLite / SQL', key: 'sqlite', label: 'SQLite / SQL', icon: SiSqlite, color: 'text-amber-400' },
            { name: 'GitHub', key: 'github', label: 'GitHub', icon: FaGithub, color: 'text-slate-100' },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <li key={tool.name} className="stack-icon flex flex-col items-center">
                <div className={`stack-icon-inner stack-${tool.key}`} data-label={tool.label}>
                  <Icon className={`h-6 w-6 stack-icon-badge ${tool.color}`} />
                </div>
                <span className="mt-1 text-[0.7rem] text-slate-500 dark:text-slate-400">
                  {tool.label}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

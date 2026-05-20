// src/pages/Planes.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoSearchOutline,
  IoLayersOutline,
  IoCubeOutline,
  IoHeadsetOutline,
  IoDocumentTextOutline,
  IoPricetagOutline,
} from 'react-icons/io5';
import PlanCard from '../components/PlanCard.jsx';
import { getWhatsAppLink } from '../components/CTAButton.jsx';

const PLANS = [
  {
    id: 'basico',
    name: 'Plan Básico',
    priceRange: '$350 – $500',
    description: 'Ideal para emprendedores que necesitan presencia digital rápida y profesional.',
    badge: null,
    highlighted: false,
    ctaMessage: 'Hola LanLabs 👋 Me interesa el Plan Básico de desarrollo web ($350–500).',
    features: [
      '3 a 5 páginas personalizadas',
      'SEO básico (meta tags, velocidad)',
      'Formulario de contacto',
      'Diseño responsive (mobile + desktop)',
      'Dominio y hosting orientado',
    ],
  },
  {
    id: 'profesional',
    name: 'Plan Profesional',
    priceRange: '$800 – $1,200',
    description: 'Para negocios que quieren crecer con contenido, posicionamiento y gestión propia.',
    badge: '⭐ Más popular',
    highlighted: true,
    ctaMessage: 'Hola LanLabs 👋 Me interesa el Plan Profesional de desarrollo web ($800–1,200).',
    features: [
      'Hasta 15 páginas + blog',
      'SEO avanzado + sitemap automático',
      'Formularios dinámicos',
      'Integración redes sociales',
    ],
  },
  {
    id: 'avanzado',
    name: 'Plan Avanzado',
    priceRange: '$1,800 – $3,000',
    description: 'Solución completa con ecommerce, pagos en línea e integraciones de negocio.',
    badge: null,
    highlighted: false,
    ctaMessage: 'Hola LanLabs 👋 Me interesa el Plan Avanzado de desarrollo web ($1,800–3,000).',
    features: [
      'Tienda online (ecommerce)',
      'Pasarela de pagos integrada',
      'Dashboard de pedidos/clientes',
      'SEO técnico completo',
      'Soporte 30 días post-lanzamiento',
    ],
  },
  {
    id: 'premium3d',
    name: 'Plan Premium 3D',
    priceRange: '$3,500 – $6,000+',
    description: 'Experiencias web de alto impacto con WebGL, animaciones avanzadas y soporte prioritario.',
    badge: 'Nuevo',
    highlighted: false,
    ctaMessage: 'Hola LanLabs 👋 Me interesa el Plan Premium 3D ($3,500+).',
    features: [
      'Escenas 3D con WebGL / Three.js',
      'Animaciones avanzadas (GSAP)',
      'Todo lo del Plan Avanzado',
      'Soporte prioritario (SLA)',
      'Capacitación y documentación',
      'Optimización de rendimiento 3D',
    ],
  },
];

const FEATURES_COMPARISON = [
  { label: 'Número de páginas', basico: '3 – 5', pro: 'Hasta 15', avanzado: 'Sin límite', premium: 'Sin límite' },
  { label: 'SEO', basico: 'Básico', pro: 'Avanzado', avanzado: 'Técnico completo', premium: 'Técnico completo' },
  { label: 'Formulario de contacto', basico: true, pro: true, avanzado: true, premium: true },
  { label: 'Blog / CMS', basico: false, pro: true, avanzado: true, premium: true },
  { label: 'Ecommerce', basico: false, pro: false, avanzado: true, premium: true },
  { label: 'Pasarela de pagos', basico: false, pro: false, avanzado: true, premium: true },
  { label: 'Integración CRM / APIs', basico: false, pro: false, avanzado: true, premium: true },
  { label: 'Animaciones 3D (WebGL)', basico: false, pro: false, avanzado: false, premium: true },
  { label: 'Soporte prioritario', basico: false, pro: false, avanzado: '30 días', premium: 'SLA incluido' },
  { label: 'Capacitación', basico: false, pro: false, avanzado: false, premium: true },
];

const DIFFERENTIATORS = [
  {
    icon: <IoSearchOutline className="h-6 w-6" />,
    title: 'SEO integrado desde el día 1',
    desc: 'Cada plan incluye optimización para buscadores. No es un extra, es parte del proceso.',
  },
  {
    icon: <IoLayersOutline className="h-6 w-6" />,
    title: 'Escalabilidad entre planes',
    desc: 'Empiezas en Básico y migras a Profesional sin rehacer todo. Arquitectura pensada para crecer.',
  },
  {
    icon: <IoCubeOutline className="h-6 w-6" />,
    title: 'Experiencias 3D accesibles',
    desc: 'Con el Plan Premium llevas tu marca a un nivel visual que muy pocos ofrecen en la región.',
  },
  {
    icon: <IoHeadsetOutline className="h-6 w-6" />,
    title: 'Soporte personalizado',
    desc: 'Hablas directo con el equipo. Sin tickets anónimos, sin esperas de días para una respuesta.',
  },
  {
    icon: <IoDocumentTextOutline className="h-6 w-6" />,
    title: 'Documentación y capacitación',
    desc: 'Entregamos manuales y sesiones de onboarding para que puedas gestionar tu sitio tú mismo.',
  },
  {
    icon: <IoPricetagOutline className="h-6 w-6" />,
    title: 'Precios transparentes',
    desc: 'Sin sorpresas al final. El alcance se define por escrito antes de empezar cualquier trabajo.',
  },
];

function ComparisonCell({ value }) {
  if (value === true) {
    return <IoCheckmarkCircle className="h-5 w-5 text-lan-bot mx-auto" aria-label="Incluido" />;
  }
  if (value === false) {
    return <IoCloseCircle className="h-5 w-5 text-slate-300 dark:text-slate-600 mx-auto" aria-label="No incluido" />;
  }
  return <span className="text-xs text-slate-600 dark:text-slate-300 text-center block">{value}</span>;
}

export default function Planes() {
  return (
    <main className="pt-24 mx-auto max-w-6xl px-4 pb-16 space-y-16">

      {/* Hero */}
      <section className="space-y-5 max-w-3xl">
        <span className="badge-ai">Web · SEO · Ecommerce · 3D</span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Planes de desarrollo web{' '}
          <span className="text-lan-secondary dark:text-lan-accent">
            hechos para crecer
          </span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          Desde una presencia digital esencial hasta experiencias 3D de alto impacto.
          Elige el plan que encaja con tu etapa y escala cuando estés listo.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={getWhatsAppLink('Hola LanLabs 👋 Quisiera saber qué plan de desarrollo web se adapta mejor a mi negocio.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 font-medium text-sm shadow-soft-lg transition"
          >
            <FaWhatsapp className="h-5 w-5" />
            Asesoría gratuita por WhatsApp
          </a>
          <a
            href="#planes"
            className="inline-flex items-center px-5 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Ver planes →
          </a>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 space-x-4">
          <span>✓ Sin contrato largo</span>
          <span>✓ Precios transparentes</span>
          <span>✓ Resultados reales</span>
        </p>
      </section>

      {/* Plan Cards */}
      <section id="planes" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold">Elige tu plan</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, idx) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              priceRange={plan.priceRange}
              description={plan.description}
              features={plan.features}
              badge={plan.badge}
              highlighted={plan.highlighted}
              ctaMessage={plan.ctaMessage}
              delay={idx * 0.07}
            />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Comparativa de características</h2>
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-600 dark:text-slate-400 w-40">
                  Característica
                </th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    className={`py-3 px-4 font-semibold text-center ${
                      plan.highlighted
                        ? 'text-lan-secondary dark:text-lan-accent'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURES_COMPARISON.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-b border-slate-100 dark:border-slate-800 ${
                    idx % 2 === 0 ? '' : 'bg-slate-50/50 dark:bg-slate-800/20'
                  }`}
                >
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{row.label}</td>
                  <td className="py-3 px-4 text-center"><ComparisonCell value={row.basico} /></td>
                  <td className="py-3 px-4 text-center bg-lan-accent/5 dark:bg-lan-secondary/10"><ComparisonCell value={row.pro} /></td>
                  <td className="py-3 px-4 text-center"><ComparisonCell value={row.avanzado} /></td>
                  <td className="py-3 px-4 text-center"><ComparisonCell value={row.premium} /></td>
                </tr>
              ))}

              {/* Price row */}
              <tr className="font-bold">
                <td className="py-4 px-4 text-slate-700 dark:text-slate-300">Inversión</td>
                {PLANS.map((plan) => (
                  <td
                    key={plan.id}
                    className={`py-4 px-4 text-center ${
                      plan.highlighted
                        ? 'text-lan-secondary dark:text-lan-accent bg-lan-accent/5 dark:bg-lan-secondary/10'
                        : 'text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    {plan.priceRange}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          * Los precios son referenciales en USD. El costo final depende del alcance específico de tu proyecto.
        </p>
      </section>

      {/* Differentiators */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="badge-ai">Por qué LanLabs</span>
          <h2 className="text-2xl font-bold">Lo que nos diferencia</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl">
            No solo entregamos código. Entregamos sistemas que trabajan para tu negocio.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item, idx) => (
            <motion.div
              key={item.title}
              className="card p-6 space-y-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.35 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-lan-accent/20 dark:bg-lan-secondary/20 text-lan-secondary dark:text-lan-accent">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Revenue Model */}
      <section className="card p-8 space-y-6">
        <h2 className="text-2xl font-bold">Modelo de ingresos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="font-semibold text-lan-primary dark:text-lan-accent">Flujos primarios</h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {[
                'Pago por proyecto (one-shot) — planes Básico y Profesional',
                'Retainer mensual de mantenimiento y actualizaciones',
                'Paquetes de automatización IA complementarios',
                'Soporte prioritario por suscripción (Plan Premium)',
                'Add-ons: integraciones, bots de WhatsApp, analytics avanzado',
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <IoCheckmarkCircle className="text-lan-bot flex-shrink-0 mt-0.5 h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-lan-primary to-lan-secondary rounded-2xl p-6 text-white space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-lan-accent">Proyección anual</p>
            <div className="space-y-2">
              {[
                { label: '4 proyectos Básico', value: '$1,600 – $2,000' },
                { label: '3 proyectos Profesional', value: '$2,400 – $3,600' },
                { label: '2 proyectos Avanzado', value: '$3,600 – $6,000' },
                { label: '1 proyecto Premium 3D', value: '$3,500 – $6,000' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-lan-accent/80">{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}
              <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                <span>Total estimado</span>
                <span className="text-lan-accent">$11,100 – $17,600 / año</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps + CTA */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">¿Cómo empezamos?</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: '01', title: 'Cuéntanos tu proyecto', desc: 'Escríbenos por WhatsApp o llena el formulario de contacto.' },
            { step: '02', title: 'Reunión de descubrimiento', desc: 'Hablamos de tu negocio, objetivos y plan ideal sin compromiso.' },
            { step: '03', title: 'Propuesta clara', desc: 'Recibes alcance, precios y tiempos por escrito antes de empezar.' },
            { step: '04', title: 'Lanzamos juntos', desc: 'Desarrollamos, revisamos contigo y publicamos tu sitio.' },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              className="card p-5 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl font-extrabold text-lan-accent/30 dark:text-lan-secondary/40">
                {item.step}
              </span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">¿Tienes dudas sobre qué plan elegir?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Te ayudamos a elegir sin presión. Una conversación de 15 minutos es suficiente para
              saber qué opción encaja con tu negocio y presupuesto.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Hola LanLabs 👋 Tengo dudas sobre qué plan de desarrollo web elegir para mi negocio.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 font-medium text-sm shadow-soft-lg transition whitespace-nowrap"
          >
            <FaWhatsapp className="h-5 w-5" />
            Hablar con LanLabs
          </a>
        </div>
      </section>
    </main>
  );
}

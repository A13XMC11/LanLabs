// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../components/CTAButton.jsx';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaCheckCircle } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const TELEGRAM_LINK = 'https://t.me/alexander_mc11'; // CAMBIA
const INSTAGRAM_LINK = 'https://instagram.com/s2.h0_?igsh=MW42NDd1NzJ2a3FpZA%3D%3D&utm_source=qr'; // CAMBIA

const quickPaths = [
  {
    icon: FaWhatsapp,
    title: 'Tengo un negocio y quiero un bot de WhatsApp',
    message: 'Hola LanLabs, tengo un negocio y quiero un bot de WhatsApp con IA.',
    color: 'text-green-500 dark:text-green-400',
  },
  {
    icon: 'automation',
    title: 'Quiero automatizar mis procesos',
    message: 'Hola LanLabs, quiero automatizar procesos en mi negocio.',
    color: 'text-violet-500 dark:text-violet-300',
  },
  {
    icon: 'web',
    title: 'Necesito una página web',
    message: 'Hola LanLabs, necesito una página web para mi negocio.',
    color: 'text-blue-500 dark:text-blue-300',
  },
];

export default function Contact() {
  return (
    <main className="pt-24 mx-auto max-w-4xl px-4 pb-16 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Hablemos de tu negocio</h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          ¿Qué quieres automatizar? Cuéntanos y te proponemos una solución en menos de 24 horas.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Horario de respuesta: lunes a viernes, 09h00–19h00 (hora Ecuador).
        </p>
      </section>

      {/* Quick Path Cards */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Elige tu camino:</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {quickPaths.map((path, idx) => {
            let Icon = null;
            if (path.icon === FaWhatsapp) {
              Icon = FaWhatsapp;
            } else if (path.icon === 'automation') {
              Icon = () => <span className="text-2xl">⚙️</span>;
            } else if (path.icon === 'web') {
              Icon = () => <span className="text-2xl">🌐</span>;
            }

            return (
              <motion.a
                key={idx}
                href={getWhatsAppLink(path.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex items-start gap-4 hover:border-lan-secondary transition cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className={`text-3xl flex-shrink-0 ${path.color}`}>
                  {Icon && <Icon />}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {path.title}
                  </h3>
                  <span className="text-xs text-lan-secondary dark:text-lan-accent hover:text-lan-primary dark:hover:text-slate-100 flex items-center gap-1 mt-2">
                    Enviar por WhatsApp <MdArrowForward />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Or Direct Contact */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">O contáctanos directo:</h2>
        <div className="social-container">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            style={{ '--r': -15 }}
            data-label="WhatsApp"
          >
            <FaWhatsapp className="h-11 w-11" />
          </a>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            style={{ '--r': 5 }}
            data-label="Telegram"
          >
            <FaTelegramPlane className="h-11 w-11" />
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="social-glass"
            style={{ '--r': 25 }}
            data-label="Instagram"
          >
            <FaInstagram className="h-11 w-11" />
          </a>
        </div>
      </section>

      {/* Timeline: What happens after */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">¿Qué pasa después de escribirnos?</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: 'Respondemos en menos de 2 horas', desc: '(durante horario laboral)' },
            { step: 2, title: 'Hacemos una reunión rápida de 15 minutos', desc: 'para entender tu negocio' },
            { step: 3, title: 'Te enviamos una propuesta clara', desc: 'con costos y tiempos' },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="card p-5 flex gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (item.step - 1) * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-lan-secondary text-slate-50 font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

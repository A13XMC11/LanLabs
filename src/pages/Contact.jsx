// src/pages/Contact.jsx
import React from 'react';
import { getWhatsAppLink } from '../components/CTAButton.jsx';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const TELEGRAM_LINK = 'https://t.me/alexander_mc11'; // CAMBIA
const INSTAGRAM_LINK = 'https://instagram.com/s2.h0_?igsh=MW42NDd1NzJ2a3FpZA%3D%3D&utm_source=qr'; // CAMBIA

export default function Contact() {
  return (
    <main className="pt-24 mx-auto max-w-4xl px-4 pb-16 space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Contacto</h1>
        <p className="text-slate-600 dark:text-slate-300">
          No usamos formularios eternos. Elige el canal que más cómodo te quede
          y conversemos.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Horario de respuesta: lunes a viernes, 09h00–19h00 (hora Ecuador).
        </p>
      </section>

      <section className="social-container">
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
      </section>
    </main>
  );
}

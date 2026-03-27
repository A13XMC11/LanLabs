// src/components/CTAButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WHATSAPP_NUMBER = '593992672980';
const DEFAULT_MESSAGE = 'Hola LanLabs 👋 Me gustaría saber más sobre automatización con IA y bots para mi negocio.';

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export default function CTAButton({ children = 'Conversemos por WhatsApp', size = 'md', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lan-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-lan-dark';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${sizes[size]} bg-green-500 text-slate-50 hover:bg-green-600 shadow-soft-lg ${className}`}
    >
      <FaWhatsapp className="h-5 w-5" />
      <span>{children}</span>
    </a>
  );
}

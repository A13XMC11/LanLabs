// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoCheckmark } from 'react-icons/io5';
import { getWhatsAppLink } from './CTAButton';

export default function ServiceCard({
  title,
  description,
  flagship = false,
  features = null,
  ctaMessage = null
}) {
  const cardClass = flagship ? 'card-flagship' : 'card';

  return (
    <motion.article
      className={`${cardClass} p-6 flex flex-col gap-4`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {flagship && (
        <span className="badge-ai w-fit">Recomendado</span>
      )}
      <h3 className="text-lg font-semibold text-lan-primary dark:text-lan-accent">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 my-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
              <IoCheckmark className="text-lan-secondary flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {ctaMessage && (
        <a
          href={getWhatsAppLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm font-medium text-lan-secondary hover:text-lan-primary dark:text-lan-accent dark:hover:text-slate-100 transition"
        >
          Quiero saber más →
        </a>
      )}
    </motion.article>
  );
}

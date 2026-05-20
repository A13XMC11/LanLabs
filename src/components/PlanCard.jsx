// src/components/PlanCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoCheckmark } from 'react-icons/io5';
import { getWhatsAppLink } from './CTAButton';

export default function PlanCard({
  name,
  priceRange,
  description,
  features = [],
  badge = null,
  ctaMessage,
  highlighted = false,
  delay = 0,
}) {
  return (
    <motion.article
      className={`${highlighted ? 'card-flagship' : 'card'} p-6 flex flex-col gap-4 relative`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25, delay }}
      viewport={{ once: true }}
    >
      {badge && (
        <span className="badge-ai w-fit">{badge}</span>
      )}

      <div>
        <h3 className="text-lg font-semibold text-lan-primary dark:text-lan-accent">{name}</h3>
        <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
          {priceRange}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
      </div>

      <ul className="space-y-2 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
            <IoCheckmark className="text-lan-secondary dark:text-lan-accent flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={getWhatsAppLink(ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto w-full text-center py-2.5 rounded-full text-sm font-medium transition ${
          highlighted
            ? 'bg-lan-secondary text-white hover:bg-lan-primary'
            : 'border border-lan-secondary text-lan-secondary hover:bg-lan-secondary hover:text-white dark:border-lan-accent dark:text-lan-accent dark:hover:bg-lan-accent dark:hover:text-lan-dark'
        }`}
      >
        Solicitar este plan →
      </a>
    </motion.article>
  );
}

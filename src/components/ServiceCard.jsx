// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { IoCheckmark } from 'react-icons/io5';
import {
  FaWhatsapp,
  FaGlobe,
  FaPlug,
  FaProjectDiagram,
} from 'react-icons/fa';
import {
  HiLightningBolt,
  HiChip,
} from 'react-icons/hi';
import { getWhatsAppLink } from './CTAButton';

const iconMap = {
  whatsapp:     { Icon: FaWhatsapp,      bg: 'bg-green-100 dark:bg-green-900/30', color: 'text-green-600 dark:text-green-400' },
  automation:   { Icon: HiLightningBolt, bg: 'bg-amber-100 dark:bg-amber-900/30', color: 'text-amber-600 dark:text-amber-400' },
  robot:        { Icon: HiChip,          bg: 'bg-violet-100 dark:bg-violet-900/30', color: 'text-violet-600 dark:text-violet-400' },
  web:          { Icon: FaGlobe,         bg: 'bg-sky-100 dark:bg-sky-900/30', color: 'text-sky-600 dark:text-sky-400' },
  integrations: { Icon: FaPlug,          bg: 'bg-indigo-100 dark:bg-indigo-900/30', color: 'text-indigo-600 dark:text-indigo-400' },
  workflow:     { Icon: FaProjectDiagram,bg: 'bg-orange-100 dark:bg-orange-900/30', color: 'text-orange-600 dark:text-orange-400' },
};

export default function ServiceCard({
  title,
  description,
  flagship = false,
  features = null,
  ctaMessage = null,
  metric = null,
  iconType = 'web',
}) {
  const { Icon, bg, color } = iconMap[iconType] ?? iconMap.web;

  return (
    <motion.article
      className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-default
        ${flagship
          ? 'bg-white dark:bg-slate-900 border-lan-secondary/60 dark:border-lan-secondary/40 shadow-glow-blue ring-1 ring-lan-secondary/20'
          : 'bg-white dark:bg-slate-900 border-slate-200/70 dark:border-slate-700/60 shadow-soft-lg hover:shadow-card-hover hover:-translate-y-1'
        }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Flagship gradient top bar */}
      {flagship && (
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-lan-secondary via-lan-ai to-lan-accent" />
      )}

      {/* Icon + badge row */}
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${bg}`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        {flagship && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold
                           bg-lan-secondary/10 text-lan-secondary dark:bg-lan-secondary/20 dark:text-lan-accent
                           border border-lan-secondary/30">
            Recomendado
          </span>
        )}
      </div>

      {/* Title */}
      <div>
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
          {title}
        </h3>
        {metric && (
          <span className="text-[11px] font-semibold text-lan-secondary dark:text-lan-accent uppercase tracking-wider">
            {metric}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
              <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${bg}`}>
                <IoCheckmark className={`w-2.5 h-2.5 ${color}`} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {ctaMessage && (
        <a
          href={getWhatsAppLink(ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold
                     text-lan-secondary dark:text-lan-accent
                     hover:text-lan-primary dark:hover:text-white transition-colors"
        >
          Quiero saber más
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </motion.article>
  );
}

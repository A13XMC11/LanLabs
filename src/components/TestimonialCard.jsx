// src/components/TestimonialCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const avatarColors = [
  'bg-lan-primary text-white',
  'bg-lan-secondary text-white',
  'bg-lan-ai text-white',
  'bg-lan-bot text-white',
];

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialCard({ testimonial, index = 0 }) {
  const initials = getInitials(testimonial.name);
  const avatarColor = avatarColors[index % avatarColors.length];

  return (
    <motion.article
      className="relative flex flex-col gap-4 p-6 bg-white dark:bg-slate-900
                 rounded-2xl border border-slate-200/70 dark:border-slate-700/60
                 shadow-soft-lg hover:shadow-card-hover transition-all duration-300
                 hover:-translate-y-0.5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-5 font-display text-7xl leading-none
                   text-slate-100 dark:text-slate-800 select-none pointer-events-none"
      >
        "
      </span>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        {/* Avatar */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center
                         text-xs font-bold flex-shrink-0 ${avatarColor}`}>
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {testimonial.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {testimonial.role}
          </p>
        </div>

        {/* Service badge */}
        {testimonial.service && (
          <span className="flex-shrink-0 text-[10px] font-semibold px-2 py-1 rounded-full
                           bg-lan-primary/8 text-lan-secondary dark:bg-lan-secondary/20 dark:text-lan-accent
                           border border-lan-secondary/20">
            {testimonial.service}
          </span>
        )}
      </div>
    </motion.article>
  );
}

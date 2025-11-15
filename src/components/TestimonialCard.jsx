// src/components/TestimonialCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      className="card p-6 flex flex-col gap-3"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-sm text-slate-700 dark:text-slate-200">
        “{testimonial.quote}”
      </p>
      <div className="flex flex-col text-sm">
        <span className="font-semibold">{testimonial.name}</span>
        <span className="text-slate-500 dark:text-slate-400">
          {testimonial.role}
        </span>
      </div>
    </motion.article>
  );
}

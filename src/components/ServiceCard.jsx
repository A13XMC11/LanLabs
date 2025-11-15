// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description }) {
  return (
    <motion.article
      className="card p-6 flex flex-col gap-3"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-semibold text-lan-primary dark:text-lan-accent">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </motion.article>
  );
}


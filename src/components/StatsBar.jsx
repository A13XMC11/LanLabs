// src/components/StatsBar.jsx
import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

function AnimatedNumber({ value, suffix = '' }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = motionValue.onChange((v) => {
      setDisplayValue(Math.round(v));
    });

    motionValue.set(value);

    return unsubscribe;
  }, [value, motionValue]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 10, suffix: '+', label: 'Proyectos entregados' },
    { value: 3, suffix: '', label: 'Países con clientes' },
    { value: 500, suffix: 'h+', label: 'Horas automatizadas' },
    { value: 100, suffix: '%', label: 'Proyectos con soporte post-lanzamiento' },
  ];

  return (
    <section
      ref={ref}
      className="py-12 px-4 sm:px-6 md:py-16 border-y border-slate-200 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-block">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-lan-primary dark:text-lan-accent"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {inView ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </motion.div>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

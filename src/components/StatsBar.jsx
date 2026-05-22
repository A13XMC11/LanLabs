// src/components/StatsBar.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue } from 'framer-motion';

function AnimatedNumber({ value, suffix = '' }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.onChange((v) => setDisplayValue(Math.round(v)));
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

const stats = [
  { value: 10,  suffix: '+',  label: 'Proyectos entregados',         sub: 'web · IA · automatización' },
  { value: 3,   suffix: '',   label: 'Países con clientes activos',   sub: 'Ecuador · Colombia · EEUU' },
  { value: 500, suffix: 'h+', label: 'Horas de trabajo automatizadas',sub: 'sin esfuerzo humano' },
  { value: 100, suffix: '%',  label: 'Con soporte post-lanzamiento',  sub: 'no desaparecemos' },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-14 px-4 sm:px-6 overflow-hidden
                 bg-lan-dark dark:bg-slate-950"
      aria-label="Resultados en números"
    >
      {/* Subtle top/bottom border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lan-secondary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lan-secondary/40 to-transparent" />

      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-96 h-32 bg-lan-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center gap-1.5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.5, ease: 'easeOut' }}
            >
              {/* Number */}
              <div className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                {inView ? (
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              {/* Label */}
              <p className="text-sm font-semibold text-lan-accent leading-snug max-w-[160px]">
                {stat.label}
              </p>

              {/* Sub-label */}
              <p className="text-xs text-slate-500 dark:text-slate-600">
                {stat.sub}
              </p>

              {/* Separator for desktop (not last item) */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2
                                h-10 w-px bg-slate-700/60"
                  style={{ position: 'static', display: 'none' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

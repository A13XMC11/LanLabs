// src/components/BotDemo.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CTAButton from './CTAButton';
import { FaCircle } from 'react-icons/fa';

const conversation = [
  { from: 'bot', text: '¡Hola! Soy el asistente de LanLabs 🤖 ¿En qué puedo ayudarte hoy?' },
  { from: 'user', text: 'Hola, quiero saber si pueden hacer un bot para mi negocio' },
  { from: 'bot', text: '¡Claro que sí! ¿Qué necesitas automatizar? (ej: preguntas frecuentes, reservas, cotizaciones o seguimiento de leads)' },
  { from: 'user', text: 'Quiero que responda preguntas y filtre prospectos antes de hablar con ventas' },
  { from: 'bot', text: 'Perfecto. Puedo conectarlo con WhatsApp Business y enviar los leads calificados a tu equipo. ¿Te gustaría agendar una llamada de 15 minutos?' },
  { from: 'user', text: 'Sí, me interesa' },
  { from: 'bot', text: '¡Genial! Te paso con el equipo ahora mismo 🚀' },
];

const bubbleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function BotDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text & Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="badge-ai">Bot de WhatsApp con IA</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Tu negocio, atendiendo 24/7
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                Un asistente inteligente que responde a tus clientes instantáneamente, califica prospectos y agenda citas — mientras tú haces lo que realmente importa.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                'Atiende y califica clientes automáticamente',
                'Responde preguntas frecuentes al instante',
                'Agenda citas o redirige a ventas',
                'Se integra con tu CRM o base de datos',
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  <span className="text-lan-bot flex-shrink-0 mt-1">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <CTAButton size="lg">Quiero un bot para mi negocio</CTAButton>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[288px] h-[520px] bg-lan-dark rounded-[2.5rem] border-4 border-slate-700 shadow-[0_40px_80px_rgba(5,38,89,0.5)] overflow-hidden flex flex-col dark:shadow-[0_40px_80px_rgba(5,38,89,0.7)]">
              {/* Phone Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <FaCircle className="w-2 h-2 text-lan-bot animate-pulse" />
                <span className="text-xs font-medium text-slate-200">LanLabs Bot</span>
                <span className="text-xs text-slate-400">en línea</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 flex flex-col">
                {conversation.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                    variants={bubbleVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{
                      delay: idx * 0.15,
                      duration: 0.4,
                    }}
                  >
                    <div
                      className={
                        msg.from === 'user'
                          ? 'chat-bubble-out'
                          : 'chat-bubble-in'
                      }
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Phone Footer */}
              <div className="bg-slate-800 px-3 py-2 border-t border-slate-700">
                <div className="text-xs text-slate-400 text-center">
                  Powered by IA
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

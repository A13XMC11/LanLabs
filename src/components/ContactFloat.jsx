// src/components/ContactFloat.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppLink } from './CTAButton.jsx';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const TELEGRAM_LINK = 'https://t.me/alexander_mc11'; // ← CAMBIA ESTO
const INSTAGRAM_LINK = 'https://instagram.com/s2.h0_?igsh=MW42NDd1NzJ2a3FpZA%3D%3D&utm_source=qr'; // ← CAMBIA ESTO

export default function ContactFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-40">
      <div className="relative flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-col gap-2 mb-2"
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="card px-4 py-2 text-sm flex items-center gap-2"
              >
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="card px-4 py-2 text-sm flex items-center gap-2"
              >
                <FaTelegramPlane className="h-5 w-5" />
                Telegram
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                className="card px-4 py-2 text-sm flex items-center gap-2"
              >
                <FaInstagram className="h-5 w-5" />
                Instagram
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full bg-green-500 text-slate-50 shadow-soft-lg p-3 flex items-center justify-center hover:bg-green-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lan-accent"
        >
          {open ? '×' : '✉️'}
        </button>
      </div>
    </div>
  );
}

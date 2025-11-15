// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import logoClaro from '../../img/Logo_LanLabs_Claro.PNG';
import logoOscuro from '../../img/Logo_LanLabs_Oscuro.png';

export default function Header({ theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evita que el contenido del body se desplace cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkBase =
    'text-sm font-medium px-3 py-2 rounded-full transition hover:bg-slate-100/80 hover:text-lan-primary dark:hover:bg-slate-800/80';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 ${
        mobileOpen
          ? 'bg-slate-900 dark:bg-lan-dark'
          : scrolled
            ? 'glass-nav'
            : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-4">
        {/* Logo LanLabs */}
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              key={theme}
              src={theme === 'dark' ? logoOscuro : logoClaro}
              alt="LanLabs"
              className="h-16 w-auto cursor-pointer"
            />
          </NavLink>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive && location.pathname === '/'
                  ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                  : 'text-slate-600 dark:text-slate-200'
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                  : 'text-slate-600 dark:text-slate-200'
              }`
            }
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                  : 'text-slate-600 dark:text-slate-200'
              }`
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/portafolio"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                  : 'text-slate-600 dark:text-slate-200'
              }`
            }
          >
            Portafolio
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                  : 'text-slate-600 dark:text-slate-200'
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {/* Botón rápido de WhatsApp en el header (texto simple) */}
          <a
            href="https://wa.me/593996979291?text=Hola%20LanLabs%20👋%20me%20gustaría%20conversar%20sobre%20un%20proyecto"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-lan-primary text-slate-50 hover:bg-lan-secondary shadow-soft-lg"
          >
            <FaWhatsapp className="h-5 w-5" />
            Conversemos por WhatsApp
          </a>

          {/* Menú hamburguesa móvil */}
          <button
            type="button"
            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">Abrir menú</span>
            <span className="flex flex-col gap-[3px]">
              <span className={`block h-[2px] w-4 rounded bg-slate-700 dark:bg-slate-200 transition-transform ${mobileOpen ? 'translate-y-[5px] rotate-45' : ''}`}></span>
              <span className={`block h-[2px] w-4 rounded bg-slate-700 dark:bg-slate-200 transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-[2px] w-4 rounded bg-slate-700 dark:bg-slate-200 transition-transform ${mobileOpen ? '-translate-y-[5px] -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Panel lateral móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full w-72 max-w-full bg-slate-900 dark:bg-lan-dark text-slate-50 border-r border-slate-800 p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Menú</span>
              <button
                type="button"
                className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} w-full text-left ${
                    isActive && location.pathname === '/'
                      ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                      : 'text-slate-50'
                  }`
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/sobre"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} w-full text-left ${
                    isActive
                      ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                      : 'text-slate-50'
                  }`
                }
              >
                Sobre Nosotros
              </NavLink>
              <NavLink
                to="/servicios"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} w-full text-left ${
                    isActive
                      ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                      : 'text-slate-50'
                  }`
                }
              >
                Servicios
              </NavLink>
              <NavLink
                to="/portafolio"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} w-full text-left ${
                    isActive
                      ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                      : 'text-slate-50'
                  }`
                }
              >
                Portafolio
              </NavLink>
              <NavLink
                to="/contacto"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} w-full text-left ${
                    isActive
                      ? 'bg-slate-100 text-lan-primary dark:bg-slate-800 dark:text-lan-accent'
                      : 'text-slate-50'
                  }`
                }
              >
                Contacto
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

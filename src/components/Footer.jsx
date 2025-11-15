// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoClaro from '../../img/Logo_LanLabs_Claro.PNG';
import logoOscuro from '../../img/Logo_LanLabs_Oscuro.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img
              src={logoClaro}
              alt="LanLabs"
              className="h-16 w-auto"
            />
            
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            Tecnología amigable que se adapta a ti. Sitios modernos, flujos con
            n8n y procesos automáticos sin drama.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navegación</h4>
          <ul className="space-y-1 text-slate-500 dark:text-slate-400">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre">Sobre Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Redes</h4>
          <ul className="space-y-1 text-slate-500 dark:text-slate-400">
            <li><a href="https://instagram.com/s2.h0_?igsh=MW42NDd1NzJ2a3FpZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/593996979291" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a href="https://t.me/alexander_mc11" target="_blank" rel="noreferrer">Telegram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © {new Date().getFullYear()} LanLabs. Todos los derechos reservados.
            <br />
            Sitio en construcción constante (como todo buen laboratorio).
          </p>
        </div>
      </div>
    </footer>
  );
}

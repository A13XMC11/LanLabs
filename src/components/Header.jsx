import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getWhatsAppLink } from '../lib/contact.js';
import { getLenis } from '../lib/smooth.js';
import TLink from './TLink.jsx';
import BrandLogo from './BrandLogo.jsx';

const items = [
  ['Servicios', '/servicios'],
  ['Proyectos', '/portafolio'],
  ['Estudio', '/sobre'],
  ['Planes', '/planes'],
  ['Contacto', '/contacto'],
];

export default function Header() {
  const [openAt, setOpenAt] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const open = openAt === pathname; // the menu closes itself on navigation

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (Math.abs(y - last) > 6) { setHidden(y > last && y > 240); last = y; }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    const lenis = getLenis();
    if (lenis) (open ? lenis.stop() : lenis.start());
    return () => document.documentElement.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <header className={`header ${solid ? 'is-solid' : ''} ${hidden && !open ? 'is-hidden' : ''}`}>
        <div className="header__bar">
          <TLink to="/" className="header__logo" aria-label="LanLabs, ir al inicio"><BrandLogo light /></TLink>
          <nav className="header__nav" aria-label="Navegación principal">
            {items.map(([label, to]) => (
              <TLink key={to} to={to} className={pathname === to ? 'is-current' : ''}>{label}</TLink>
            ))}
          </nav>
          <a className="header__cta" href={getWhatsAppLink('Hola LanLabs. Quiero conversar sobre un proyecto.')} target="_blank" rel="noopener noreferrer">Hablemos <span aria-hidden="true">↗</span></a>
          <button className={`burger ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpenAt(open ? null : pathname)}><span /><span /></button>
        </div>
      </header>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegación móvil" inert={!open}>
        {[['Inicio', '/'], ...items].map(([label, to], i) => (
          <TLink key={to} to={to} style={{ '--i': i }}><small>0{i + 1}</small>{label}</TLink>
        ))}
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="mobile-nav__wa">Escribir por WhatsApp ↗</a>
      </nav>
    </>
  );
}

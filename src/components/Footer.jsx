import { getWhatsAppLink } from '../lib/contact.js';
import TLink from './TLink.jsx';
import symbol from '../../img/brand/symbol.png';

const links = [['Servicios', '/servicios'], ['Proyectos', '/portafolio'], ['Estudio', '/sobre'], ['Planes', '/planes'], ['Contacto', '/contacto']];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__lead">
          <img src={symbol} alt="" aria-hidden="true" />
          <p>Ideas claras. Sistemas que funcionan.<br />Hecho en Ecuador para negocios que avanzan.</p>
        </div>
        <nav className="footer__links" aria-label="Pie de página">
          {links.map(([label, to]) => <TLink key={to} to={to}>{label}</TLink>)}
        </nav>
        <div className="footer__contact">
          <span>¿Conversamos?</span>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp ↗</a>
          <a href="https://instagram.com/s2.h0_" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://t.me/alexander_mc11" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true"><span>LanLabs</span></div>
      <div className="wrap footer__bottom"><span>© {new Date().getFullYear()} LanLabs</span><span>Diseño, automatización e inteligencia aplicada.</span></div>
    </footer>
  );
}

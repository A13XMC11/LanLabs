import Button from '../components/Button.jsx';
import { getWhatsAppLink } from '../lib/contact.js';

// Closing band shared by every page: giant headline + the monkey loop in a rounded video card.
export default function FinalCTA({ title = <>Lo siguiente puede<br /><em>empezar hoy.</em></>, body = 'Cuéntanos qué quieres mejorar. Te ayudamos a encontrar un primer paso concreto.', message, secondary = { to: '/portafolio', label: 'Ver proyectos' }, video = '/media/chat.mp4', poster = '/frames/chat/075.webp' }) {
  return (
    <section className="band band--navy cta">
      <div className="wrap cta__grid">
        <div className="cta__copy">
          <p className="eyebrow"><i /> Tu siguiente paso</p>
          <h2 data-words>{title}</h2>
          <p data-reveal>{body}</p>
          <div className="cta__actions" data-reveal>
            <Button href={getWhatsAppLink(message)} variant="light">Hablemos de tu proyecto</Button>
            {secondary && <Button to={secondary.to} variant="ghost">{secondary.label}</Button>}
          </div>
        </div>
        <div className="cta__video" data-clip>
          <video src={video} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

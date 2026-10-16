import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap.js';
import TLink from '../../components/TLink.jsx';

const services = [
  { n: '01', title: 'Conversaciones que avanzan', body: 'Bots y asistentes que responden preguntas, recogen información útil y llevan cada contacto al siguiente paso.', tag: 'IA · WhatsApp', to: '/servicios#asistentes', visual: 'chat' },
  { n: '02', title: 'Procesos que se conectan', body: 'Flujos que mueven datos entre tus herramientas, preparan reportes y eliminan tareas que se repiten todos los días.', tag: 'Automatización · Integraciones', to: '/servicios#automatizacion', visual: 'flow' },
  { n: '03', title: 'Experiencias hechas para usarse', body: 'Sitios y aplicaciones con una estructura clara, una identidad cuidada y tecnología preparada para crecer.', tag: 'Web · Producto digital', to: '/servicios#web', visual: 'web' },
];

function Visual({ type }) {
  if (type === 'chat') {
    return (
      <div className="vis vis--chat" aria-hidden="true">
        <span className="bubble bubble--in">¿Tienen cupo mañana?</span>
        <span className="bubble bubble--out">Sí. Te agendo ahora.</span>
        <span className="bubble bubble--ok">✓ Cita confirmada</span>
      </div>
    );
  }
  if (type === 'flow') {
    return (
      <div className="vis vis--flow" aria-hidden="true">
        <span>Formulario</span><i /><span className="is-hot">Asistente</span><i /><span>CRM</span><i /><span>Reporte</span>
      </div>
    );
  }
  return (
    <div className="vis vis--web" aria-hidden="true">
      <div className="vis__bar"><i /><i /><i /></div>
      <div className="vis__hero"><b /><b /><em /></div>
      <div className="vis__row"><u /><u /><u /></div>
    </div>
  );
}

export default function ServicesRail() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const track = rootRef.current.querySelector('.rail__track');
        const distance = () => track.scrollWidth - window.innerWidth + 120;
        gsap.to(track, {
          x: () => -distance(), ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
        });
        gsap.to(rootRef.current.querySelector('.rail__progress b'), {
          scaleX: 1, ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top top', end: () => `+=${distance()}`, scrub: true, invalidateOnRefresh: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="band band--navy rail" ref={rootRef} id="servicios-home">
      <div className="rail__sticky">
        <div className="wrap rail__head">
          <p className="eyebrow"><i /> Qué hacemos</p>
          <h2 data-words>Un negocio mejor conectado <em>se siente distinto.</em></h2>
        </div>
        <div className="rail__track">
          {services.map((s) => (
            <TLink to={s.to} className="card" key={s.n}>
              <span className="card__n">{s.n}</span>
              <Visual type={s.visual} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="card__foot"><span>{s.tag}</span><b aria-hidden="true">↗</b></span>
            </TLink>
          ))}
        </div>
        <div className="rail__progress" aria-hidden="true"><b /></div>
      </div>
    </section>
  );
}

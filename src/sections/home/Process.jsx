import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap.js';

const steps = [
  { n: '01', title: 'Entendemos', body: 'Vemos cómo funciona hoy tu negocio y elegimos el problema que vale la pena resolver.' },
  { n: '02', title: 'Diseñamos', body: 'Definimos el recorrido, el alcance y una solución que puedas revisar antes de construirla completa.' },
  { n: '03', title: 'Construimos y ajustamos', body: 'Entregamos una experiencia funcional, la probamos contigo y afinamos los detalles.' },
];

export default function Process() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.process__line b', {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.process__steps', start: 'top 60%', end: 'bottom 70%', scrub: true },
      });
      gsap.utils.toArray('.step').forEach((el) => {
        gsap.fromTo(el, { opacity: 0.2, x: 40 }, {
          opacity: 1, x: 0, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 78%', end: 'top 48%', scrub: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="band band--night process" ref={rootRef}>
      <div className="wrap process__grid">
        <div className="process__sticky">
          <p className="eyebrow"><i /> Nuestra forma de trabajar</p>
          <h2 data-words>Primero claridad.<br /><em>Después código.</em></h2>
          <p className="process__note" data-reveal>Cada etapa termina con algo que puedes ver, probar y aprobar.</p>
        </div>
        <div className="process__steps">
          <div className="process__line" aria-hidden="true"><b /></div>
          {steps.map((s) => (
            <article className="step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

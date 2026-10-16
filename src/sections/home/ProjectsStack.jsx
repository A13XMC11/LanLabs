import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap.js';
import { projects } from '../../data/projects.js';
import Button from '../../components/Button.jsx';

const featured = projects.slice(0, 4);

export default function ProjectsStack() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const cards = gsap.utils.toArray('.pcard');
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          gsap.to(card.querySelector('.pcard__inner'), {
            scale: 0.92 - (cards.length - i) * 0.004, filter: 'brightness(0.6)', ease: 'none',
            scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 14%', scrub: true },
          });
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="band band--paper work" ref={rootRef}>
      <div className="wrap work__head">
        <div>
          <p className="eyebrow eyebrow--ink"><i /> Trabajo real</p>
          <h2 data-words>Hecho para negocios <em>de verdad.</em></h2>
        </div>
        <p data-reveal>Una muestra de sitios y herramientas que ya tienen nombre, contexto y personas detrás.</p>
      </div>
      <div className="wrap work__stack">
        {featured.map((p, i) => (
          <article className="pcard" key={p.id} style={{ '--i': i }}>
            <div className="pcard__inner">
              <div className="pcard__info">
                <span className="pcard__tag">{p.category} / {String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul>{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
              <div className="pcard__img"><img src={p.img} alt={`Vista del proyecto ${p.title}`} loading="lazy" data-parallax="0.12" /></div>
            </div>
          </article>
        ))}
      </div>
      <div className="wrap work__foot"><Button to="/portafolio" variant="solid">Todos los proyectos</Button></div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { gsap } from '../lib/gsap.js';
import { projects } from '../data/projects.js';

export default function Portfolio() {
  const [filter, setFilter] = useState('Todos');
  const [peek, setPeek] = useState(null);
  const peekRef = useRef(null);
  const filters = ['Todos', ...new Set(projects.map((p) => p.category))];
  const shown = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const x = gsap.quickTo(peekRef.current, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(peekRef.current, 'y', { duration: 0.6, ease: 'power3.out' });
    const move = (e) => { x(e.clientX + 28); y(e.clientY - 120); };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <Page>
      <PageHero number="03 / 05" eyebrow="Proyectos" video="chat" title={<>Ideas que salieron <em>del laboratorio.</em></>} lead="Cada proyecto responde a un contexto distinto. Aquí puedes ver qué construimos, para quién y con qué herramientas." />
      <section className="band band--paper works" aria-label="Proyectos de LanLabs">
        <div className="wrap">
          <div className="works__filters" role="group" aria-label="Filtrar proyectos">
            {filters.map((f) => <button key={f} type="button" className={filter === f ? 'is-active' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}
          </div>
          <ul className="works__list">
            {shown.map((p, i) => {
              const Tag = p.url !== '#' ? 'a' : 'div';
              const props = p.url !== '#' ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <li key={p.id}>
                  <Tag className="prow" {...props} onPointerEnter={() => setPeek(p.img)} onPointerLeave={() => setPeek(null)}>
                    <img className="prow__thumb" src={p.img} alt={`Vista del proyecto ${p.title}`} loading="lazy" />
                    <span className="prow__n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="prow__main"><h2>{p.title}</h2><p>{p.description}</p></span>
                    <span className="prow__meta"><b>{p.category}</b><em>{p.stack.join(' · ')}</em></span>
                    <span className="prow__impact">{p.impact}</span>
                    <span className="prow__go" aria-hidden="true">{p.url !== '#' ? '↗' : '·'}</span>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`peek ${peek ? 'is-on' : ''}`} ref={peekRef} aria-hidden="true">{peek && <img src={peek} alt="" />}</div>
      </section>
      <FinalCTA title={<>Tu proyecto podría estar <em>aquí después.</em></>} body="Cuéntanos qué quieres construir y encontraremos la forma más útil de empezar." secondary={null} />
    </Page>
  );
}

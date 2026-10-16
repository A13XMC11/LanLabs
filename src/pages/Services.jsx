import { useLayoutEffect, useRef } from 'react';
import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import FrameCanvas from '../components/FrameCanvas.jsx';
import Marquee from '../components/Marquee.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { gsap, ScrollTrigger } from '../lib/gsap.js';
import { getWhatsAppLink } from '../lib/contact.js';
import { projects } from '../data/projects.js';

const offers = [
  { id: 'asistentes', index: '01', tag: 'IA / Conversaciones', title: 'Cada conversación puede avanzar.', body: 'Creamos asistentes para WhatsApp y web que responden con el contexto de tu negocio, hacen las preguntas correctas y entregan la información a tu equipo.', points: ['Respuestas basadas en tu información', 'Captura y organización de contactos', 'Derivación a personas cuando hace falta'], layer: 'chat' },
  { id: 'automatizacion', index: '02', tag: 'Flujos / Integraciones', title: 'El trabajo entre herramientas, resuelto.', body: 'Conectamos aplicaciones y datos para que la información llegue al lugar correcto sin copiar, pegar ni perseguir archivos.', points: ['Reportes y alertas automáticas', 'Conexión de CRM, hojas y APIs', 'Flujos diseñados para tu operación'], layer: 'globe' },
  { id: 'web', index: '03', tag: 'Web / Producto', title: 'Una presencia que hace algo más.', body: 'Diseñamos sitios y aplicaciones donde la identidad, el contenido y la tecnología trabajan juntos para explicar, captar o gestionar.', points: ['Sitios corporativos y landing pages', 'Aplicaciones y paneles a medida', 'Diseño adaptable y accesible'], layer: 'web' },
];

const shot = projects[0];

export default function Services() {
  const rootRef = useRef(null);
  const chatApi = useRef(null);
  const globeApi = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const layers = gsap.utils.toArray('.svc__layer');
        const show = (i) => layers.forEach((el, k) => gsap.to(el, { opacity: k === i ? 1 : 0, scale: k === i ? 1 : 0.94, duration: 0.7, ease: 'power3.out', overwrite: true }));
        gsap.set(layers, { opacity: (i) => (i === 0 ? 1 : 0) });
        gsap.utils.toArray('.offer').forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el, start: 'top 28%', end: 'bottom 28%',
            onToggle: (self) => { if (self.isActive) show(i); },
          });
          ScrollTrigger.create({
            trigger: el, start: 'top bottom', end: 'bottom top', scrub: true,
            onUpdate: (self) => {
              const api = { chat: chatApi, globe: globeApi }[offers[i].layer];
              api?.current?.render(self.progress);
              if (offers[i].layer === 'web') {
                const strip = rootRef.current.querySelector('.svc__scroll');
                const distance = Math.max(0, strip.scrollHeight - strip.parentElement.clientHeight);
                gsap.set(strip, { y: -self.progress * distance });
              }
            },
          });
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <Page>
      <PageHero number="01 / 05" eyebrow="Servicios" video="chat" title={<>Tecnología hecha para <em>trabajar contigo.</em></>} lead="Cada solución comienza con una pregunta concreta: ¿qué puede funcionar mejor en tu negocio?" />
      <section className="band band--night svc" ref={rootRef}>
        <div className="wrap svc__grid">
          <div className="svc__visual" aria-hidden="true">
            <div className="svc__card">
              <div className="svc__layer"><FrameCanvas dir="chat" cover focus={0.72} apiRef={chatApi} initial={0.3} /></div>
              <div className="svc__layer"><FrameCanvas dir="globe" cover focus={0.7} apiRef={globeApi} initial={0.3} /></div>
              <div className="svc__layer svc__shot">
                <div className="vis__bar"><i /><i /><i /><span>{shot.url.replace(/^https?:\/\//, '')}</span></div>
                <div className="svc__shotview"><div className="svc__scroll">{projects.slice(0, 3).map((p) => <img key={p.id} src={p.img} alt="" />)}</div></div>
              </div>
              <span className="svc__badge">LANLABS / EN ACCIÓN</span>
            </div>
          </div>
          <div className="svc__list">
            {offers.map((o) => (
              <article className="offer" id={o.id} key={o.id}>
                <div className="offer__inline" aria-hidden="true">
                  {o.layer === 'web' ? <img src={shot.img} alt="" loading="lazy" /> : <video src={`/media/${o.layer}.mp4`} autoPlay muted loop playsInline preload="metadata" />}
                </div>
                <span className="eyebrow"><i /> {o.index} / {o.tag}</span>
                <h2 data-words>{o.title}</h2>
                <p data-reveal>{o.body}</p>
                <ul data-stagger>{o.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <a className="textlink" href={getWhatsAppLink(`Hola LanLabs. Me interesa: ${o.title}`)} target="_blank" rel="noopener noreferrer">Hablemos de esta solución <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band band--night marquee-band">
        <Marquee rows={[['Asistentes', 'Flujos', 'Integraciones', 'Web'], ['WhatsApp', 'n8n', 'Supabase', 'React']]} />
      </section>
      <FinalCTA title={<>Tu negocio tiene su propia forma de trabajar. <em>La solución también.</em></>} body="Podemos combinar asistentes, flujos y web según lo que necesites resolver primero." />
    </Page>
  );
}

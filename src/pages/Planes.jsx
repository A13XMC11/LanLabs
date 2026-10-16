import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { getWhatsAppLink } from '../lib/contact.js';

const plans = [
  { name: 'Esencial', price: '$350 – $500', for: 'Una presencia clara para comenzar.', features: ['3 a 5 páginas personalizadas', 'SEO básico', 'Formulario de contacto', 'Diseño adaptable', 'Orientación para dominio y hosting'] },
  { name: 'Profesional', price: '$800 – $1,200', for: 'Más contenido y autonomía para crecer.', featured: true, features: ['Hasta 15 páginas y blog', 'SEO avanzado', 'Formularios dinámicos', 'Integración con redes sociales'] },
  { name: 'Avanzado', price: '$1,800 – $3,000', for: 'Una experiencia conectada al negocio.', features: ['Tienda en línea', 'Integración de pagos', 'Panel de pedidos y clientes', 'SEO técnico', 'Soporte durante 30 días'] },
  { name: 'Experiencia 3D', price: '$3,500 – $6,000+', for: 'Interacción visual hecha a medida.', video: true, features: ['Escenas WebGL y Three.js', 'Animación avanzada', 'Funciones del plan Avanzado', 'Documentación y capacitación', 'Optimización de rendimiento'] },
];

const steps = [
  { n: '01', title: 'Conversamos', body: 'Objetivos, contenido, funcionalidades y tiempos.' },
  { n: '02', title: 'Proponemos', body: 'Un alcance escrito que puedas entender antes de empezar.' },
  { n: '03', title: 'Construimos', body: 'Entregas con avances que puedes revisar y probar.' },
];

const faqs = [
  ['¿Los precios son fijos?', 'Son rangos orientativos. El alcance final y la inversión quedan definidos en una propuesta escrita para tu proyecto.'],
  ['¿Puedo empezar con un plan y crecer después?', 'Sí. Te ayudamos a definir qué necesita tu web ahora y qué puede esperar para una siguiente etapa.'],
  ['¿Cómo empiezo?', 'Escríbenos por WhatsApp con tu idea. Conversamos y te proponemos un primer paso concreto.'],
];

function spotlight(event) {
  const r = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - r.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - r.top}px`);
}

export default function Planes() {
  return (
    <Page>
      <PageHero number="04 / 05" eyebrow="Planes web" video="globe" title={<>Una web a la medida <em>de tu siguiente paso.</em></>} lead="Estas opciones orientan el alcance y la inversión. Antes de comenzar, definimos juntos una propuesta concreta para tu proyecto.">
        <Button href={getWhatsAppLink('Hola LanLabs. Quiero conversar sobre un plan web para mi negocio.')} variant="light">Encontrar mi plan</Button>
      </PageHero>
      <section className="band band--paper plans" id="planes">
        <div className="wrap">
          <div className="sect-head">
            <div><p className="eyebrow eyebrow--ink"><i /> Opciones</p><h2 data-words>El alcance correcto <em>para cada etapa.</em></h2></div>
            <p data-reveal>Los precios son rangos orientativos. El alcance final queda definido en la propuesta.</p>
          </div>
          <div className="plans__grid" data-stagger>
            {plans.map((plan, i) => (
              <article className={`plan ${plan.featured ? 'plan--featured' : ''}`} key={plan.name} onPointerMove={spotlight}>
                {plan.video && <video className="plan__video" src="/media/globe.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />}
                <div className="plan__top"><span>{String(i + 1).padStart(2, '0')} / 04</span>{plan.featured && <span className="plan__badge">Más solicitado</span>}</div>
                <h3>{plan.name}</h3>
                <p className="plan__for">{plan.for}</p>
                <div className="plan__price">{plan.price}</div>
                <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a className="plan__cta" href={getWhatsAppLink(`Hola LanLabs. Me interesa el plan web ${plan.name} (${plan.price}).`)} target="_blank" rel="noopener noreferrer">Consultar este plan <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band band--night howto">
        <div className="wrap howto__grid">
          <div><p className="eyebrow"><i /> Antes de empezar</p><h2 data-words>Una propuesta que <em>puedas entender.</em></h2></div>
          <ol className="howto__steps" data-stagger>
            {steps.map((s) => <li key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="band band--paper faq">
        <div className="wrap faq__grid">
          <h2 data-words>Preguntas <em>frecuentes.</em></h2>
          <div className="faq__list" data-stagger>
            {faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
      <FinalCTA title={<>Empecemos por <em>una conversación.</em></>} body="Te ayudamos a definir qué necesita tu web y qué puede esperar para una siguiente etapa." secondary={null} video="/media/globe.mp4" poster="/frames/globe/075.webp" />
    </Page>
  );
}

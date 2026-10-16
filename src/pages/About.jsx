import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import StoryScene from '../components/StoryScene.jsx';
import Marquee from '../components/Marquee.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import brandMark from '../../img/brand/symbol.png';
import cafeWeb from '../../img/cafe_web.png';
import fiabilidad from '../../img/fiabilidad.png';

const chapters = [
  { n: '01', kicker: 'Lan', title: 'Una forma relajada e inteligente de trabajar.', body: '«Lan» habla de dejar que la tecnología cargue con lo repetitivo para que las personas se concentren en lo importante.' },
  { n: '02', kicker: 'Labs', title: 'Probar, aprender y mejorar.', body: '«Labs» es nuestra forma de explorar: prototipos que puedes ver, pruebas con tu equipo y ajustes hasta que funcione.' },
  { n: '03', kicker: 'La misión', title: 'Que la tecnología trabaje por ti.', body: 'Diseñamos experiencias web, asistentes y automatizaciones con una idea simple: hacer más fácil el trabajo de las personas.' },
];

const principles = [
  { n: '01', title: 'Entender antes de proponer', body: 'Vemos el proceso real, las restricciones y la experiencia de quien usará la solución.' },
  { n: '02', title: 'Construir con claridad', body: 'Definimos el alcance y mostramos avances que puedas revisar, probar y cuestionar.' },
  { n: '03', title: 'Dejar espacio para crecer', body: 'Entregamos una base que puedas mantener y mejorar cuando cambien tus necesidades.' },
];

export default function About() {
  return (
    <Page>
      <PageHero number="02 / 05" eyebrow="El estudio" video="globe" title={<>Curiosidad para explorar. <em>Criterio para construir.</em></>} lead="LanLabs es un estudio digital en Ecuador. Diseñamos experiencias web, asistentes y automatizaciones para que la tecnología haga más fácil el trabajo de las personas." />
      <StoryScene dir="globe" chapters={chapters} giant="EXPLORA" label="Quiénes somos" />
      <section className="band band--paper manifesto">
        <div className="wrap manifesto__grid">
          <img className="manifesto__mark" src={brandMark} alt="Símbolo original de LanLabs: una nube azul" loading="lazy" data-reveal />
          <p data-fill>Menos complejidad a la vista. Más trabajo bien resuelto. Eso es lo que buscamos en cada proyecto, grande o pequeño.</p>
        </div>
      </section>
      <section className="band band--night stories">
        <div className="wrap stories__grid">
          <article>
            <div className="stories__img" data-clip><img src={cafeWeb} alt="Dos personas revisan juntos el diseño de una página web" loading="lazy" /></div>
            <p className="eyebrow"><i /> Nuestro trabajo</p>
            <h2 data-words>Escuchamos y mostramos avances.</h2>
            <p data-reveal>Empezamos por entender el negocio. Después proponemos un camino concreto, con entregas que puedes revisar y probar.</p>
          </article>
          <article className="stories__offset">
            <div className="stories__img" data-clip><img src={fiabilidad} alt="Dos personas se dan la mano junto a un portátil y documentos" loading="lazy" /></div>
            <p className="eyebrow"><i /> Nuestros valores</p>
            <h2 data-words>Claridad en cada acuerdo.</h2>
            <p data-reveal>Explicamos las decisiones, el alcance y los siguientes pasos para construir con confianza y cercanía.</p>
          </article>
        </div>
      </section>
      <section className="band band--paper principles">
        <div className="wrap">
          <div className="sect-head">
            <div><p className="eyebrow eyebrow--ink"><i /> Cómo pensamos</p><h2 data-words>Un laboratorio con <em>los pies en la tierra.</em></h2></div>
            <p data-reveal>Diseñar bien también significa explicar bien. Trabajamos contigo para que entiendas qué se construye, por qué y cómo encaja en tu negocio.</p>
          </div>
          <div className="principles__grid" data-stagger>
            {principles.map((p) => <article key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="band band--night marquee-band">
        <Marquee rows={[['React', 'n8n', 'Supabase', 'Vercel'], ['APIs', 'WhatsApp', 'Odoo', 'IA']]} />
      </section>
      <FinalCTA title={<>Conversemos sobre <em>lo que sigue.</em></>} video="/media/globe.mp4" poster="/frames/globe/075.webp" />
    </Page>
  );
}

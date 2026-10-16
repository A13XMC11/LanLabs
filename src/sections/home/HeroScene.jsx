import Scene from '../../components/Scene.jsx';
import Button from '../../components/Button.jsx';
import { getWhatsAppLink } from '../../lib/contact.js';

const chapters = [
  { n: '01', kicker: 'La idea', title: 'El trabajo repetitivo tiene salida.', body: 'Cuando cada consulta, dato y seguimiento depende de una persona, crecer se vuelve más pesado.' },
  { n: '02', kicker: 'El sistema', title: 'Conectamos todas las piezas.', body: 'Asistentes, automatizaciones y productos web diseñados alrededor de la forma en que tu negocio ya trabaja.' },
  { n: '03', kicker: 'El resultado', title: 'Tu equipo recupera tiempo.', body: 'Menos pasos manuales. Respuestas más rápidas. Una operación más clara para todos.' },
];

function build(tl, stage) {
  const $ = (s) => stage.querySelector(s);
  const all = (s) => [...stage.querySelectorAll(s)];

  tl.fromTo($('.scene__media'), { scale: 1, xPercent: 0 }, { scale: 1.32, xPercent: -6, transformOrigin: '64% 58%', duration: 1 }, 0);
  tl.fromTo($('.hero__giant'), { xPercent: 4 }, { xPercent: -42, duration: 1 }, 0);
  tl.to($('.hero__intro'), { opacity: 0, y: -90, filter: 'blur(14px)', duration: 0.14 }, 0.05);
  tl.to($('.hero__cue'), { opacity: 0, duration: 0.05 }, 0.02);
  tl.fromTo($('.hero__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);

  const windows = [[0.2, 0.46], [0.5, 0.74], [0.78, 1]];
  all('.chap').forEach((el, i) => {
    const [a, b] = windows[i];
    tl.fromTo(el, { opacity: 0, y: 70, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.07 }, a);
    if (i < windows.length - 1) tl.to(el, { opacity: 0, y: -70, filter: 'blur(10px)', duration: 0.06 }, b - 0.04);
  });
  all('.hero__steps i').forEach((el, i) => {
    tl.to(el, { opacity: 1, scaleX: 1, duration: 0.05 }, windows[i][0]);
    if (i < 2) tl.to(el, { opacity: 0.3, scaleX: 0.4, duration: 0.05 }, windows[i][1] - 0.04);
  });
}

export default function HeroScene() {
  return (
    <Scene dir="globe" className="hero" height={460} setup={build} initial={0.5}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__giant" aria-hidden="true">LANLABS · LANLABS</div>
      <div className="wrap hero__copy">
        <div className="hero__intro">
          <p className="eyebrow"><i /> Estudio digital · Ecuador</p>
          <h1 data-words data-await>Menos tareas.<br /><em>Más futuro.</em></h1>
          <p className="hero__lead">Diseñamos asistentes con IA, automatizaciones y experiencias web para que tu negocio avance con menos fricción.</p>
          <div className="hero__actions">
            <Button href={getWhatsAppLink('Hola LanLabs. Quiero conversar sobre una solución para mi negocio.')} variant="light">Cuéntanos tu idea</Button>
            <Button to="/portafolio" variant="ghost">Ver proyectos</Button>
          </div>
        </div>
        {chapters.map((c) => (
          <div className="chap" key={c.n}>
            <span className="chap__kicker">{c.n} / {c.kicker}</span>
            <h2>{c.title}</h2>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <div className="hero__hud">
        <span className="hero__cue"><i /> Desliza para explorar</span>
        <span className="hero__steps" aria-hidden="true"><i /><i /><i /></span>
        <span className="hero__bar" aria-hidden="true"><b /></span>
      </div>
    </Scene>
  );
}

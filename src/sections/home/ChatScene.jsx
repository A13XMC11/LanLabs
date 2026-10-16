import Scene from '../../components/Scene.jsx';
import Button from '../../components/Button.jsx';

const steps = [
  { n: '01', title: 'Tu cliente pregunta', body: 'WhatsApp, web o redes. Llega a cualquier hora.' },
  { n: '02', title: 'El asistente entiende', body: 'Responde con el contexto de tu negocio y recoge los datos.' },
  { n: '03', title: 'Tu equipo continúa', body: 'Recibe un contacto listo, con la información ordenada.' },
];

function build(tl, stage) {
  const all = (s) => [...stage.querySelectorAll(s)];
  tl.fromTo(stage.querySelector('.scene__media'), { scale: 1.12 }, { scale: 1, duration: 1 }, 0);
  tl.fromTo(stage.querySelector('.chat__title'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.1 }, 0.02);
  const marks = [0.14, 0.4, 0.66];
  all('.chat__step').forEach((el, i) => {
    tl.fromTo(el, { opacity: 0.18, x: -20 }, { opacity: 1, x: 0, duration: 0.06 }, marks[i]);
    if (i < 2) tl.to(el, { opacity: 0.35, duration: 0.05 }, marks[i + 1] - 0.02);
  });
  all('.chat__msg').forEach((el, i) => {
    tl.fromTo(el, { opacity: 0, scale: 0.7, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.06, ease: 'back.out(2)' }, marks[i] + 0.03);
  });
  tl.fromTo(stage.querySelector('.chat__cta'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.08 }, 0.86);
}

export default function ChatScene() {
  return (
    <Scene dir="chat" className="chat" height={380} setup={build} initial={0.4}>
      <div className="chat__frame" aria-hidden="true">
        <span className="chat__msg chat__msg--1">¿Atienden los sábados?</span>
        <span className="chat__msg chat__msg--2">Sí, hasta las 6 pm. ¿Te reservo un cupo?</span>
        <span className="chat__msg chat__msg--3">✓ Reserva confirmada</span>
      </div>
      <div className="wrap chat__copy">
        <p className="eyebrow"><i /> En la práctica</p>
        <h2 className="chat__title">Una consulta.<br /><em>Un sistema en marcha.</em></h2>
        <ol className="chat__steps">
          {steps.map((s) => (
            <li className="chat__step" key={s.n}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></li>
          ))}
        </ol>
        <div className="chat__cta"><Button to="/servicios#asistentes" variant="light">Conoce cómo lo hacemos</Button></div>
      </div>
    </Scene>
  );
}

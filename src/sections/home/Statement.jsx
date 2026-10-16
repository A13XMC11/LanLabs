import { projects } from '../../data/projects.js';

const facts = [
  { value: projects.length, suffix: '', label: 'proyectos publicados' },
  { value: 3, suffix: '', label: 'disciplinas: IA, automatización y web' },
  { value: 4, suffix: '', label: 'planes web a la medida' },
  { value: 24, suffix: '/7', label: 'asistentes siempre disponibles' },
];

export default function Statement() {
  return (
    <section className="band band--paper statement">
      <div className="wrap">
        <p className="eyebrow eyebrow--ink" data-reveal><i /> Lo que creemos</p>
        <p className="statement__text" data-fill>
          No vendemos tecnología. Hacemos que tu negocio responda más rápido, trabaje con menos pasos y crezca sin perder el trato humano.
        </p>
        <dl className="facts" data-stagger>
          {facts.map((f) => (
            <div key={f.label}>
              <dt><span data-count={f.value}>0</span>{f.suffix}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

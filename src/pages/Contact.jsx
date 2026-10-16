import { useState } from 'react';
import Page from '../components/Page.jsx';
import PageHero from '../components/PageHero.jsx';
import { getWhatsAppLink } from '../lib/contact.js';

const topics = ['Automatizar un proceso', 'Un asistente para mis clientes', 'Un sitio o app web', 'Aún no lo sé'];

const paths = [
  { n: '01', title: 'Quiero automatizar un proceso', body: 'Cuéntanos qué tarea se repite y dónde ocurre.', message: 'Hola LanLabs. Quiero automatizar un proceso en mi negocio.' },
  { n: '02', title: 'Necesito un asistente', body: 'Hablemos de tus clientes, preguntas frecuentes y canales.', message: 'Hola LanLabs. Quiero un asistente para atender a mis clientes.' },
  { n: '03', title: 'Tengo un proyecto web', body: 'Comparte la idea, el objetivo y el punto en el que estás.', message: 'Hola LanLabs. Quiero conversar sobre un proyecto web.' },
];

export default function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const who = name.trim() ? `Soy ${name.trim()}. ` : '';
    const extra = note.trim() ? ` ${note.trim()}` : '';
    window.open(getWhatsAppLink(`Hola LanLabs. ${who}Me interesa: ${topic.toLowerCase()}.${extra}`), '_blank', 'noopener,noreferrer');
  };

  return (
    <Page>
      <PageHero number="05 / 05" eyebrow="Contacto" video="chat" title={<>Toda buena idea empieza <em>con una conversación.</em></>} lead="No necesitas llegar con una solución definida. Cuéntanos qué te gustaría mejorar y encontraremos juntos un punto de partida." />
      <section className="band band--paper contact">
        <div className="wrap contact__grid">
          <form className="composer" onSubmit={submit} data-reveal>
            <p className="eyebrow eyebrow--ink"><i /> Escribe tu primer mensaje</p>
            <h2>Armemos el primer mensaje.</h2>
            <fieldset>
              <legend>¿Qué te gustaría resolver?</legend>
              <div className="chips">
                {topics.map((t) => <button type="button" key={t} className={topic === t ? 'is-active' : ''} aria-pressed={topic === t} onClick={() => setTopic(t)}>{t}</button>)}
              </div>
            </fieldset>
            <label>Tu nombre (opcional)<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej. Ana de Café Andino" autoComplete="name" /></label>
            <label>Cuéntanos un poco más (opcional)<textarea rows="3" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Qué tarea se repite, qué canal usas hoy…" /></label>
            <button className="btn btn--solid" type="submit" data-magnetic><span className="btn__label">Abrir WhatsApp con mi mensaje</span><span className="btn__arrow" aria-hidden="true">↗</span></button>
            <small>Se abre WhatsApp con el mensaje listo. Puedes editarlo antes de enviarlo.</small>
          </form>
          <div className="contact__aside">
            <p className="eyebrow eyebrow--ink"><i /> O elige un punto de partida</p>
            <div className="paths" data-stagger>
              {paths.map((p) => (
                <a href={getWhatsAppLink(p.message)} target="_blank" rel="noopener noreferrer" key={p.n}>
                  <span>{p.n}</span><div><h3>{p.title}</h3><p>{p.body}</p></div><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="band band--night direct">
        <div className="wrap direct__grid">
          <h2 data-words>Estamos del otro lado <em>de la pantalla.</em></h2>
          <div className="direct__links" data-stagger>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">WhatsApp <span>↗</span></a>
            <a href="https://t.me/alexander_mc11" target="_blank" rel="noopener noreferrer">Telegram <span>↗</span></a>
            <a href="https://instagram.com/s2.h0_" target="_blank" rel="noopener noreferrer">Instagram <span>↗</span></a>
          </div>
        </div>
      </section>
    </Page>
  );
}

import Page from '../components/Page.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <Page className="notfound">
      <section className="phero phero--full">
        <div className="phero__bg" aria-hidden="true"><video src="/media/globe.mp4" poster="/frames/globe/075.webp" autoPlay muted loop playsInline /></div>
        <div className="wrap phero__inner">
          <div className="phero__meta"><span>404</span><span>Página no encontrada</span></div>
          <h1 data-words data-await>Esta ruta no lleva <em>a ningún lugar.</em></h1>
          <div className="phero__bottom"><p>Podemos volver al inicio y encontrar un camino mejor.</p><Button to="/" variant="light">Volver al inicio</Button></div>
        </div>
      </section>
    </Page>
  );
}

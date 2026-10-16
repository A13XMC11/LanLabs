import { useEffect, useRef, useState } from 'react';
import { gsap, markReady, prefersReducedMotion } from '../lib/gsap.js';
import { loadFrames } from '../lib/frames.js';
import { lockScroll } from '../lib/smooth.js';
import symbol from '../../img/brand/symbol.png';

const MIN_MS = 1500;
const MIN_MS_REPEAT = 500;
const MAX_MS = 3500;
const SEEN_KEY = 'lanlabs:loader-seen';

function hasSeenLoader() {
  try { return sessionStorage.getItem(SEEN_KEY) === '1'; } catch { return false; }
}

function rememberLoader() {
  try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* storage blocked: loader just plays again */ }
}

export default function Loader() {
  const root = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const finishNow = () => { markReady(); root.current?.remove(); };
    if (prefersReducedMotion()) { finishNow(); return undefined; }

    lockScroll(true);
    const started = performance.now();
    const globe = loadFrames('globe', 150);
    // The chat scene is far down the page: start it only once the hero frames are usable.
    globe.coarse.then(() => loadFrames('chat', 150));

    const counter = { value: 0 };
    const tween = gsap.to(counter, { value: 92, duration: 2.4, ease: 'power2.out', onUpdate: () => setPercent(Math.round(counter.value)) });
    const timeout = new Promise((resolve) => { window.setTimeout(resolve, MAX_MS); });

    let cancelled = false;
    Promise.race([globe.coarse, timeout]).then(() => {
      const minimum = hasSeenLoader() ? MIN_MS_REPEAT : MIN_MS;
      const wait = Math.max(0, minimum - (performance.now() - started));
      window.setTimeout(() => {
        if (cancelled) return;
        tween.kill();
        gsap.to(counter, { value: 100, duration: 0.4, onUpdate: () => setPercent(Math.round(counter.value)) });
        gsap.timeline({ delay: 0.45 })
          .to('.loader__brand', { y: -30, opacity: 0, duration: 0.5, ease: 'power3.in' })
          .to(root.current, { yPercent: -100, duration: 1, ease: 'power4.inOut' }, '-=0.1')
          .add(() => { lockScroll(false); markReady(); rememberLoader(); }, '-=0.55')
          .add(() => root.current?.remove());
      }, wait);
    });
    return () => { cancelled = true; tween.kill(); lockScroll(false); };
  }, []);

  return (
    <div className="loader" ref={root} role="status" aria-label="Cargando LanLabs">
      <div className="loader__brand">
        <img src={symbol} alt="" className="loader__symbol" />
        <span className="loader__word">LanLabs</span>
      </div>
      <div className="loader__meta"><span>Menos tareas. Más futuro.</span><span>{String(percent).padStart(2, '0')}</span></div>
      <div className="loader__bar"><span style={{ transform: `scaleX(${percent / 100})` }} /></div>
    </div>
  );
}

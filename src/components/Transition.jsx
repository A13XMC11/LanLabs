import { useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '../lib/gsap.js';
import { scrollToTop } from '../lib/smooth.js';
import { TransitionContext } from '../lib/transitionContext.js';

export function TransitionProvider({ children }) {
  const curtain = useRef(null);
  const busy = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = useCallback((to) => {
    const target = typeof to === 'string' ? to : `${to.pathname}${to.hash || ''}`;
    const [path, hash] = target.split('#');
    if (busy.current) return;
    if (prefersReducedMotion() || (path === location.pathname && hash)) {
      navigate(target);
      return;
    }
    busy.current = true;
    gsap.timeline({ onComplete: () => { busy.current = false; } })
      .set(curtain.current, { display: 'grid', yPercent: 100 })
      .to(curtain.current, { yPercent: 0, duration: 0.7, ease: 'power4.inOut' })
      .add(() => { navigate(target); if (!hash) scrollToTop(); })
      .to(curtain.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.25 })
      .set(curtain.current, { display: 'none' });
  }, [navigate, location.pathname]);

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div className="curtain" ref={curtain} aria-hidden="true"><span>LanLabs</span></div>
    </TransitionContext.Provider>
  );
}

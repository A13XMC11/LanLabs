import { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap.js';
import FrameCanvas from './FrameCanvas.jsx';

// Pinned scroll scene: a frame-sequence canvas scrubbed by scroll plus a timeline for the overlay copy.
// `setup(tl, stage)` adds tweens to a 0..1 timeline that is scrubbed over the scene's scroll distance.
export default function Scene({ dir, className = '', height = 400, setup, children, mediaClass = '', initial = 0.5 }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const canvasApi = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            onUpdate: (self) => canvasApi.current?.render(self.progress),
          },
        });
        tl.set({}, {}, 1); // timeline always spans 0..1
        setup?.(tl, stageRef.current);
        canvasApi.current?.render(0);
      });
      mm.add('(prefers-reduced-motion: reduce)', () => canvasApi.current?.render(initial));
    }, rootRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reduced = prefersReducedMotion();
  return (
    <section ref={rootRef} className={`scene ${className}`} style={reduced ? undefined : { '--scene-h': `${height}vh` }}>
      <div ref={stageRef} className="scene__stage">
        <div className={`scene__media ${mediaClass}`}>
          <FrameCanvas dir={dir} apiRef={canvasApi} initial={initial} />
        </div>
        {children}
      </div>
    </section>
  );
}

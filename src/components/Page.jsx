import { useLayoutEffect, useRef } from 'react';
import { initFx } from '../lib/fx.js';

// Wraps a page's <main> and wires the shared scroll effects (data-words, data-reveal, data-fill...).
export default function Page({ children, className = '' }) {
  const ref = useRef(null);
  useLayoutEffect(() => initFx(ref.current), []);
  return <main id="main-content" ref={ref} className={`page ${className}`}>{children}</main>;
}

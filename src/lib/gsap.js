import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The loader flips this flag once the first screen is ready; hero copy waits for it.
let ready = false;
const waiting = new Set();
export function markReady() {
  ready = true;
  waiting.forEach((cb) => cb());
  waiting.clear();
}
export function whenReady(cb) {
  if (ready) cb();
  else waiting.add(cb);
  return () => waiting.delete(cb);
}

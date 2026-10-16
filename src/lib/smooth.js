import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap.js';

let lenis = null;

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis;
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export const getLenis = () => lenis;

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

export function lockScroll(locked) {
  if (lenis) (locked ? lenis.stop() : lenis.start());
  document.documentElement.classList.toggle('is-locked', locked);
}

import { gsap, ScrollTrigger, whenReady, prefersReducedMotion } from './gsap.js';

// Wraps every word of an element (keeping inline children like <em>) so it can slide in from a mask.
export function splitWords(el) {
  if (!el.dataset.split) {
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((token) => {
            if (!token) return;
            if (/^\s+$/.test(token)) {
              frag.appendChild(document.createTextNode(' '));
              return;
            }
            const outer = document.createElement('span');
            outer.className = 'w';
            const inner = document.createElement('span');
            inner.textContent = token;
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') walk(child);
      });
    };
    walk(el);
    el.dataset.split = '1';
  }
  return [...el.querySelectorAll('.w > span')];
}

const q = (root, sel) => [...root.querySelectorAll(sel)];

function wordReveals(root) {
  q(root, '[data-words]').forEach((el) => {
    const words = splitWords(el);
    const tween = gsap.from(words, {
      yPercent: 115, duration: 1.1, ease: 'power4.out', stagger: 0.05, paused: true,
    });
    if (el.hasAttribute('data-await')) whenReady(() => tween.play());
    else ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => tween.play() });
  });
}

function wordFill(root) {
  q(root, '[data-fill]').forEach((el) => {
    const words = splitWords(el).map((w) => w.parentElement);
    gsap.set(words, { opacity: 0.16 });
    gsap.to(words, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 42%', scrub: 0.5 },
    });
  });
}

function fades(root) {
  q(root, '[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 48, opacity: 0, duration: 1.1, ease: 'power3.out', delay: parseFloat(el.dataset.delay || 0),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
  q(root, '[data-stagger]').forEach((el) => {
    gsap.from(el.children, {
      y: 56, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 86%', once: true },
    });
  });
  q(root, '[data-clip]').forEach((el) => {
    const img = el.querySelector('img, video, canvas');
    gsap.fromTo(el, { clipPath: 'inset(14% 14% 14% 14% round 36px)' }, {
      clipPath: 'inset(0% 0% 0% 0% round 36px)', ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 35%', scrub: 0.6 },
    });
    if (img) {
      gsap.fromTo(img, { scale: 1.25 }, {
        scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 35%', scrub: 0.6 },
      });
    }
  });
}

function parallax(root) {
  q(root, '[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax) || 0.2;
    gsap.fromTo(el, { yPercent: -amount * 50 }, {
      yPercent: amount * 50, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
  q(root, '[data-drift]').forEach((el) => {
    const dir = parseFloat(el.dataset.drift) || -1;
    gsap.fromTo(el, { xPercent: dir > 0 ? -22 : 0 }, {
      xPercent: dir > 0 ? 0 : -22, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function counters(root) {
  q(root, '[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const state = { value: 0 };
    gsap.to(state, {
      value: target, duration: 1.8, ease: 'power3.out',
      onUpdate: () => { el.textContent = Math.round(state.value); },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

function magnetic(root) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  q(root, '[data-magnetic]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    const move = (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.28);
      y((e.clientY - (r.top + r.height / 2)) * 0.28);
    };
    const leave = () => { x(0); y(0); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
  });
}

export function initFx(root) {
  const ctx = gsap.context(() => {
    if (prefersReducedMotion()) return;
    wordReveals(root);
    wordFill(root);
    fades(root);
    parallax(root);
    counters(root);
    magnetic(root);
  }, root);
  const refresh = () => ScrollTrigger.refresh();
  const timer = window.setTimeout(refresh, 600);
  window.addEventListener('load', refresh, { once: true });
  document.fonts?.ready.then(refresh);
  return () => { window.clearTimeout(timer); ctx.revert(); };
}

// Frame-sequence cache: every scene reads the same decoded frames (MotionFrame-style scrubbing).
const cache = new Map();
const COARSE_STEP = 3;

export const framePath = (dir, index) => `/frames/${dir}/${String(index + 1).padStart(3, '0')}.webp`;

function loadOne(entry, dir, index) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      entry.images[index] = img;
      entry.loaded += 1;
      if (!entry.coarseDone && entry.loaded >= Math.ceil(entry.count / COARSE_STEP)) {
        entry.coarseDone = true;
        entry.resolveCoarse();
      }
      entry.listeners.forEach((fn) => fn(entry.loaded / entry.count));
      resolve();
    };
    img.onerror = resolve;
    img.src = framePath(dir, index);
  });
}

export function loadFrames(dir, count) {
  const existing = cache.get(dir);
  if (existing) return existing;

  const entry = {
    dir, count, images: new Array(count).fill(null), loaded: 0, coarseDone: false, listeners: new Set(),
  };
  entry.coarse = new Promise((resolve) => { entry.resolveCoarse = resolve; });
  cache.set(dir, entry);

  // Sparse pass first so any scroll position has a nearby frame, then fill the gaps.
  const order = [];
  for (let phase = 0; phase < COARSE_STEP; phase += 1) {
    for (let i = phase; i < count; i += COARSE_STEP) order.push(i);
  }
  let cursor = 0;
  const worker = async () => {
    while (cursor < order.length) {
      const index = order[cursor];
      cursor += 1;
      await loadOne(entry, dir, index);
    }
  };
  Array.from({ length: 6 }, worker);
  return entry;
}

export function nearestFrame(entry, index) {
  const { images, count } = entry;
  for (let d = 0; d < count; d += 1) {
    const a = images[index - d];
    if (a) return a;
    const b = images[index + d];
    if (b) return b;
  }
  return null;
}

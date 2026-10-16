import { useEffect, useImperativeHandle, useRef } from 'react';
import { loadFrames, nearestFrame } from '../lib/frames.js';

const MAX_DPR = 1.6;

// Draws a pre-extracted video frame sequence on a canvas. The parent drives it with ref.render(0..1).
export default function FrameCanvas({ dir, count = 150, className = '', apiRef, initial = 0, cover = false, focus = 0.6 }) {
  const canvasRef = useRef(null);
  const state = useRef({ progress: initial, entry: null, frame: -1 });

  const draw = () => {
    const canvas = canvasRef.current;
    const { entry, progress } = state.current;
    if (!canvas || !entry) return;
    const ctx = canvas.getContext('2d');
    const position = progress * (entry.count - 1);
    const base = Math.floor(position);
    const mix = position - base;
    const a = nearestFrame(entry, base);
    if (!a) return;
    const paint = (img) => {
      if (!cover) { ctx.drawImage(img, 0, 0, canvas.width, canvas.height); return; }
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const sw = canvas.width / scale;
      const sh = canvas.height / scale;
      ctx.drawImage(img, (img.naturalWidth - sw) * focus, (img.naturalHeight - sh) / 2, sw, sh, 0, 0, canvas.width, canvas.height);
    };
    ctx.globalAlpha = 1;
    paint(a);
    const b = mix > 0.02 ? entry.images[Math.min(entry.count - 1, base + 1)] : null;
    if (b && b !== a) {
      ctx.globalAlpha = mix;
      paint(b);
      ctx.globalAlpha = 1;
    }
  };

  useImperativeHandle(apiRef, () => ({
    render(progress) {
      state.current.progress = Math.min(1, Math.max(0, progress));
      draw();
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const entry = loadFrames(dir, count);
    state.current.entry = entry;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const { width, height } = canvas.getBoundingClientRect();
      if (!width) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    const onLoad = () => draw();
    entry.listeners.add(onLoad);
    return () => { observer.disconnect(); entry.listeners.delete(onLoad); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dir, count]);

  return <canvas ref={canvasRef} className={`frame-canvas ${cover ? 'frame-canvas--fill' : ''} ${className}`} aria-hidden="true" />;
}

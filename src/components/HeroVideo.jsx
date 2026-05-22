// Scroll-driven video hero — video.currentTime scrubs with scroll position
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton.jsx';
import { HiArrowRight } from 'react-icons/hi';

function phase(p, start, end) {
  if (p <= start) return 0;
  if (p >= end) return 1;
  return (p - start) / (end - start);
}

export default function HeroVideo() {
  const containerRef = useRef(null);
  const videoRef     = useRef(null);
  const rafRef       = useRef(null);

  const [progress,    setProgress]    = useState(0);
  const [videoReady,  setVideoReady]  = useState(false);
  const [isMobile,    setIsMobile]    = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );
  const isMobileRef = useRef(typeof window !== 'undefined' && window.innerWidth < 768);

  // ── Mobile detection ────────────────────────────────────────────────
  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 768;
      setIsMobile(m);
      isMobileRef.current = m;
    };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Scroll → video scrub ────────────────────────────────────────────
  const tick = useCallback(() => {
    const container = containerRef.current;
    const video     = videoRef.current;
    if (!container) return;

    const rect       = container.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const scrolled   = Math.max(0, -rect.top);
    const p          = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;

    setProgress(p);
    if (!isMobileRef.current && video && video.readyState >= 2 && video.duration) {
      video.currentTime = p * video.duration;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  // ── Mobile: autoplay once ───────────────────────────────────────────
  useEffect(() => {
    if (!isMobile || !videoReady) return;
    videoRef.current?.play().catch(() => {});
  }, [isMobile, videoReady]);

  // ── Opacity phases ──────────────────────────────────────────────────
  // On mobile: all elements visible immediately so CTAs are always reachable
  const subtextOp    = isMobile ? phase(progress, 0, 0.10)    : phase(progress, 0.12, 0.28);
  const ctaOp        = isMobile ? phase(progress, 0.02, 0.14) : phase(progress, 0.38, 0.52);
  const statsOp      = isMobile ? phase(progress, 0.10, 0.25) : phase(progress, 0.64, 0.78);
  const scrollHintOp = progress < 0.04 ? 1 - progress / 0.04 : 0;

  const tY = (op) => (op < 0.98 ? `${(1 - op) * 16}px` : '0px');

  // ── Responsive values ───────────────────────────────────────────────
  // Mobile: 200vh → scrollable = 100vh of scrub room (video plays across 1 screen height of scroll)
  // Desktop: 280vh → more cinematic, slower reveal
  const containerH = isMobile ? '200vh' : '280vh';

  // Mobile: vertical gradient (text top, video visible in lower half)
  // Desktop: horizontal gradient (text left, video right)
  const overlayAlpha = isMobile ? 1 : (0.72 + progress * 0.12);
  const mainOverlay  = isMobile
    ? `linear-gradient(
        to bottom,
        rgba(2,16,36,0.88) 0%,
        rgba(2,16,36,0.78) 28%,
        rgba(2,16,36,0.50) 48%,
        rgba(2,16,36,0.12) 63%,
        rgba(2,16,36,0.05) 78%,
        rgba(2,16,36,0.42) 100%
      )`
    : `linear-gradient(
        108deg,
        rgba(2,16,36,${overlayAlpha})        0%,
        rgba(2,16,36,${overlayAlpha - 0.15}) 38%,
        rgba(2,16,36,${overlayAlpha - 0.40}) 62%,
        rgba(2,16,36,0.08)                   100%
      )`;

  // Font size: smaller on mobile for line wrapping
  const headingSize = isMobile ? 'clamp(36px, 9vw, 54px)' : 'clamp(48px, 6.5vw, 88px)';

  // Text shadow: essential on mobile where background can bleed through
  const headingShadow = '0 2px 28px rgba(2,16,36,0.85), 0 0 60px rgba(2,16,36,0.5)';

  return (
    // ── Scroll container ──────────────────────────────────────────────
    <div ref={containerRef} style={{ height: containerH }}>

      {/* ── Sticky viewport ─────────────────────────────────────────── */}
      {/* poster as CSS bg = instant first frame, no FOUC */}
      {/* h-screen fallback + dvh fix for iOS Safari (browser chrome changes vh) */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          height: '100dvh',
          backgroundImage: 'url(/hero-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? '72% center' : 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#021024',
        }}
      >
        {/* Video — layers on top, replaces poster once loaded */}
        <video
          ref={videoRef}
          className="absolute"
          style={{
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: isMobile ? '72% center' : 'center center',
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
          preload="auto"
          muted
          playsInline
          onLoadedData={() => setVideoReady(true)}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* ── Gradient overlays ──────────────────────────────────────── */}
        {/* Main directional overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: mainOverlay }}
        />
        {/* Top vignette (navbar breathing room) */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: isMobile ? '160px' : '140px',
            background: 'linear-gradient(to bottom, rgba(2,16,36,0.75) 0%, transparent 100%)',
          }}
        />
        {/* Bottom vignette (progress bar area) */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: isMobile ? '120px' : '180px',
            background: 'linear-gradient(to top, rgba(2,16,36,1) 0%, rgba(2,16,36,0.6) 50%, transparent 100%)',
          }}
        />

        {/* ── Left-edge vertical progress accent (desktop only) ─────── */}
        {!isMobile && (
          <div
            className="absolute left-0 top-0 bottom-0 pointer-events-none z-10"
            style={{ width: '3px', background: 'rgba(84,131,179,0.12)' }}
          >
            <div
              style={{
                height: `${progress * 100}%`,
                background: 'linear-gradient(to bottom, #5483B3, #C1E8FF)',
                width: '100%',
              }}
            />
          </div>
        )}

        {/* ── Content ─────────────────────────────────────────────────── */}
        <div
          className="relative h-full flex flex-col z-10"
          style={{
            padding: isMobile
              ? '0 20px'
              : '0 80px',
            justifyContent: isMobile ? 'flex-start' : 'space-between',
          }}
        >

          {/* TOP: eyebrow ─────────────────────────────────────────────── */}
          <div style={{ paddingTop: isMobile ? '88px' : '112px' }}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                         text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(193,232,255,0.20)',
                color: 'rgba(193,232,255,0.85)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              IA · Automatización · Web
            </div>
          </div>

          {/* COPY BLOCK: H1 + subtext + CTAs ─────────────────────────── */}
          <div style={{ marginTop: isMobile ? '24px' : 0 }}>
            {/* H1 */}
            <h1
              className="font-display font-bold text-white tracking-tight"
              style={{
                fontSize: headingSize,
                lineHeight: 1.05,
                textShadow: headingShadow,
                marginBottom: isMobile ? '16px' : '24px',
              }}
            >
              Tu negocio<br />
              trabaja solo.<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #C1E8FF 45%, #7DA0CA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 18px rgba(2,16,36,0.9))',
                }}
              >
                Tú escalas.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="text-slate-300"
              style={{
                fontSize: isMobile ? '14px' : 'clamp(15px, 1.6vw, 19px)',
                lineHeight: 1.65,
                maxWidth: isMobile ? '100%' : '480px',
                opacity: subtextOp,
                transform: `translateY(${tY(subtextOp)})`,
                transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
                marginBottom: isMobile ? '20px' : '32px',
                textShadow: '0 1px 12px rgba(2,16,36,0.7)',
              }}
            >
              Bots de WhatsApp con IA, automatización de procesos y páginas
              que captan clientes — para que crezcas sin trabajar más.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center"
              style={{
                gap: isMobile ? '10px' : '12px',
                opacity: ctaOp,
                transform: `translateY(${tY(ctaOp)})`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
              }}
            >
              <CTAButton size={isMobile ? 'md' : 'lg'}>
                {isMobile ? 'Automatizar mi negocio' : 'Quiero automatizar mi negocio'}
              </CTAButton>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-1.5 text-slate-200
                           hover:text-white transition-colors duration-200 cursor-pointer font-medium"
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  padding: isMobile ? '10px 16px' : '12px 24px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.20)',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                Ver soluciones
                <HiArrowRight style={{ width: '14px', height: '14px' }} />
              </Link>
            </div>
          </div>

          {/* SPACER on desktop — pushes stats to bottom */}
          {!isMobile && <div className="flex-1" />}

          {/* BOTTOM: stats + progress bar ─────────────────────────────── */}
          <div style={{ paddingBottom: isMobile ? '20px' : '28px', marginTop: isMobile ? 'auto' : 0 }}>

            {/* Stats strip */}
            <div
              className="flex flex-wrap items-center"
              style={{
                gap: isMobile ? '16px 20px' : '28px',
                marginBottom: isMobile ? '14px' : '20px',
                opacity: statsOp,
                transform: `translateY(${tY(statsOp)})`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
              }}
            >
              {[
                { n: '10+',  l: 'proyectos' },
                { n: '3',    l: 'países' },
                { n: '500h+',l: 'automatizadas' },
                { n: '24/7', l: 'activo' },
              ].map(({ n, l }) => (
                <div key={l} style={{ textShadow: '0 1px 8px rgba(2,16,36,0.8)' }}>
                  <p
                    className="font-display font-bold text-white leading-none"
                    style={{ fontSize: isMobile ? '18px' : '22px' }}
                  >
                    {n}
                  </p>
                  <p
                    className="text-slate-400 tracking-wide uppercase"
                    style={{ fontSize: '9px', marginTop: '3px' }}
                  >
                    {l}
                  </p>
                </div>
              ))}

              {!isMobile && (
                <>
                  <div className="w-px bg-slate-700/50" style={{ height: '32px' }} />
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {['Sin contrato largo', 'Resultados en días', 'Soporte incluido'].map((t) => (
                      <span key={t} className="inline-flex items-center gap-1.5 text-slate-400 text-xs">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Progress bar */}
            <div className="relative flex items-center gap-3">
              <div
                className="flex-1 rounded-full overflow-hidden"
                style={{ height: '2px', background: 'rgba(255,255,255,0.10)' }}
              >
                <div
                  style={{
                    width: `${progress * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(to right, #5483B3, #C1E8FF)',
                    borderRadius: '9999px',
                  }}
                />
              </div>

              <span
                className="font-mono text-slate-500 shrink-0 tabular-nums"
                style={{ fontSize: '10px', minWidth: '3ch' }}
              >
                {Math.round(progress * 100)}%
              </span>

              {/* Scroll hint */}
              <div
                className="absolute flex flex-col items-center gap-1 pointer-events-none"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: isMobile ? '18px' : '22px',
                  opacity: scrollHintOp,
                  transition: 'opacity 0.4s ease',
                }}
              >
                <span
                  className="text-white/30 tracking-widest uppercase"
                  style={{ fontSize: '10px' }}
                >
                  Desliza
                </span>
                <svg className="animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v10M8 13l-3.5-3.5M8 13l3.5-3.5"
                    stroke="rgba(255,255,255,0.28)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

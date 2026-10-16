import { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import { TransitionProvider } from './components/Transition.jsx';
import { ScrollTrigger } from './lib/gsap.js';
import { startSmoothScroll } from './lib/smooth.js';

import Home from './pages/Home.jsx';
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Planes = lazy(() => import('./pages/Planes.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const pageTitles = {
  '/': 'LanLabs | Menos tareas. Más futuro.',
  '/servicios': 'Servicios | LanLabs',
  '/portafolio': 'Proyectos | LanLabs',
  '/sobre': 'El estudio | LanLabs',
  '/planes': 'Planes web | LanLabs',
  '/contacto': 'Contacto | LanLabs',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || 'Página no encontrada | LanLabs';
  }, [pathname]);

  useLayoutEffect(() => {
    if (hash) return undefined;
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    return undefined;
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { startSmoothScroll(); }, []);

  return (
    <TransitionProvider>
      <Loader />
      <RouteEffects />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home key={pathname} />} />
          <Route path="/sobre" element={<About key={pathname} />} />
          <Route path="/servicios" element={<Services key={pathname} />} />
          <Route path="/portafolio" element={<Portfolio key={pathname} />} />
          <Route path="/contacto" element={<Contact key={pathname} />} />
          <Route path="/planes" element={<Planes key={pathname} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </TransitionProvider>
  );
}

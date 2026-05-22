// src/App.jsx
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ContactFloat from './components/ContactFloat.jsx';

import Home from './pages/Home.jsx';
const About     = lazy(() => import('./pages/About.jsx'));
const Services  = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Contact   = lazy(() => import('./pages/Contact.jsx'));
const Planes    = lazy(() => import('./pages/Planes.jsx'));

function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-lan-dark text-slate-900 dark:text-slate-100">
      <Header theme={theme} />
      <Suspense fallback={null}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/planes" element={<Planes />} />
          </Routes>
        </PageWrapper>
      </Suspense>
      <Footer />
      <ContactFloat />
    </div>
  );
}

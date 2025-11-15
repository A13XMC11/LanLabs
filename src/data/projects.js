// src/data/projects.js
import imgMontreal from '../../img/portafolio/montreal.png';
import imgFTSamuelMartinez from '../../img/portafolio/ftsamuelmartinez.png';
import imgRecetarioDigital from '../../img/portafolio/recetario-digital.png';
import imgControlVehicular from '../../img/portafolio/control-vehicular.png';

export const projects = [
  {
    id: 1,
    title: 'Montreal Fast Food',
    category: 'Web',
    description: 'Landing rápida y visual para un restaurante, enfocada en antojar y convertir.',
    stack: ['React', 'Tailwind', 'Vercel'],
    url: 'https://montreal-fastfood.vercel.app/',
    impact: 'Más claridad en el menú y pedidos más organizados.',
    img: imgMontreal,
  },
  {
    id: 2,
    title: 'FTSamuelMartinez',
    category: 'Web',
    description: 'Sitio profesional para centro de fisioterapia, con enfoque en claridad y confianza.',
    stack: ['React', 'Tailwind', 'Vercel'],
    url: 'https://ftsamuelmartinez.vercel.app/',
    impact: 'Mejor presentación de servicios y contacto más directo con pacientes.',
    img: imgFTSamuelMartinez,
  },
  {
    id: 3,
    title: 'Recetario Digital',
    category: 'Web',
    description: 'App para organizar recetas con categorías y vista clara de ingredientes.',
    stack: ['React', 'Local Storage'],
    url: '#',
    impact: 'Ahorro de tiempo buscando recetas dispersas.',
    img: imgRecetarioDigital,
  },
  {
    id: 4,
    title: 'Control Vehicular – MotorPlaza',
    category: 'Dashboard',
    description: 'Sistema para gestionar vehículos, mantenimientos y evidencias con reportes automáticos.',
    stack: ['Node.js', 'React', 'SQLite', 'n8n'],
    url: '#',
    impact: 'Más control, menos errores y reportes automáticos diarios.',
    img: imgControlVehicular,
  },
];

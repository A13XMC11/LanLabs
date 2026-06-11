import imgSprint from '../../img/portafolio/sprint.png';
import imgAquaGroup from '../../img/portafolio/aquagroup.png';
import imgRecetarioDigital from '../../img/portafolio/recetario-digital.png';
import imgControlVehicular from '../../img/portafolio/control-vehicular.png';

export const projects = [
  {
    id: 1,
    title: 'Sprint',
    category: 'Web',
    description: 'Sitio para agencia creativa y estratégica enfocada en marca, contenido y posicionamiento digital.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://sprintuio.com/',
    impact: 'Presencia digital más clara para comunicar servicios, proyectos y propuesta de valor.',
    img: imgSprint,
  },
  {
    id: 2,
    title: 'AquaGroup',
    category: 'Web',
    description: 'Sitio institucional para soluciones de tratamiento de agua, tanques PRFV y proyectos industriales.',
    stack: ['Odoo', 'Diseño Web', 'Contenido'],
    url: 'https://aquagroup.odoo.com/',
    impact: 'Proyecto desarrollado como equipo tercerizado por derivación de Sointem.',
    img: imgAquaGroup,
  },
  {
    id: 3,
    title: 'Fundación Árbol de Vida',
    category: 'Web App',
    description: 'Recetario digital para organizar y consultar preparaciones con una experiencia simple y accesible.',
    stack: ['React', 'Vercel'],
    url: 'https://recetas-arbol-vida.vercel.app/',
    impact: 'Recetas centralizadas en una app web fácil de compartir y consultar.',
    img: imgRecetarioDigital,
  },
  {
    id: 4,
    title: 'Control Vehicular - MotorPlaza',
    category: 'Dashboard',
    description: 'Sistema para gestionar vehículos, mantenimientos y evidencias con reportes automáticos.',
    stack: ['Node.js', 'React', 'SQLite', 'n8n'],
    url: '#',
    impact: 'Más control, menos errores y reportes automáticos diarios.',
    img: imgControlVehicular,
  },
];

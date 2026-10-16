# LanLabs

Sitio de LanLabs construido con React 19, Vite y CSS. Incluye Home narrativo con fotogramas controlados por scroll (GSAP + Lenis), páginas de Servicios, Sobre, Portafolio, Planes y Contacto, y una página 404.

## Desarrollo

```bash
npm install
npm run dev
```

Verificación:

```bash
npm run lint
npm run build
```

## Animación por scroll (MotionFrame)

Los dos videos del monito (`Source1.mp4`, `Source2.mp4`) se extraen en secuencias de fotogramas WebP (150 cada una, 15 fps) que se dibujan en un `<canvas>` según el scroll. Es más fluido que mover `video.currentTime`, funciona igual en Safari y se puede mezclar con el texto de la página.

- `public/frames/globe/` y `public/frames/chat/`: fotogramas (`001.webp` … `150.webp`).
- `public/media/globe.mp4` y `chat.mp4`: los mismos videos en bucle para fondos y tarjetas.
- `src/lib/frames.js`: carga progresiva (primero fotogramas espaciados, luego el resto) y caché compartida.
- `src/components/FrameCanvas.jsx`: dibuja el fotograma con mezcla entre vecinos.
- `src/components/Scene.jsx` y `StoryScene.jsx`: escenas ancladas (pin) con línea de tiempo de GSAP ScrollTrigger.
- `src/lib/smooth.js`: scroll suave con Lenis sincronizado con GSAP.
- `src/lib/fx.js`: efectos declarativos por atributo: `data-words`, `data-fill`, `data-reveal`, `data-stagger`, `data-clip`, `data-parallax`, `data-drift`, `data-count`, `data-magnetic`.

Para regenerar los fotogramas desde un video:

```bash
ffmpeg -i Source1.mp4 -vf "fps=15,scale=960:-2" frames/%03d.png
for f in frames/*.png; do cwebp -q 68 -m 6 "$f" -o "public/frames/globe/$(basename ${f%.png}).webp"; done
```

Con `prefers-reduced-motion` se desactivan el scroll suave, los pines y las animaciones.

## Contenido

Los proyectos y sus enlaces están en `src/data/projects.js`. Los rangos de precios se encuentran en `src/pages/Planes.jsx`. El número de WhatsApp se configura en `src/lib/contact.js`. El widget de chat existente se carga desde `index.html`.

## Publicación

La configuración de Vercel está en `vercel.json`. El rediseño se revisa localmente antes de desplegarlo.

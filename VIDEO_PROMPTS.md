# Prompts de imagen y video para LanLabs

## Estado de la web

Los videos `Source1.mp4` y `Source2.mp4` ya están integrados. El primero se controla con el scroll en el Home; el segundo acompaña la sección de asistentes en Servicios. La escena de automatización se anima con CSS, así que **no hace falta generar un tercer video para publicar esta versión**. Los prompts de abajo quedan como guía opcional para futuras escenas.

## Fuente de verdad

El archivo [`MONITO_EXPLORADOR.json`](./MONITO_EXPLORADOR.json) contiene el personaje maestro que compartiste. **Sus rasgos tienen prioridad sobre el poster y sobre cualquier instrucción de escena.** `public/hero-poster.jpg` y `hero-desktop.jpeg` sirven para recordar el entorno, la Tierra, las nubes y la composición anterior; el mono que aparece allí no debe usarse para modificar al Monito Explorador del JSON.

El personaje es un mono antropomórfico chibi 2D, curioso, inteligente, aventurero, tierno y juvenil. Tiene cabeza azul muy grande y redonda, máscara facial celeste, dos ojos ovalados oscuros sin iris, sonrisa pequeña, orejas redondas, **gafas ópticas circulares transparentes**, cuerpo compacto, piernas muy cortas, **cola azul pequeña y curvada** y **mochila café de explorador** con volumen, por debajo de la nuca. Sus contornos son gruesos, continuos y azul marino. No debe convertirse en un mono realista ni en un personaje 3D.

### Colores: marca y personaje

- **Entorno y sitio:** `#021024`, `#052659`, `#5483B3`, `#7DA0CA`, `#C1E8FF`.
- **Personaje:** respetar el JSON y la imagen maestra aprobada. Rostro `#B8F1F4`, cuerpo `#164A9A`, contornos `#10172F`, gafas `#101B43`, mochila `#B86B32` con detalles café/caramelo. El violeta `#756AF0` solo aparece como reflejo suave en la cabeza y orejas. **El café de la mochila y el reflejo violeta son excepciones intencionales a la paleta del sitio; no deben eliminarse.**

## Orden de trabajo

1. En ChatGPT, adjunta `MONITO_EXPLORADOR.json` y, si la tienes, la imagen original exacta del Monito Explorador. Genera y aprueba una imagen maestra antes de pedir escenas.
2. Para cada escena, adjunta el JSON y la imagen maestra aprobada. Adjunta `img/Logo.PNG` y `public/hero-poster.jpg` solo como referencias del mundo visual de LanLabs. El logo se coloca como archivo real en la web; no pidas a la IA que escriba «LanLabs».
3. En Flow con Omni, usa la imagen de la escena como fotograma inicial o referencia. El prompt de video repite los rasgos esenciales porque Flow puede no leer el JSON. Genera movimientos pequeños para reducir cambios de anatomía.
4. Revisa cada fotograma. Si desaparecen las gafas, la mochila o la cola, o cambian la cara y las proporciones, descarta ese video. Si el modelo sigue deformando al mono, conserva el personaje como ilustración fija en la página y anima el entorno por separado.

## 0. Imagen maestra del personaje en ChatGPT

Adjunta **primero** `MONITO_EXPLORADOR.json` y la imagen original exacta del personaje, si está disponible. El JSON define lo que no puede cambiar.

```text
Create a clean full-body master reference of the SAME “Monito Explorador” defined in the attached JSON. The JSON and the supplied original character image are the highest-priority identity references. Show the character in a gentle three-quarter view, standing naturally, with the whole body inside the frame and enough visibility to inspect both glasses, both backpack straps, the backpack volume below the nape, and the small curved blue tail. Preserve the very large perfectly rounded dark-blue head, pale-cyan facial mask, two simple dark vertical-oval eyes without irises, small curved smile, large round ears, circular transparent optical glasses with dark-blue frames, compact blue body, very short legs, pale-cyan hands and feet, thick continuous navy outlines, smooth blue gradients, subtle blue-violet head reflection, and compact brown adventurer backpack with flap, buckle and side pockets. Modern polished 2D vector chibi mascot art with only light visual volume. Personality: curious, intelligent, friendly, adventurous, tender and youthful; calm confidence rather than exaggerated excitement. Plain #021024 background, no scenery, props, text or extra accessories. No realistic fur, no photorealism, no 3D modeling, no sunglasses, no missing backpack, no hidden tail, no long limbs. Do not redesign the character.
```

**Aprobación visual:** comparar la imagen maestra con el JSON antes de generar videos. La expresión puede cambiar después; anatomía, gafas, mochila, cola y estilo no.

## 1. Home — explorar una ruta más clara

**Uso:** video principal controlado por scroll. Formato 16:9, unos 8 segundos. El 45 % izquierdo permanece oscuro para el texto HTML.

### Imagen base en ChatGPT

Adjunta el JSON, la imagen maestra aprobada, el logo original y el poster anterior. El poster define el entorno, **no** la anatomía del mono.

```text
Create a wide 16:9 LanLabs homepage keyframe using the attached Monito Explorador JSON and approved master image as STRICT character references. The original LanLabs poster is only a background/composition reference; if it conflicts with the JSON, follow the JSON. On the RIGHT half, show the Monito Explorador in a three-quarter standing pose, curious and calm, looking at a simple blue route that begins as separate points and becomes connected among a few soft cloud shapes. One hand gestures toward the next point; the brown adventurer backpack stays below the nape with both straps visible, and the small curved tail remains visible. Preserve round transparent glasses, giant round head, cyan face, oval eyes, tiny smile, very short legs, thick navy outlines and polished 2D vector chibi style. The LEFT 45% is quiet dark navy #021024 for real HTML headlines. Environment uses the LanLabs blues #021024, #052659, #5483B3, #7DA0CA and #C1E8FF. Character colors follow the JSON, including the brown backpack and subtle violet head highlight. Do not add a rocket or helmet to the character. No generated logo, letters, UI, new mascot, photorealism or 3D rendering.
```

### Video en Flow con Omni

```text
Animate the supplied approved LanLabs keyframe as one continuous approximately eight-second shot. Character identity is locked: same chibi blue monkey, oversized round head, cyan facial mask, two dark oval eyes, circular transparent optical glasses, compact blue body, very short legs, small curved blue tail, and compact brown explorer backpack below the nape with visible shoulder straps. Preserve thick rounded navy outlines and polished 2D vector shading. The Monito Explorador takes only two small steps, looks curiously toward the route, and gently points as three blue route points light up in sequence on the RIGHT. Expression stays softly smiling and intelligent. Keep the LEFT 45% dark and still for HTML text. Hold the first and last second nearly motionless. Camera locked or at most 3% push-in. No morphing, lost glasses, missing tail, backpack moving to the head, longer limbs, extra accessories, generated text, audio or cuts. 16:9.
```

## 2. Servicios — una conversación bien guiada

**Uso:** bloque de asistentes. Mantener la misma imagen maestra y personalidad.

### Imagen base en ChatGPT

```text
Using the attached Monito Explorador JSON, approved character master and approved scene 01 as strict references, create a 16:9 LanLabs service keyframe in the same polished 2D vector chibi style. On the RIGHT, the Monito Explorador gently guides three blank rounded speech shapes along a clear path. He looks attentive, curious and helpful, with a small natural smile; do not turn him into a robot, superhero, sales mascot or hyperactive cartoon. Show circular transparent dark-blue glasses, giant round head, cyan facial mask, compact body, very short legs, blue curved tail and brown explorer backpack below the nape. Keep the backpack straps and tail visible in the three-quarter pose. Thick continuous navy outlines, simple smooth gradients and clean surfaces. Environment uses the LanLabs website blues; character colors follow the JSON, including brown and soft violet accents. Leave the LEFT 45% dark and uncluttered for HTML text. No written messages, fake chat interface, generated logo, 3D rendering, realistic fur or added clothing.
```

### Video en Flow con Omni

```text
Make one continuous approximately eight-second animation from the supplied scene 02 keyframe. Lock the Monito Explorador's design to the approved image: circular transparent glasses, cyan face, two simple oval eyes, giant round head, very short legs, small curved tail and low compact brown adventurer backpack with visible straps. He makes one gentle hand gesture while three blank speech shapes illuminate in order and settle into place. Keep his expression attentive, kind, curious and calm. Keep movement small so anatomy and accessories remain unchanged. Preserve 2D vector art, thick rounded outlines and the LanLabs blue environment; keep the brown backpack and subtle violet head reflection. The LEFT 45% stays dark for website copy. First and last second nearly still. No cuts, audio, words, morphing, missing accessories, extra characters or fake UI. 16:9.
```

## 3. Automatización — conectar los pasos

**Uso:** sección de automatización o transición hacia proyectos.

### Imagen base en ChatGPT

```text
Create a third 16:9 LanLabs keyframe using the attached Monito Explorador JSON, approved character master and previous approved scenes. The same Monito Explorador stands on the RIGHT beside three soft blue cloud-shaped stations linked by one fine ice-blue path. He studies the path with a curious, thoughtful expression and points to the final station. The composition communicates that separate tasks are now connected. Preserve his exactly round oversized head, cyan mask, dark oval eyes without irises, transparent circular optical glasses, small smile, compact blue torso, very short legs, pale-cyan hands and feet, small curved blue tail, and low brown explorer backpack with visible straps. Use thick smooth navy outlines and gentle gradients, strictly 2D vector chibi art with light visual volume. The LEFT 45% is dark #021024 for real HTML text. The environment uses LanLabs blues; the character keeps the brown backpack and restrained violet head highlight from his JSON. No realistic monkey, no 3D model, no new clothes, no generic glass dashboard, no generated text or logo.
```

### Video en Flow con Omni

```text
Animate the supplied scene 03 keyframe as one continuous approximately eight-second shot. The same Monito Explorador remains clearly identifiable in every frame, with round transparent glasses, huge round head, cyan face, two dark oval eyes, compact body, very short legs, small curved blue tail, low brown explorer backpack and thick navy vector outlines. One soft ice-blue signal moves through the three cloud stations on the RIGHT. The character follows it with a small eye and head movement, then gives one calm satisfied smile. Keep backpack position, tail curve, facial structure and proportions unchanged. Use only subtle parallax in the blue background; keep the character's art flat 2D with gentle gradients. The LEFT 45% remains dark for HTML copy. Hold beginning and end nearly still. No cuts, audio, generated words, morphing, extra accessories or photorealistic rendering. 16:9.
```

## Archivos para integrar

Si más adelante generas otra escena, conserva la imagen maestra aprobada y una imagen fija para el poster. Para móvil, conviene preparar una composición vertical si el recorte horizontal oculta mochila o cola. El logo exacto seguirá colocado con los recursos originales de la web.

# REFERENCIAS — Bug Detector

Proyecto Personal IF7102 Multimedios | I Ciclo 2026

---

## Documentación oficial consultada

- **React Docs — Quick Start**  
  https://react.dev/learn  
  Conceptos básicos de React: componentes, props, estado con useState.

- **React Docs — Hooks Reference: useEffect**  
  https://react.dev/reference/react/useEffect  
  Para entender el ciclo de vida y cómo cargar datos con fetch() al montar un componente.

- **React Docs — Hooks Reference: useCallback**  
  https://react.dev/reference/react/useCallback  
  Usado para estabilizar el handler del timeout en GameScreen y evitar re-renders innecesarios.

- **React Docs — Renderizado condicional**  
  https://react.dev/learn/conditional-rendering  
  Para mostrar distintas pantallas (start, game, result) según el estado del juego.

- **Vite — Getting Started**  
  https://vite.dev/guide/  
  Configuración del proyecto y estructura de archivos estáticos en `public/`.

- **MDN Web Docs — Fetch API**  
  https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch  
  Para cargar el archivo `questions.json` dinámicamente con `fetch()`.

- **MDN Web Docs — HTMLAudioElement**  
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio  
  Para reproducir efectos de sonido con `new Audio(src).play()`.

- **MDN Web Docs — Array.prototype.sort()**  
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort  
  Consultado para entender por qué sort() sin parámetros ordena como texto (pregunta 10 del quiz).

- **MDN Web Docs — KeyboardEvent / addEventListener**  
  https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent  
  Para capturar eventos de teclado con `window.addEventListener('keydown', ...)` y leer `e.key` para seleccionar opciones con las teclas 1–4 y avanzar con Enter.

---

## Tutoriales y recursos de aprendizaje

- **React Tutorial for Beginners — Programming with Mosh (YouTube)**  
  https://www.youtube.com/watch?v=SqcY0GlETPk  
  Tutorial de introducción a React: componentes funcionales, useState, props.

- **Learn React in 2024 — Web Dev Simplified (YouTube)**  
  https://www.youtube.com/watch?v=x55GKS_R_Sc  
  Patrones modernos de React con hooks y cómo estructurar aplicaciones.

- **React useState Hook — W3Schools**  
  https://www.w3schools.com/react/react_usestate.asp  
  Referencia rápida sobre cómo usar useState con ejemplos.

- **React useEffect Hook — W3Schools**  
  https://www.w3schools.com/react/react_useeffect.asp  
  Ejemplos de useEffect para temporizadores y limpieza con clearTimeout.

---

## Recursos multimedia utilizados

### Ilustraciones SVG — Undraw.co

Descargadas de **[Undraw.co](https://undraw.co)** bajo licencia abierta (uso libre sin atribución requerida).  
Artista: Katerina Limpitsouni.

| Archivo | Nombre en Undraw | Uso en el proyecto |
|---|---|---|
| `public/images/welcome.svg` | Welcome Cats | Pantalla de inicio |
| `public/images/proud-coder.svg` | Proud Coder | Pantalla de resultado — puntaje alto (≥80%) |
| `public/images/programming.svg` | Programming | Pantalla de resultado — puntaje medio (50–79%) |
| `public/images/fixing-bugs.svg` | Fixing Bugs | Pantalla de resultado — puntaje bajo (<50%) |

Fuente directa: https://undraw.co/illustrations  
Licencia: https://undraw.co/license (uso libre en proyectos personales y comerciales)

### Logotipos inline (SVG)

Los logos de **JavaScript** y **Laravel** mostrados en cada tarjeta de pregunta fueron creados como SVG inline dentro del componente `QuestionCard.jsx`, basados en los colores oficiales de cada tecnología:
- JavaScript: color oficial `#f7df1e`
- Laravel: color oficial `#ff2d20`

### Efectos de sonido — Freesound.org

Descargados de **[Freesound.org](https://freesound.org)** bajo licencia **CC0 (Dominio Público)**:

| Archivo | Descripción | Autor en Freesound | Licencia |
|---|---|---|---|
| `public/sounds/correct.wav` | Sonido de respuesta correcta | stavsounds (ID 546084) | CC0 |
| `public/sounds/wrong.mp3` | Sonido de respuesta incorrecta | raclure (ID 483598) | CC0 |
| `public/sounds/finish.mp3` | Sonido de fin de quiz | licht2003 (ID 808521) | CC0 |

---

## Uso de Inteligencia Artificial

Se utilizó **Claude (Anthropic — claude.ai)** como apoyo en este proyecto para:

- Entender la estructura de componentes en React y la comunicación mediante props.
- Comprender cómo funcionan `useEffect` y `useCallback` para el temporizador regresivo.
- Apoyo en la estructuración del CSS con variables y diseño responsivo.
- Generación del banco de 20 preguntas sobre errores lógicos en JavaScript, Laravel y Tests de Laravel.
- Explicación de conceptos de shuffling (Fisher-Yates) para aleatorizar preguntas y opciones.

El código fue comprendido y revisado por el estudiante. Todos los conceptos del framework (useState, useEffect, useCallback, props, renderizado condicional, fetch) fueron estudiados en la documentación oficial listada arriba.

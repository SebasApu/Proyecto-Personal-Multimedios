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

- **Vite — Getting Started**  
  https://vite.dev/guide/  
  Configuración del proyecto y estructura de archivos estáticos en `public/`.

- **MDN Web Docs — Fetch API**  
  https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch  
  Para cargar el archivo `questions.json` dinámicamente con `fetch()`.

- **MDN Web Docs — HTMLAudioElement**  
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio  
  Para reproducir efectos de sonido con `new Audio(src).play()`.

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

---

## Recursos multimedia utilizados

Los archivos de sonido se descargaron de **Freesound.org** bajo licencia **CC0 (Dominio Público)**:

| Archivo        | Descripción              | Licencia |
|----------------|--------------------------|----------|
| correct.mp3    | Sonido de acierto        | CC0      |
| wrong.mp3      | Sonido de error          | CC0      |
| finish.mp3     | Fanfarria de resultado   | CC0      |

Freesound.org — https://freesound.org (plataforma con sonidos libres de derechos)

Los logotipos de JavaScript y Python incluidos en las tarjetas de pregunta se crearon como SVG inline dentro del componente `QuestionCard.jsx`.

---

## Uso de Inteligencia Artificial

Se utilizó **Claude (Anthropic)** como apoyo en este proyecto para:

- Entender la estructura de componentes en React y la comunicación con props.
- Comprender cómo funcionan `useEffect` y `useCallback` para el temporizador.
- Ayuda con la estructuración inicial del CSS y el sistema de variables.
- Generación de las 10 preguntas del quiz sobre errores lógicos comunes.

El código fue comprendido y revisado por el estudiante. Todos los conceptos utilizados (useState, useEffect, props, fetch, renderizado condicional) fueron estudiados en la documentación oficial listada arriba.

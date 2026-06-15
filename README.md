# Bug Detector — Quiz de Lógica en Código

Proyecto Personal | IF7102 Multimedios | I Ciclo 2026 | UCR

## Descripción

**Bug Detector** es un quiz interactivo donde el usuario debe identificar errores lógicos en fragmentos de código JavaScript y Python. El juego incluye temporizador por pregunta, retroalimentación inmediata con explicación del error, y pantalla de resultados con estadísticas.

**Opción elegida:** Opción 5 — Juego Educativo de Un Nivel  
**Framework:** React 19 + Vite  
**Modalidad:** Quiz con temporizador (20 segundos por pregunta)

## Estructura de componentes

```
src/
├── App.jsx                  # Componente raíz — maneja estado global del juego
├── App.css                  # Estilos globales de la aplicación
├── index.css                # Variables CSS y reset base
├── main.jsx                 # Punto de entrada de React
└── components/
    ├── StartScreen.jsx      # Pantalla de inicio
    ├── GameScreen.jsx       # Pantalla del juego (timer + pregunta)
    ├── ResultScreen.jsx     # Pantalla de resultados
    ├── QuestionCard.jsx     # Tarjeta reutilizable de pregunta + opciones
    └── Timer.jsx            # Componente de temporizador visual
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

Luego abrir `http://localhost:5173` en el navegador.

## Recursos multimedia

Colocar los archivos de audio en `public/sounds/`:

| Archivo         | Descripción                    | Fuente               |
|-----------------|--------------------------------|----------------------|
| `correct.mp3`   | Sonido de respuesta correcta   | Freesound.org (CC0)  |
| `wrong.mp3`     | Sonido de respuesta incorrecta | Freesound.org (CC0)  |
| `finish.mp3`    | Fanfarria al terminar el quiz  | Freesound.org (CC0)  |

Los sonidos son opcionales — la aplicación funciona sin ellos.

## Datos del juego

Las preguntas se cargan dinámicamente desde `public/data/questions.json` usando `fetch()`. El archivo contiene 10 preguntas sobre errores lógicos comunes en JavaScript y Python, con categorías: Bucles, Condicionales, Recursión, Lógica booleana, Funciones y Arrays.

## Framework

**React 19** con hooks. Conceptos aplicados:
- `useState` — estado del juego (pantalla activa, puntuación, índice)
- `useEffect` — carga del JSON y lógica del temporizador
- `useCallback` — handler del timeout del timer
- Props para comunicación entre componentes padre e hijo
- Renderizado condicional (`{screen === 'game' && <GameScreen />}`)

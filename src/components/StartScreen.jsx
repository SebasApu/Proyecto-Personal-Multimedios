export default function StartScreen({ onStart, total, bankSize }) {
  return (
    <div className="screen start-screen">
      <div className="start-content">
        <img
          src="/images/welcome.svg"
          alt="Bienvenido al quiz de detección de bugs"
          className="start-illustration"
        />

        <div>
          <h1>Bug Detector</h1>
          <p className="subtitle">
            ¿Podés encontrar el error lógico en el código? Cada partida es distinta —
            {' '}{total} preguntas aleatorias de un banco de {bankSize}.
          </p>
        </div>

        <div className="start-info">
          <div className="info-item">
            <span>🧩</span>
            <span>{total} de {bankSize} preguntas</span>
          </div>
          <div className="info-item">
            <span>⏱️</span>
            <span>30 seg por pregunta</span>
          </div>
          <div className="info-item">
            <span>⭐</span>
            <span>10 puntos por acierto</span>
          </div>
        </div>

        <button className="btn-primary" onClick={onStart}>
          Iniciar Quiz →
        </button>
      </div>
    </div>
  )
}

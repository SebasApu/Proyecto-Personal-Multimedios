const MESSAGES = [
  {
    min: 80,
    title: '¡Maestro del Debug!',
    text: 'Impresionante. Tenés un ojo muy agudo para los errores lógicos.',
    img: '/images/proud-coder.svg',
    imgAlt: 'Desarrollador orgulloso frente a su computadora',
  },
  {
    min: 50,
    title: '¡Vas por buen camino!',
    text: 'Buena intuición para detectar bugs. Revisá las explicaciones para reforzar.',
    img: '/images/programming.svg',
    imgAlt: 'Persona programando en su computadora',
  },
  {
    min: 0,
    title: '¡Seguí aprendiendo!',
    text: 'Los errores lógicos son difíciles de ver al principio. ¡Intentalo de nuevo!',
    img: '/images/fixing-bugs.svg',
    imgAlt: 'Desarrollador corrigiendo errores en el código',
  },
]

export default function ResultScreen({ score, total, correct, onRestart }) {
  const maxScore = total * 10
  const pct = Math.round((score / maxScore) * 100)
  const wrong = total - correct
  const msg = MESSAGES.find(m => pct >= m.min)

  return (
    <div className="screen result-screen">
      <div className="result-content">
        <img
          src={msg.img}
          alt={msg.imgAlt}
          className="result-illustration"
        />

        <h2>{msg.title}</h2>

        <div className="score-circle">
          <span className="score-number">{score}</span>
          <span className="score-label">de {maxScore} pts</span>
        </div>

        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-value correct-color">{correct}</span>
            <span className="stat-label">Correctas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value wrong-color">{wrong}</span>
            <span className="stat-label">Incorrectas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value accent-color">{pct}%</span>
            <span className="stat-label">Precisión</span>
          </div>
        </div>

        <p className="result-message">{msg.text}</p>

        <div className="result-actions">
          <button className="btn-primary" onClick={onRestart}>
            🔄 Jugar de nuevo
          </button>
        </div>
      </div>
    </div>
  )
}

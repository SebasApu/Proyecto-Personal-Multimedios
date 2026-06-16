import { useState, useEffect, useCallback } from 'react'
import QuestionCard from './QuestionCard'
import Timer from './Timer'

const TIME_LIMIT = 30

function playSound(type) {
  const paths = {
    correct: '/sounds/correct.wav',
    wrong: '/sounds/wrong.mp3',
    finish: '/sounds/finish.mp3',
  }
  try {
    const audio = new Audio(paths[type])
    audio.volume = 0.5
    audio.play().catch(() => {})
  } catch (_) {}
}

export default function GameScreen({ question, currentIndex, total, score, onAnswer, onNext }) {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const isLast = currentIndex === total - 1

  useEffect(() => {
    setTimeLeft(TIME_LIMIT)
    setSelected(null)
    setShowResult(false)
  }, [currentIndex])

  const handleTimeout = useCallback(() => {
    setShowResult(true)
    setSelected(-1)
    onAnswer(false)
    playSound('wrong')
  }, [onAnswer])

  useEffect(() => {
    if (showResult) return
    if (timeLeft === 0) { handleTimeout(); return }
    const t = setTimeout(() => setTimeLeft(n => n - 1), 1000)
    return () => clearTimeout(t)
  }, [timeLeft, showResult, handleTimeout])

  const handleSelect = (i) => {
    if (selected !== null) return
    const correct = i === question.correct
    setSelected(i)
    setShowResult(true)
    onAnswer(correct)
    playSound(correct ? 'correct' : 'wrong')
  }

  const handleNext = () => {
    if (isLast) playSound('finish')
    onNext()
  }

  return (
    <div className="screen game-screen">
      <div className="game-header">
        <div className="progress-info">
          <span>Pregunta {currentIndex + 1} / {total}</span>
          <span className="score-display">⭐ {score} pts</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(currentIndex / total) * 100}%` }}
          />
        </div>
        <Timer timeLeft={timeLeft} totalTime={TIME_LIMIT} />
      </div>

      <QuestionCard
        question={question}
        selectedAnswer={selected}
        onSelect={handleSelect}
        showResult={showResult}
      />

      {showResult && selected === -1 && (
        <div className="timeout-notice">⏱ Se acabó el tiempo para esta pregunta.</div>
      )}

      {showResult && (
        <button className="btn-primary btn-next" onClick={handleNext}>
          {isLast ? 'Ver resultados 🏆' : 'Siguiente →'}
        </button>
      )}
    </div>
  )
}

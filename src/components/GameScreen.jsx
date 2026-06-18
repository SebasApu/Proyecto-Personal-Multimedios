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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (showResult) {
        if (e.key === 'Enter') {
          if (isLast) playSound('finish')
          onNext()
        }
        return
      }
      if (selected !== null) return
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 }
      const idx = keyMap[e.key.toLowerCase()]
      if (idx === undefined || idx >= question.options.length) return
      const correct = idx === question.correct
      setSelected(idx)
      setShowResult(true)
      onAnswer(correct)
      playSound(correct ? 'correct' : 'wrong')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected, showResult, question, onAnswer, onNext, isLast])

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

      {!showResult && (
        <p className="keyboard-hint">Teclado: <kbd>1</kbd>–<kbd>4</kbd> para responder</p>
      )}
      {showResult && (
        <p className="keyboard-hint"><kbd>Enter</kbd> para continuar</p>
      )}
    </div>
  )
}

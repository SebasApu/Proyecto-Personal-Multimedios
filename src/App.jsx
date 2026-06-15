import { useState, useEffect } from 'react'
import StartScreen  from './components/StartScreen'
import GameScreen   from './components/GameScreen'
import ResultScreen from './components/ResultScreen'
import './App.css'

const QUESTIONS_PER_GAME = 10

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function shuffleOptions(question) {
  const indices = [0, 1, 2, 3]
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[indices[i], indices[j]] = [indices[j], indices[i]]
  }
  return {
    ...question,
    options: indices.map(i => question.options[i]),
    correct: indices.indexOf(question.correct),
  }
}

function pickRandom(bank) {
  return shuffleArray(bank).slice(0, QUESTIONS_PER_GAME).map(shuffleOptions)
}

export default function App() {
  const [screen,       setScreen]       = useState('start')
  const [bank,         setBank]         = useState([])
  const [questions,    setQuestions]    = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score,        setScore]        = useState(0)
  const [correct,      setCorrect]      = useState(0)
  const [loading,      setLoading]      = useState(true)

  useEffect(() => {
    fetch('/data/questions.json')
      .then(r => r.json())
      .then(data => { setBank(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleStart = () => {
    setQuestions(pickRandom(bank))
    setCurrentIndex(0)
    setScore(0)
    setCorrect(0)
    setScreen('game')
  }

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(s => s + 10)
      setCorrect(c => c + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      setScreen('result')
    }
  }

  const handleRestart = () => setScreen('start')

  if (loading) return <div className="loading">Cargando preguntas</div>

  return (
    <div className="app">
      {screen === 'start' && (
        <StartScreen onStart={handleStart} total={QUESTIONS_PER_GAME} bankSize={bank.length} />
      )}
      {screen === 'game' && questions.length > 0 && (
        <GameScreen
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          total={questions.length}
          score={score}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={questions.length}
          correct={correct}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

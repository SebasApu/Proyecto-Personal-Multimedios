const LOGOS = {
  JavaScript: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36">
      <rect width="32" height="32" rx="4" fill="#f7df1e"/>
      <text x="4" y="26" fontFamily="monospace" fontWeight="bold" fontSize="20" fill="#000">JS</text>
    </svg>
  ),
  Laravel: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36">
      <rect width="32" height="32" rx="4" fill="#ff2d20"/>
      <text x="3" y="26" fontFamily="monospace" fontWeight="bold" fontSize="14" fill="#fff">{'{ }'}</text>
    </svg>
  ),
}

const LANG_CLASS = {
  JavaScript: '',
  Laravel: 'laravel',
}

export default function QuestionCard({ question, selectedAnswer, onSelect, showResult }) {
  const lang = question.language

  return (
    <div className="question-card">
      <div className="question-meta">
        <span className={`lang-badge ${LANG_CLASS[lang] ?? ''}`}>{lang}</span>
        <span className="cat-badge">{question.category}</span>
      </div>

      <div className="question-header">
        {LOGOS[lang]}
        <p className="question-text">{question.question}</p>
      </div>

      <pre className="code-block"><code>{question.code}</code></pre>

      <div className="options">
        {question.options.map((opt, i) => {
          let cls = 'option-btn'
          if (showResult) {
            if (i === question.correct) cls += ' correct'
            else if (i === selectedAnswer) cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => !showResult && onSelect(i)}
              disabled={showResult}
            >
              <span className="option-letter">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          )
        })}
      </div>

      {showResult && (
        <div className={`explanation ${selectedAnswer === question.correct ? 'correct' : 'wrong'}`}>
          <span className="explanation-label">
            {selectedAnswer === question.correct ? '✓ Correcto' : selectedAnswer === -1 ? '⏱ Tiempo agotado' : '✗ Incorrecto'}
          </span>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

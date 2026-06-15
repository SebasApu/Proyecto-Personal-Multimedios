export default function Timer({ timeLeft, totalTime }) {
  const pct = (timeLeft / totalTime) * 100
  const urgent = timeLeft <= 5

  return (
    <div className="timer">
      <span className={`timer-display ${urgent ? 'urgent' : ''}`}>
        {timeLeft}s
      </span>
      <div className="timer-bar">
        <div
          className={`timer-fill ${urgent ? 'urgent' : ''}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

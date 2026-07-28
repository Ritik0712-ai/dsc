import { useState, useEffect } from 'react'

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (timeLeft.isExpired) {
    return (
      <div className="countdown expired">
        <span className="countdown-expired-text">Event Has Started!</span>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="countdown-timer">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="countdown-item">
          <div className="countdown-value">
            <span className="countdown-number">{String(unit.value).padStart(2, '0')}</span>
          </div>
          <span className="countdown-label">{unit.label}</span>
          {index < timeUnits.length - 1 && (
            <span className="countdown-separator">:</span>
          )}
        </div>
      ))}

      <style>{`
        .countdown-timer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .countdown-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }

        .countdown-value {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          min-width: 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .countdown-value::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          opacity: 0.1;
        }

        .countdown-number {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          position: relative;
          z-index: 1;
          display: block;
        }

        .countdown-label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 8px;
        }

        .countdown-separator {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 24px;
          animation: blink 1s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .countdown-expired-text {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent-secondary);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @media (max-width: 640px) {
          .countdown-timer {
            gap: 4px;
          }

          .countdown-item {
            min-width: 60px;
          }

          .countdown-value {
            padding: 12px 14px;
            min-width: 60px;
          }

          .countdown-number {
            font-size: 1.75rem;
          }

          .countdown-label {
            font-size: 0.65rem;
          }

          .countdown-separator {
            font-size: 1.5rem;
            margin-bottom: 18px;
          }
        }

        @media (max-width: 400px) {
          .countdown-item {
            min-width: 50px;
          }

          .countdown-value {
            padding: 10px 10px;
            min-width: 50px;
          }

          .countdown-number {
            font-size: 1.4rem;
          }

          .countdown-separator {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

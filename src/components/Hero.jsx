import CountdownTimer from './CountdownTimer'
import '../styles/hero.css'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          <span className="hero-badge-text">Applications Open</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          <span className="hero-title-main">Welcome to</span>
          <span className="hero-title-gradient">HackX 2026</span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">Build. Break. Innovate.</p>

        {/* Subtitle */}
        <p className="hero-subtitle">
          48 hours. Infinite possibilities. One stage.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('register')}
          >
            <span>Register Now</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection('schedule')}
          >
            <span>View Schedule</span>
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="hero-countdown">
          <p className="hero-countdown-label">Event Starts In</p>
          <CountdownTimer targetDate="April 15, 2026 09:00:00" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll-text">Scroll Down</span>
        <div className="hero-scroll-icon">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  )
}

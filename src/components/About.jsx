import { useEffect, useRef } from 'react'
import '../styles/about.css'

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const whyCardsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe elements
    if (textRef.current) observer.observe(textRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    whyCardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: '👥', number: '500+', label: 'Participants' },
    { icon: '💰', number: '₹5L+', label: 'in Prizes' },
    { icon: '⏱️', number: '48 Hours', label: 'of Innovation' },
  ]

  const whyPoints = [
    { icon: '🤝', title: 'Network', description: 'Connect with top talent and industry professionals' },
    { icon: '🏆', title: 'Win Prizes', description: 'Massive cash prizes and exciting rewards' },
    { icon: '💡', title: 'Build', description: 'Create real projects that make an impact' },
    { icon: '👁️', title: 'Get Noticed', description: 'Catch the eye of recruiters and investors' },
  ]

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          {/* Text Content */}
          <div className="about-text" ref={textRef}>
            <h2>What is <span>HackX?</span></h2>
            <p>
              HackX 2026 is the ultimate hackathon experience where brilliant minds converge
              to transform ideas into reality. Over 48 intense hours, you'll collaborate
              with talented developers, designers, and innovators to build projects that
              push the boundaries of technology.
            </p>
            <p>
              Whether you're a seasoned developer or just starting your journey, HackX
              provides the perfect platform to learn, create, and showcase your skills.
              With mentorship from industry experts, exciting prizes, and endless
              networking opportunities, this is where the next big thing begins.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid" ref={statsRef}>
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card stagger-${index + 1}`}>
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join Section */}
        <div className="why-join">
          <h3>Why Join HackX?</h3>
          <div className="why-join-grid">
            {whyPoints.map((point, index) => (
              <div
                key={index}
                className={`why-card stagger-${index + 1}`}
                ref={el => whyCardsRef.current[index] = el}
              >
                <div className="why-card-icon">{point.icon}</div>
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

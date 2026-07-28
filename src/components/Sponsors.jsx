import { useEffect, useRef } from 'react'
import '../styles/sponsors.css'

export default function Sponsors() {
  const sponsorsRef = useRef([])

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

    sponsorsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const sponsors = {
    gold: [
      { name: 'TechCorp', icon: '🏢' },
      { name: 'InnovateLabs', icon: '🔬' },
    ],
    silver: [
      { name: 'StartupHub', icon: '🚀' },
      { name: 'DevTools Inc', icon: '🛠️' },
    ],
    bronze: [
      { name: 'OpenSource Co', icon: '🌱' },
      { name: 'CloudNest', icon: '☁️' },
    ],
  }

  let cardIndex = 0

  return (
    <section id="sponsors" className="sponsors section">
      <div className="container">
        <div className="section-header">
          <h2>Our Sponsors</h2>
          <p>Partners making HackX 2025 possible</p>
        </div>

        <div className="sponsors-container">
          {/* Gold Tier */}
          <div className="sponsor-tier">
            <div className="tier-label gold">Gold Sponsors</div>
            <div className="sponsor-grid">
              {sponsors.gold.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="sponsor-card gold-card"
                  ref={el => sponsorsRef.current[cardIndex++] = el}
                >
                  <span className="sponsor-icon">{sponsor.icon}</span>
                  <span className="sponsor-name">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="sponsor-tier">
            <div className="tier-label silver">Silver Sponsors</div>
            <div className="sponsor-grid">
              {sponsors.silver.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="sponsor-card silver-card"
                  ref={el => sponsorsRef.current[cardIndex++] = el}
                >
                  <span className="sponsor-icon">{sponsor.icon}</span>
                  <span className="sponsor-name">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="sponsor-tier">
            <div className="tier-label bronze">Bronze Sponsors</div>
            <div className="sponsor-grid">
              {sponsors.bronze.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="sponsor-card bronze-card"
                  ref={el => sponsorsRef.current[cardIndex++] = el}
                >
                  <span className="sponsor-icon">{sponsor.icon}</span>
                  <span className="sponsor-name">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div className="become-sponsor">
            <p>Interested in sponsoring HackX 2025?</p>
            <a href="mailto:sponsors@hackx2025.com" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

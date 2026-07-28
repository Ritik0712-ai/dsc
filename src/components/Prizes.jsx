import { useEffect, useRef } from 'react'
import '../styles/prizes.css'

export default function Prizes() {
  const podiumRef = useRef(null)
  const specialRef = useRef([])

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

    // Observe podium cards
    if (podiumRef.current) {
      const cards = podiumRef.current.querySelectorAll('.podium-card')
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`
        observer.observe(card)
      })
    }

    // Observe special cards
    specialRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const prizes = [
    {
      rank: 1,
      label: '1st Place',
      amount: '₹2,00,000',
      perks: ['+ Internship Opportunity', '+ Trophy & Certificate', '+ Exclusive Swag Kit'],
      type: 'first-place'
    },
    {
      rank: 2,
      label: '2nd Place',
      amount: '₹1,00,000',
      perks: ['+ Swag Kit', '+ Certificate'],
      type: 'second-place'
    },
    {
      rank: 3,
      label: '3rd Place',
      amount: '₹50,000',
      perks: ['+ Swag Kit', '+ Certificate'],
      type: 'third-place'
    }
  ]

  const specialCategories = [
    {
      icon: '🎨',
      title: 'Best UI/UX',
      amount: '₹25,000'
    },
    {
      icon: '🌍',
      title: 'Best Social Impact',
      amount: '₹25,000'
    }
  ]

  return (
    <section id="prizes" className="prizes section">
      <div className="container">
        <div className="section-header">
          <h2>What You Win</h2>
          <p>Compete for incredible prizes and recognition</p>
        </div>

        <div className="prizes-container">
          {/* Podium Cards */}
          <div className="podium" ref={podiumRef}>
            {prizes.map((prize) => (
              <div key={prize.rank} className={`podium-card ${prize.type}`}>
                <div className="rank-badge">
                  {prize.rank === 1 ? '🥇' : prize.rank === 2 ? '🥈' : '🥉'}
                </div>
                <div className="rank-label">{prize.label}</div>
                <div className="prize-amount">{prize.amount}</div>
                <ul className="prize-perks">
                  {prize.perks.map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Special Categories */}
          <div className="special-categories">
            {specialCategories.map((category, index) => (
              <div
                key={index}
                className="special-card"
                ref={el => specialRef.current[index] = el}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="special-icon">{category.icon}</div>
                <h4 className="special-title">{category.title}</h4>
                <div className="special-amount">{category.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

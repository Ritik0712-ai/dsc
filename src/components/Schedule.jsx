import { useEffect, useRef } from 'react'
import '../styles/schedule.css'

export default function Schedule() {
  const timelineRef = useRef(null)
  const timelineItemsRef = useRef([])

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

    // Observe all timeline items
    timelineItemsRef.current.forEach(item => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const scheduleData = [
    {
      day: 'Day 1',
      date: 'April 15, 2026',
      events: [
        { time: '9:00 AM', title: 'Opening Ceremony & Kickoff', description: 'Welcome address, hackathon rules, and team formation' },
        { time: '10:00 AM', title: 'Hacking Begins', description: 'The clock starts! Begin building your innovative project' },
        { time: '2:00 PM', title: 'Mentor Sessions', description: '1-on-1 guidance from industry experts and tech leads' },
        { time: '8:00 PM', title: 'Mid-hack Check-in', description: 'Progress updates and additional resources available' },
      ]
    },
    {
      day: 'Day 2',
      date: 'April 16, 2026',
      events: [
        { time: '8:00 AM', title: 'Final Submissions Close', description: 'Submit your project before the deadline' },
        { time: '10:00 AM', title: 'Project Presentations', description: 'Demo your project to judges and fellow hackers' },
        { time: '4:00 PM', title: 'Winners Announced & Closing', description: 'Celebration time! Recognition ceremony and prizes' },
      ]
    }
  ]

  let itemIndex = 0

  return (
    <section id="schedule" className="schedule section">
      <div className="container">
        <div className="section-header">
          <h2>Event Timeline</h2>
          <p>Two days of innovation, collaboration, and non-stop building</p>
        </div>

        <div className="schedule-container" ref={timelineRef}>
          <div className="timeline">
            {scheduleData.map((day, dayIndex) => (
              <>
                {/* Day Header */}
                <div
                  key={`day-${dayIndex}`}
                  className="timeline-day"
                  ref={el => timelineItemsRef.current[itemIndex++] = el}
                >
                  <h4>{day.day}</h4>
                  <span>{day.date}</span>
                </div>

                {/* Events */}
                {day.events.map((event, eventIndex) => (
                  <div
                    key={`event-${dayIndex}-${eventIndex}`}
                    className="timeline-item"
                    ref={el => timelineItemsRef.current[itemIndex++] = el}
                  >
                    <div className="timeline-node"></div>
                    <div className="timeline-event">
                      <span className="timeline-time">
                        <span className="timeline-time-icon">🕐</span>
                        {event.time}
                      </span>
                      <h3 className="timeline-title">{event.title}</h3>
                      <p className="timeline-description">{event.description}</p>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

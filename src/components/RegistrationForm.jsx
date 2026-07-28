import { useState, useEffect, useRef } from 'react'
import '../styles/form.css'

export default function RegistrationForm() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [charCount, setCharCount] = useState({ count: 0, class: '' })

  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    email: '',
    phone: '',
    college: '',
    teamSize: '',
    projectTrack: '',
    projectIdea: '',
    referralCode: ''
  })

  const [errors, setErrors] = useState({})

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

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const validateForm = () => {
    const newErrors = {}

    // Team Name
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required'
    }

    // Team Leader
    if (!formData.teamLeader.trim()) {
      newErrors.teamLeader = 'Team leader name is required'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone
    const phoneRegex = /^\d{10}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    // College
    if (!formData.college.trim()) {
      newErrors.college = 'College/University is required'
    }

    // Team Size
    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select team size'
    }

    // Project Track
    if (!formData.projectTrack) {
      newErrors.projectTrack = 'Please select a project track'
    }

    // Project Idea
    if (!formData.projectIdea.trim()) {
      newErrors.projectIdea = 'Project idea is required'
    } else if (formData.projectIdea.length < 50) {
      newErrors.projectIdea = 'Project idea must be at least 50 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Update character count for project idea
    if (name === 'projectIdea') {
      const count = value.length
      let countClass = ''
      if (count > 0 && count < 50) {
        countClass = 'error'
      } else if (count >= 50 && count < 100) {
        countClass = 'warning'
      }
      setCharCount({ count, class: countClass })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to first error
      const firstError = formRef.current?.querySelector('.has-error')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setToastMessage("You're in! 🎉 Check your email for confirmation.")
    setShowToast(true)

    // Auto dismiss toast after 4 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 4000)

    // Reset form
    setFormData({
      teamName: '',
      teamLeader: '',
      email: '',
      phone: '',
      college: '',
      teamSize: '',
      projectTrack: '',
      projectIdea: '',
      referralCode: ''
    })
    setCharCount({ count: 0, class: '' })
  }

  const projectTracks = [
    { value: '', label: 'Select a track' },
    { value: 'web-dev', label: 'Web Development' },
    { value: 'ai-ml', label: 'AI/ML' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'iot', label: 'IoT' },
    { value: 'open-innovation', label: 'Open Innovation' },
  ]

  const teamSizes = [
    { value: '', label: 'Select team size' },
    { value: '1', label: '1 Member' },
    { value: '2', label: '2 Members' },
    { value: '3', label: '3 Members' },
    { value: '4', label: '4 Members' },
  ]

  return (
    <section id="register" className="register section">
      <div className="container">
        <div className="section-header">
          <h2>Register Your Team</h2>
          <p>Ready to compete? Fill out the form below and secure your spot</p>
        </div>

        <div className="register-container">
          <form className="form-card" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Team Name */}
              <div className={`form-group ${errors.teamName ? 'has-error' : ''}`}>
                <label className="form-label">
                  Team Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="teamName"
                  className={`form-input ${errors.teamName ? 'error' : ''}`}
                  placeholder="Enter your team name"
                  value={formData.teamName}
                  onChange={handleChange}
                />
                <span className="form-error">{errors.teamName}</span>
              </div>

              {/* Team Leader */}
              <div className={`form-group ${errors.teamLeader ? 'has-error' : ''}`}>
                <label className="form-label">
                  Team Leader Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="teamLeader"
                  className={`form-input ${errors.teamLeader ? 'error' : ''}`}
                  placeholder="Enter team leader's name"
                  value={formData.teamLeader}
                  onChange={handleChange}
                />
                <span className="form-error">{errors.teamLeader}</span>
              </div>

              {/* Email */}
              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="team@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span className="form-error">{errors.email}</span>
              </div>

              {/* Phone */}
              <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                <label className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                />
                <span className="form-error">{errors.phone}</span>
              </div>

              {/* College */}
              <div className={`form-group ${errors.college ? 'has-error' : ''}`}>
                <label className="form-label">
                  College / University <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="college"
                  className={`form-input ${errors.college ? 'error' : ''}`}
                  placeholder="Enter your college name"
                  value={formData.college}
                  onChange={handleChange}
                />
                <span className="form-error">{errors.college}</span>
              </div>

              {/* Team Size */}
              <div className={`form-group ${errors.teamSize ? 'has-error' : ''}`}>
                <label className="form-label">
                  Team Size <span className="required">*</span>
                </label>
                <select
                  name="teamSize"
                  className={`form-select ${errors.teamSize ? 'error' : ''}`}
                  value={formData.teamSize}
                  onChange={handleChange}
                >
                  {teamSizes.map(size => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
                <span className="form-error">{errors.teamSize}</span>
              </div>

              {/* Project Track */}
              <div className={`form-group ${errors.projectTrack ? 'has-error' : ''}`}>
                <label className="form-label">
                  Project Track <span className="required">*</span>
                </label>
                <select
                  name="projectTrack"
                  className={`form-select ${errors.projectTrack ? 'error' : ''}`}
                  value={formData.projectTrack}
                  onChange={handleChange}
                >
                  {projectTracks.map(track => (
                    <option key={track.value} value={track.value}>
                      {track.label}
                    </option>
                  ))}
                </select>
                <span className="form-error">{errors.projectTrack}</span>
              </div>

              {/* Referral Code */}
              <div className="form-group">
                <label className="form-label">Referral Code</label>
                <input
                  type="text"
                  name="referralCode"
                  className="form-input"
                  placeholder="Enter referral code (optional)"
                  value={formData.referralCode}
                  onChange={handleChange}
                />
                <p className="referral-note">Get bonus points with a referral code!</p>
              </div>

              {/* Project Idea */}
              <div className={`form-group full-width ${errors.projectIdea ? 'has-error' : ''}`}>
                <label className="form-label">
                  Project Idea <span className="required">*</span>
                </label>
                <textarea
                  name="projectIdea"
                  className={`form-textarea ${errors.projectIdea ? 'error' : ''}`}
                  placeholder="Describe your project idea (minimum 50 characters)"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  rows={4}
                />
                <span className={`char-count ${charCount.class}`}>
                  {charCount.count}/50 characters minimum
                </span>
                <span className="form-error">{errors.projectIdea}</span>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button
                  type="submit"
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="btn-text">
                    {isSubmitting ? 'Submitting...' : 'Register Now'}
                  </span>
                  {isSubmitting && <div className="spinner"></div>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        <div className="toast-content">
          <span className="toast-icon">🎉</span>
          <span className="toast-message">{toastMessage}</span>
        </div>
      </div>
    </section>
  )
}

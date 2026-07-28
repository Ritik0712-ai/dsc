import '../styles/footer.css'

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'register', label: 'Register' },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '⌨️', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              Hack<span>X</span> 2026
            </div>
            <p className="footer-tagline">
              Join the ultimate hackathon experience. Build, break, and innovate with
              the brightest minds in tech.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Hackathon Rules</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Judging Criteria</a></li>
              <li><a href="#">Code of Conduct</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@hackx2026.com">hello@hackx2026.com</a></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="#">Discord Community</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 HackX. Made with <span className="heart">❤️</span> for innovators.
          </p>
          <p className="footer-made">
            Design by <a href="#">HackX Team</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

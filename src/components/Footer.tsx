import { useState, type FormEvent } from 'react'
import { BrandLogo } from './BrandLogo'

interface FooterProps {
  onOpenContact: () => void
  className?: string
  onNavigate?: (path: string) => void
}

export function Footer({ onOpenContact, className = '', onNavigate }: FooterProps) {
  const [email, setEmail] = useState('')

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) setEmail('')
  }

  return (
    <footer className={`footer ${className}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="header-brand-link" aria-label="IR FUSIONS home">
              <BrandLogo variant="header" />
            </a>
            <p className="footer-brand-desc">
              IR FUSIONS creates software, mobile applications, digital marketing strategies, and
              business technology plans for companies ready to grow.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">Software Development</a></li>
              <li><a href="#services" className="footer-link">Social Media Marketing</a></li>
              <li><a href="#services" className="footer-link">Business Consulting</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <button
                  type="button"
                  className="footer-link footer-link-btn"
                  onClick={() => onNavigate?.('/about')}
                >
                  About
                </button>
              </li>
              <li><a href="#technology" className="footer-link">Technology</a></li>
              <li><a href="#work" className="footer-link">Portfolio</a></li>
              <li>
                <button
                  type="button"
                  className="footer-link footer-link-btn"
                  onClick={onOpenContact}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="footer-newsletter-desc">
              Get updates on software, marketing, and digital business growth.
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} IR FUSIONS. All rights reserved.</span>
          <span>Software · Mobile Apps · Marketing · Consulting</span>
        </div>
      </div>
    </footer>
  )
}

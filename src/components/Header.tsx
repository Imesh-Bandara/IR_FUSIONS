import { useState } from 'react'
import { BrandLogo } from './BrandLogo'

interface HeaderProps {
  onOpenContact: () => void
  visible: boolean
  scrolledPastHero: boolean
  onNavigate: (path: string) => void
  currentPath: string
}

export function Header({ onOpenContact, visible, scrolledPastHero, onNavigate, currentPath }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (path: string) => {
    setMobileMenuOpen(false)
    onNavigate(path)
  }

  const handleOpenContact = () => {
    setMobileMenuOpen(false)
    onOpenContact()
  }

  return (
    <header
      className={`header-wrapper header-clean ${visible ? 'header-visible' : ''} ${scrolledPastHero ? 'header-on-content' : ''}`}
    >
      <div className="container header-container">
        <button
          type="button"
          className="header-brand-link"
          aria-label="IR FUSIONS home"
          onClick={() => handleNavigate('/')}
        >
          <BrandLogo variant="header" />
        </button>

        <nav aria-label="Main navigation" className="nav-desktop">
          <ul className="nav-links">
            <li>
              <button
                type="button"
                className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={() => handleNavigate('/about')}
              >
                About
              </button>
            </li>
            <li><a href="#technology" className="nav-link">Technology</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#work" className="nav-link">Work</a></li>
            <li>
              <button
                type="button"
                className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}
                onClick={() => handleNavigate('/contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <button type="button" className="btn btn-primary btn-nav-cta" onClick={handleOpenContact}>
          Get Started
        </button>
      </div>

      <div className={`header-mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <button type="button" className={`nav-link ${currentPath === '/about' ? 'active' : ''}`} onClick={() => handleNavigate('/about')}>
          About
        </button>
        <a href="#technology" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Technology
        </a>
        <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Services
        </a>
        <a href="#work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Work
        </a>
        <button type="button" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`} onClick={() => handleNavigate('/contact')}>
          Contact
        </button>
        <button type="button" className="btn btn-primary mobile-nav-cta" onClick={handleOpenContact}>
          Get Started
        </button>
      </div>
    </header>
  )
}

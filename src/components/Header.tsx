import { BrandLogo } from './BrandLogo'

interface HeaderProps {
  onOpenContact: () => void
  visible: boolean
  scrolledPastHero: boolean
  onNavigate: (path: string) => void
  currentPath: string
}

export function Header({ onOpenContact, visible, scrolledPastHero, onNavigate, currentPath }: HeaderProps) {
  return (
    <header
      className={`header-wrapper header-clean ${visible ? 'header-visible' : ''} ${scrolledPastHero ? 'header-on-content' : ''}`}
    >
      <div className="container header-container">
        <button
          type="button"
          className="header-brand-link"
          aria-label="IR FUSIONS home"
          onClick={() => onNavigate('/')}
        >
          <BrandLogo variant="header" />
        </button>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <button
                type="button"
                className={`nav-link ${currentPath === '/about' ? 'active' : ''}`}
                onClick={() => onNavigate('/about')}
              >
                About
              </button>
            </li>
            <li><a href="#technology" className="nav-link">Technology</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#work" className="nav-link">Work</a></li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  onOpenContact()
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" className="btn btn-primary btn-nav-cta" onClick={onOpenContact}>
          Get Started
        </button>
      </div>
    </header>
  )
}

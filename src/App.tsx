import { useCallback, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { SplineScene } from './components/SplineScene'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { RobotGuide } from './components/RobotGuide'
import { TechnologyShowcase } from './components/TechnologyShowcase'
import { ProblemSolution } from './components/ProblemSolution'
import { DevelopmentProcess } from './components/DevelopmentProcess'
import { Portfolio } from './components/Portfolio'
import { TrustSection } from './components/TrustSection'
import { ContactModal } from './components/ContactModal'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [toastActive, setToastActive] = useState(false)
  const [splineReady, setSplineReady] = useState(false)
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname)
  const { heroProgress } = useScrollProgress()

  const handleOpenContact = () => setContactOpen(true)
  const handleCloseContact = () => setContactOpen(false)
  const handleSplineReady = useCallback(() => setSplineReady(true), [])

  const handleSubmitSuccess = () => {
    setToastActive(true)
    setTimeout(() => setToastActive(false), 4000)
  }

  useEffect(() => {
    const handlePopState = () => setCurrentRoute(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentRoute(path)
  }

  const isAboutRoute = currentRoute === '/about'
  const isContactRoute = currentRoute === '/contact'

  return (
    <>
      {!isAboutRoute && !isContactRoute && (
        <SplineScene onReady={handleSplineReady} heroProgress={heroProgress} />
      )}

      <Header
        onOpenContact={handleOpenContact}
        visible
        scrolledPastHero={heroProgress > 0.5}
        onNavigate={handleNavigate}
        currentPath={currentRoute}
      />

      <main className="main-visible">
        {isAboutRoute ? (
          <AboutPage onOpenContact={handleOpenContact} />
        ) : isContactRoute ? (
          <ContactPage onOpenContact={handleOpenContact} />
        ) : (
          <>
            <Hero splineReady={splineReady} heroProgress={heroProgress} />
            <WhyUs />
            <TechnologyShowcase />
            <RobotGuide />
            <ProblemSolution />
            <DevelopmentProcess />
            <Portfolio />
            <TrustSection />
            <CtaSection onOpenContact={handleOpenContact} />
          </>
        )}
      </main>

      {!isAboutRoute && !isContactRoute && (
        <Footer onOpenContact={handleOpenContact} className="footer-visible" onNavigate={handleNavigate} />
      )}

      <ContactModal
        isOpen={contactOpen}
        onClose={handleCloseContact}
        onSubmitSuccess={handleSubmitSuccess}
      />

      <div className={`toast ${toastActive ? 'active' : ''}`} role="status" aria-live="polite">
        <span className="toast-icon">✓</span>
        <span>Message received. Our team will get back to you within 24 hours.</span>
      </div>
    </>
  )
}

export default App

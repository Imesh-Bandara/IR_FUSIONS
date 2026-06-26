interface HeroProps {
  splineReady: boolean
  heroProgress: number
}

export function Hero({ splineReady, heroProgress }: HeroProps) {
  const showHint = splineReady && heroProgress < 0.3

  return (
    <section className="hero hero-fullscreen hero-clean" id="home">
      {showHint && (
        <a href="#services" className="hero-scroll-hint" aria-label="Scroll to services">
          <span>Scroll to explore</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      )}
    </section>
  )
}

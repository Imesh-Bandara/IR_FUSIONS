import { ScrollReveal } from './ScrollReveal'

interface CtaSectionProps {
  onOpenContact: () => void
}

export function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <ScrollReveal direction="pop">
          <div className="cta-box">
            <p className="section-subtitle">Ready to Start?</p>
            <h2 className="cta-title">
              Have an Idea? Let&apos;s Build Something <span className="text-brand">Amazing</span>
            </h2>
            <p className="cta-desc">
              Partner with us to transform your ideas into successful digital solutions.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={onOpenContact}>
                Contact Us
              </button>
              <a href="#services" className="btn btn-secondary">
                Start Your Project
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

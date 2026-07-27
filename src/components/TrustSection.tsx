import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'up', 'down', 'right'] as const

const reasons = [
  {
    title: 'Innovation First',
    desc: 'We choose modern tools and practical ideas that create measurable business value.',
  },
  {
    title: 'Quality Development',
    desc: 'Clean interfaces, reliable code, responsive layouts, and maintainable systems.',
  },
  {
    title: 'Business Understanding',
    desc: 'Technology decisions are aligned with customers, revenue, operations, and growth.',
  },
  {
    title: 'Long-Term Support',
    desc: 'We stay available after launch for improvements, updates, and technical guidance.',
  },
]

export function TrustSection() {
  return (
    <section className="trust-section section-panel">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">A Technology Partner That Thinks Beyond Delivery</h2>
            <p className="section-desc">
              We combine design, engineering, marketing, and strategy so your project is built for
              real-world adoption.
            </p>
          </div>
        </ScrollReveal>

        <div className="trust-grid">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={reason.title}
              delay={index * 90}
              direction={revealDirections[index]}
            >
              <article className="trust-card">
                <span className="trust-icon" aria-hidden="true">{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'pop', 'right'] as const

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '18+', label: 'Technologies Used' },
  { value: '98%', label: 'Client Satisfaction' },
]

export function WhyUs() {
  return (
    <section className="why-us" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="why-us-header">
            <p className="section-subtitle">About IR FUSIONS</p>
            <h2 className="section-title">Technology Meets Business Vision</h2>
            <p className="section-desc">
              We combine technology and strategy to help companies improve operations, automate
              repetitive work, reach more customers, and grow with confidence in the digital world.
            </p>
          </div>
        </ScrollReveal>

        <div className="why-us-grid">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction={revealDirections[i]}>
              <div className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

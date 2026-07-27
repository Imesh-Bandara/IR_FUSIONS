import { ScrollReveal } from './ScrollReveal'
import { Icon, type IconName } from './icons'

const revealDirections = ['left', 'pop', 'right'] as const

const stats: { value: string; label: string; icon: IconName }[] = [
  { value: '50+', label: 'Projects Completed', icon: 'layers' },
  { value: '18+', label: 'Technologies Used', icon: 'cpu' },
  { value: '98%', label: 'Client Satisfaction', icon: 'star' },
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
                <span className="stat-icon">
                  <Icon name={stat.icon} />
                </span>
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

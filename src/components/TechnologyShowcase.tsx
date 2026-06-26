import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'up', 'right', 'left', 'pop', 'right'] as const

const technologies = [
  { title: 'Web Development', detail: 'React, APIs, dashboards, portals', icon: '01' },
  { title: 'Mobile Development', detail: 'Android, iOS, cross-platform apps', icon: '02' },
  { title: 'Cloud Solutions', detail: 'Scalable hosting, storage, deployment', icon: '03' },
  { title: 'Database Systems', detail: 'Secure data models and reporting', icon: '04' },
  { title: 'AI Solutions', detail: 'Automation, insights, smart workflows', icon: '05' },
  { title: 'Digital Platforms', detail: 'Integrated systems for daily operations', icon: '06' },
]

export function TechnologyShowcase() {
  return (
    <section className="tech-showcase section-panel" id="technology">
      <div className="container">
        <div className="split-heading">
          <ScrollReveal direction="left">
            <p className="section-subtitle">Technology Capabilities</p>
            <h2 className="section-title">Modern Systems Built For Real Business Operations</h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <p className="section-desc split-desc">
              From customer-facing apps to internal automation, we design digital platforms that are
              reliable, easy to use, and ready to grow with your company.
            </p>
          </ScrollReveal>
        </div>

        <div className="tech-grid">
          {technologies.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 70}
              direction={revealDirections[index]}
            >
              <article className="tech-card">
                <span className="tech-card-index">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

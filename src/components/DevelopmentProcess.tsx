import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'up', 'right', 'left', 'down', 'right'] as const

const steps = [
  ['01', 'Discovery', 'Understand goals, users, market, and technical needs.'],
  ['02', 'Planning', 'Define scope, roadmap, integrations, and delivery milestones.'],
  ['03', 'UI/UX Design', 'Create clean user flows and interfaces before development starts.'],
  ['04', 'Development', 'Build secure, scalable software with steady progress reviews.'],
  ['05', 'Testing', 'Validate performance, responsiveness, usability, and reliability.'],
  ['06', 'Launch & Support', 'Deploy confidently and support improvements after release.'],
]

export function DevelopmentProcess() {
  return (
    <section className="process-section section-panel" id="process">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-subtitle">Development Process</p>
            <h2 className="section-title">A Simple Path From Idea To Launch</h2>
            <p className="section-desc">
              Every project follows a clear process so you always know what is happening, why it
              matters, and what comes next.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline">
          {steps.map(([number, title, desc], index) => (
            <ScrollReveal key={number} delay={index * 80} direction={revealDirections[index]}>
              <article className="timeline-item">
                <span className="timeline-number">{number}</span>
                <div className="timeline-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

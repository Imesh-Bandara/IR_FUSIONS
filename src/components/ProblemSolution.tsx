import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'pop', 'right'] as const

const solutions = [
  {
    problem: 'Business processes are slow',
    solution: 'We build automation systems that reduce manual work and improve team speed.',
  },
  {
    problem: 'Need stronger online presence',
    solution: 'We create digital marketing strategies that grow visibility and trust.',
  },
  {
    problem: 'Need a mobile platform',
    solution: 'We develop high-quality applications with clean UX and dependable performance.',
  },
]

export function ProblemSolution() {
  return (
    <section className="problem-section section-panel section-light" id="solutions">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-subtitle">Problems We Solve</p>
            <h2 className="section-title">Clear Digital Answers For Common Growth Barriers</h2>
            <p className="section-desc">
              We focus on practical solutions that make your business easier to operate, easier to
              find, and easier for customers to use.
            </p>
          </div>
        </ScrollReveal>

        <div className="solution-grid">
          {solutions.map((item, index) => (
            <ScrollReveal
              key={item.problem}
              delay={index * 100}
              direction={revealDirections[index]}
            >
              <article className="solution-card">
                <div>
                  <span className="solution-label">Problem</span>
                  <h3>{item.problem}</h3>
                </div>
                <div className="solution-divider" aria-hidden="true" />
                <div>
                  <span className="solution-label solution-label-answer">Solution</span>
                  <p>{item.solution}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

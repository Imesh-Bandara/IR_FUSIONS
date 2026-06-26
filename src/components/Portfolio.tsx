import { ScrollReveal } from './ScrollReveal'

const revealDirections = ['left', 'pop', 'right'] as const

const projects = [
  {
    name: 'Retail Operations Platform',
    industry: 'Retail & Inventory',
    tech: ['React', 'Node API', 'Cloud DB'],
    tone: 'project-visual-blue',
  },
  {
    name: 'Service Booking Mobile App',
    industry: 'Local Services',
    tech: ['Mobile App', 'Firebase', 'Payments'],
    tone: 'project-visual-green',
  },
  {
    name: 'Growth Campaign Dashboard',
    industry: 'Marketing & Analytics',
    tech: ['Social Ads', 'Reports', 'Automation'],
    tone: 'project-visual-violet',
  },
]

export function Portfolio() {
  return (
    <section className="portfolio-section section-panel section-light" id="work">
      <div className="container">
        <div className="split-heading">
          <ScrollReveal direction="left">
            <p className="section-subtitle">Project Showcase</p>
            <h2 className="section-title">Digital Products Designed To Look Sharp And Work Hard</h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <p className="section-desc split-desc">
              A sample of the type of platforms we create for companies that need better software,
              stronger marketing, and smarter digital operations.
            </p>
          </ScrollReveal>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.name}
              delay={index * 100}
              direction={revealDirections[index]}
            >
              <article className="project-card">
                <div className={`project-visual ${project.tone}`} aria-label={`${project.name} preview`}>
                  <span className="project-window-bar" />
                  <span className="project-window-line project-line-wide" />
                  <span className="project-window-line" />
                  <span className="project-window-chart" />
                </div>
                <div className="project-body">
                  <span className="project-industry">{project.industry}</span>
                  <h3>{project.name}</h3>
                  <div className="project-tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#contact" className="project-link">View details</a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

interface AboutPageProps {
  onOpenContact: () => void
}

const founders = [
  {
    name: 'Founder 1',
    role: 'CEO & Co-Founder',
    image: '/founder-1.svg',
    bio: 'Leads strategy, partnerships, and growth initiatives with a sharp focus on turning ambitious ideas into measurable business outcomes.',
  },
  {
    name: 'Founder 2',
    role: 'CTO & Co-Founder',
    image: '/founder-2.svg',
    bio: 'Shapes the product and technology roadmap, turning complex problems into elegant, scalable solutions for modern brands.',
  },
]

const highlights = [
  'We blend strategy, design, and technology to create experiences that feel modern and deliver real impact.',
  'Our team helps businesses streamline operations, strengthen their digital presence, and grow with confidence.',
  'Every project is shaped around clarity, performance, and a strong long-term partnership.',
]

export function AboutPage({ onOpenContact }: AboutPageProps) {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero glass">
          <p className="section-subtitle">About IR FUSIONS</p>
          <h1 className="section-title">Technology Meets Business Vision</h1>
          <p className="section-desc">
            We combine technology and strategy to help companies improve operations, automate
            repetitive work, reach more customers, and grow with confidence in the digital world.
          </p>
          <div className="about-actions">
            <button type="button" className="btn btn-primary" onClick={onOpenContact}>
              Start a Project
            </button>
            <a href="/" className="btn btn-secondary">
              Back to Home
            </a>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-card glass">
            <h3>What we do</h3>
            <p>
              IR FUSIONS creates software, mobile applications, digital marketing strategies, and
              business technology plans for companies ready to grow.
            </p>
          </article>

          <article className="about-card glass">
            <h3>Why clients choose us</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="founders-section">
          <p className="section-subtitle">The Founders</p>
          <h2 className="section-title">Professional leadership with a human-centered approach</h2>
          <div className="founders-grid">
            {founders.map((founder) => (
              <article className="founder-card glass" key={founder.name}>
                <div className="founder-media">
                  <img src={founder.image} alt={founder.name} />
                </div>
                <div>
                  <p className="founder-role">{founder.role}</p>
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-bio">{founder.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

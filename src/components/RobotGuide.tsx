import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const services = [
  {
    step: 0,
    title: 'Mobile App Development',
    tagline: 'Build · Launch · Scale',
    description:
      'We design and develop native & cross-platform mobile apps with stunning UI, rock-solid performance, and seamless backend integration.',
    robotMessage:
      "Hi! I am your guide. First, let us turn your idea into a beautiful mobile app your users will love.",
    highlights: ['iOS & Android', 'UI/UX Design', 'API Integration', 'App Store Launch'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: 1,
    title: 'Social Media Campaigns',
    tagline: 'Engage · Grow · Convert',
    description:
      'Strategic social campaigns that build your brand, grow your audience, and drive real business results across every major platform.',
    robotMessage:
      "Great apps need great visibility. I will craft campaigns that put your brand in front of the right people.",
    highlights: ['Content Strategy', 'Paid Ads', 'Brand Growth', 'Analytics & Reports'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M18 8a3 3 0 1 0-2.83-4H9a5 5 0 1 0 0 10h6a3 3 0 1 0 0-6z" />
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Business Advisory',
    tagline: 'Plan · Optimize · Succeed',
    description:
      'Expert guidance on digital strategy, product roadmaps, and business growth — so every decision moves you closer to your goals.',
    robotMessage:
      "Almost there! I will help you align technology, marketing, and business strategy for long-term success.",
    highlights: ['Digital Strategy', 'Product Roadmaps', 'Market Analysis', 'Growth Consulting'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
  },
]

function RobotAvatar({ active }: { active: boolean }) {
  return (
    <div className={`robot-avatar ${active ? 'robot-avatar-active' : ''}`}>
      <div className="robot-avatar-head">
        <div className="robot-avatar-eye robot-avatar-eye-left" />
        <div className="robot-avatar-eye robot-avatar-eye-right" />
      </div>
      <div className="robot-avatar-body" />
      <div className="robot-avatar-glow" />
    </div>
  )
}

function GuideBubble({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`robot-bubble ${visible ? 'robot-bubble-visible' : ''}`}>
      <div className="robot-bubble-tail" />
      <p>{message}</p>
    </div>
  )
}

export function RobotGuide() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(entry.target.getAttribute('data-step'))
            if (!Number.isNaN(step)) setActiveStep(step)
          }
        })
      },
      { threshold: 0.45, rootMargin: '-15% 0px -15% 0px' },
    )

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="robot-journey" id="services">
      <div className="journey-bg-orb journey-bg-orb-1" />
      <div className="journey-bg-orb journey-bg-orb-2" />

      <div className="container journey-layout">
        <aside className="journey-sidebar" aria-label="Your robot guide">
          <ScrollReveal>
            <div className="journey-sidebar-inner">
              <RobotAvatar active />
              <GuideBubble message={services[activeStep].robotMessage} visible />

              <nav className="journey-progress" aria-label="Service steps">
                {services.map((s, i) => (
                  <a
                    key={s.step}
                    href={`#service-${s.step}`}
                    className={`journey-progress-step ${activeStep === i ? 'is-active' : ''} ${activeStep > i ? 'is-done' : ''}`}
                  >
                    <span className="journey-progress-dot">
                      {activeStep > i ? '✓' : i + 1}
                    </span>
                    <span className="journey-progress-label">{s.title.split(' ')[0]}</span>
                  </a>
                ))}
              </nav>
            </div>
          </ScrollReveal>
        </aside>

        <div className="journey-steps">
          <ScrollReveal className="journey-intro">
            <p className="section-subtitle">Your Digital Partner</p>
            <h2 className="section-title">Scroll — I'll Guide You</h2>
            <p className="section-desc">
              Follow along as I walk you through everything IR FUSIONS can build for your business.
            </p>
          </ScrollReveal>

          {services.map((service, i) => (
            <article
              key={service.step}
              id={`service-${service.step}`}
              data-step={service.step}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              className={`journey-step-card ${activeStep === i ? 'journey-step-active' : ''}`}
            >
              <ScrollReveal delay={100}>
                <div className="service-card">
                  <div className="service-card-icon">{service.icon}</div>
                  <div className="service-card-content">
                    <span className="service-card-tag">{service.tagline}</span>
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.description}</p>
                    <ul className="service-card-highlights">
                      {service.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-card-step-num" aria-hidden="true">
                    0{i + 1}
                  </div>
                </div>
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

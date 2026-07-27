interface ContactPageProps {
  onOpenContact?: () => void
}

const phoneNumbers = [
  { display: '072 217 7169', value: '+94722177169' },
  { display: '078 671 8562', value: '+94786718562' },
  { display: '074 309 5661', value: '+94743095661' },
]

const businessWhatsapp = '+94775513856'

export function ContactPage({ onOpenContact }: ContactPageProps) {
  return (
    <section className="contact-page">
      <div className="container contact-page-shell">
        <div className="contact-hero glass">
          <p className="section-subtitle">Contact IR FUSIONS</p>
          <h1 className="section-title">Reach our team from anywhere in Sri Lanka</h1>
          <p className="section-desc">
            Call us directly, message us on WhatsApp, or visit our office in Malabe for a quick consultation.
          </p>

          <div className="contact-hero-actions">
            <a href="tel:+94722177169" className="btn btn-primary">
              Call Now
            </a>
            <a
              href={`https://wa.me/${businessWhatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp Business
            </a>
            {onOpenContact ? (
              <button type="button" className="btn btn-secondary" onClick={onOpenContact}>
                Request a Callback
              </button>
            ) : null}
          </div>
        </div>

        <div className="contact-grid">
          <article className="contact-card glass">
            <h2>Direct contact</h2>
            <p className="contact-card-copy">
              Our support team is available for project discussions, consultations, and urgent requests.
            </p>

            <ul className="contact-list">
              {phoneNumbers.map((item) => (
                <li key={item.value}>
                  <a href={`tel:${item.value}`} className="contact-link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact-whatsapp-box">
              <p className="contact-label">Business WhatsApp</p>
              <a href={`https://wa.me/${businessWhatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="contact-link">
                077 551 3856
              </a>
            </div>
          </article>

          <article className="contact-card glass">
            <h2>Visit us in Malabe</h2>
            <p className="contact-card-copy">
              We are based in Malabe, Sri Lanka, and welcome in-person meetings for business planning and product discussions.
            </p>

            <div className="contact-map-frame">
              <iframe
                title="Map to Malabe, Sri Lanka"
                src="https://www.google.com/maps?q=Malabe,%20Sri%20Lanka&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

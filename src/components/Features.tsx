import React from 'react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      title: "Multi-Spectral Fusion",
      desc: "Fuses high-resolution Long-Wave Infrared (LWIR) with visible spectrum color feeds, offering unparalleled contrast and detail in any climate.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: "Neural Edge Analytics",
      desc: "Custom-trained deep learning networks process frames at the edge, performing automatic threat classification and bounding box overlays.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="20" y1="6" x2="20.01" y2="6" />
          <line x1="20" y1="18" x2="20.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Sub-10ms Latency",
      desc: "Built on optimized FPGA pipelines ensuring sub-10 millisecond glass-to-glass delay, keeping operators perfectly in sync with reality.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: "Adaptive Environment HUD",
      desc: "Intelligent calibration that penetrates fog, smog, smoke, and heavy rain while displaying crucial target metrics dynamically on a custom HUD.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">System Pillars</p>
          <h2 className="section-title">Engineered for Extremes</h2>
          <p className="section-desc">
            IR FUSION technology delivers mission-critical imaging. Each system is designed to provide clarity when traditional optics fail completely.
          </p>
        </div>

        <div className="grid-2">
          {featuresList.map((item, idx) => (
            <div key={idx} className="glass feature-card">
              <div className="feature-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

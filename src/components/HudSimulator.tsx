import React, { useState, useEffect, useRef } from 'react';

type HudMode = 'fusion' | 'thermal' | 'nv' | 'normal';

export const HudSimulator: React.FC = () => {
  const [mode, setMode] = useState<HudMode>('fusion');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for live mock telemetry data
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    heading: 182,
    range: 1240,
    sensorTemp: 14.8,
    targetCount: 3,
    signalStrength: 98
  });

  // Telemetry noise update
  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry(prev => ({
        fps: Math.floor(58 + Math.random() * 3),
        heading: (prev.heading + (Math.random() > 0.5 ? 1 : -1) + 360) % 360,
        range: prev.range + Math.floor(Math.random() * 5 - 2),
        sensorTemp: parseFloat((prev.sensorTemp + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        targetCount: Math.random() > 0.95 ? Math.floor(2 + Math.random() * 3) : prev.targetCount,
        signalStrength: Math.min(100, Math.max(90, prev.signalStrength + Math.floor(Math.random() * 3 - 1)))
      }));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let scanAngle = 0;
    
    // Targets state
    const targets = [
      { x: 120, y: 150, radius: 25, speedX: 0.2, speedY: -0.1, label: "TGT-ALPHA [PERSON]" },
      { x: 400, y: 220, radius: 40, speedX: -0.15, speedY: 0.1, label: "TGT-BRAVO [VEHICLE]" },
      { x: 280, y: 90, radius: 15, speedX: 0.1, speedY: 0.2, label: "TGT-CHARLIE [SENTRY]" }
    ];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, w, h);
      
      // Update targets pos
      targets.forEach(tgt => {
        tgt.x += tgt.speedX;
        tgt.y += tgt.speedY;
        
        // Bounce on boundaries
        if (tgt.x < 50 || tgt.x > w - 50) tgt.speedX *= -1;
        if (tgt.y < 50 || tgt.y > h - 50) tgt.speedY *= -1;
      });

      // Colors based on mode
      let colorPrimary = '#00f2fe';
      let colorAccent = '#ff473d';
      let bgGradStart = '#020d14';
      let bgGradEnd = '#010508';

      if (mode === 'thermal') {
        colorPrimary = '#ff473d';
        colorAccent = '#ff9f00';
        bgGradStart = '#180302';
        bgGradEnd = '#080100';
      } else if (mode === 'nv') {
        colorPrimary = '#00ff66';
        colorAccent = '#33ff88';
        bgGradStart = '#021808';
        bgGradEnd = '#000802';
      } else if (mode === 'normal') {
        colorPrimary = '#ffffff';
        colorAccent = '#00e5ff';
        bgGradStart = '#0b0f19';
        bgGradEnd = '#05070a';
      }

      // Draw background
      const bgGrad = ctx.createRadialGradient(w/2, h/2, 50, w/2, h/2, w/2);
      bgGrad.addColorStop(0, bgGradStart);
      bgGrad.addColorStop(1, bgGradEnd);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw standard environment lines / wireframe grid
      ctx.strokeStyle = `${colorPrimary}20`;
      ctx.lineWidth = 1;
      
      // Grid lines
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw thermal signatures / targets
      targets.forEach(tgt => {
        // Render Heat spot
        if (mode === 'thermal' || mode === 'fusion' || mode === 'nv') {
          const radGrad = ctx.createRadialGradient(tgt.x, tgt.y, 0, tgt.x, tgt.y, tgt.radius * 1.5);
          
          if (mode === 'thermal') {
            radGrad.addColorStop(0, '#ffffff'); // super hot white core
            radGrad.addColorStop(0.3, '#ff9f00'); // yellow middle
            radGrad.addColorStop(0.7, '#ff473d'); // red body
            radGrad.addColorStop(1, 'rgba(255, 71, 61, 0)');
          } else if (mode === 'fusion') {
            radGrad.addColorStop(0, '#ffffff');
            radGrad.addColorStop(0.4, '#ff473d');
            radGrad.addColorStop(1, 'rgba(255, 71, 61, 0)');
          } else { // nv
            radGrad.addColorStop(0, '#ffffff');
            radGrad.addColorStop(0.5, '#00ff66');
            radGrad.addColorStop(1, 'rgba(0, 255, 102, 0)');
          }
          
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(tgt.x, tgt.y, tgt.radius * 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard outlines
          ctx.strokeStyle = '#00f2fe40';
          ctx.fillStyle = 'rgba(0, 242, 254, 0.05)';
          ctx.beginPath();
          ctx.arc(tgt.x, tgt.y, tgt.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }

        // Draw Bounding Box (AI target detection)
        if (mode !== 'normal') {
          const boxSize = tgt.radius * 2;
          ctx.strokeStyle = colorPrimary;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(tgt.x - boxSize/2, tgt.y - boxSize/2, boxSize, boxSize);

          // Corner bracket styling
          ctx.strokeStyle = colorAccent;
          ctx.lineWidth = 2.5;
          const cornerLen = 8;
          const left = tgt.x - boxSize/2;
          const right = tgt.x + boxSize/2;
          const top = tgt.y - boxSize/2;
          const bottom = tgt.y + boxSize/2;

          // Top Left
          ctx.beginPath();
          ctx.moveTo(left, top + cornerLen);
          ctx.lineTo(left, top);
          ctx.lineTo(left + cornerLen, top);
          ctx.stroke();

          // Top Right
          ctx.beginPath();
          ctx.moveTo(right - cornerLen, top);
          ctx.lineTo(right, top);
          ctx.lineTo(right, top + cornerLen);
          ctx.stroke();

          // Bottom Left
          ctx.beginPath();
          ctx.moveTo(left, bottom - cornerLen);
          ctx.lineTo(left, bottom);
          ctx.lineTo(left + cornerLen, bottom);
          ctx.stroke();

          // Bottom Right
          ctx.beginPath();
          ctx.moveTo(right - cornerLen, bottom);
          ctx.lineTo(right, bottom);
          ctx.lineTo(right, bottom - cornerLen);
          ctx.stroke();

          // Label
          ctx.fillStyle = colorPrimary;
          ctx.font = '9px monospace';
          ctx.fillText(tgt.label, left, top - 6);
        }
      });

      // Draw Center Reticle / Scope overlay
      ctx.strokeStyle = colorPrimary;
      ctx.lineWidth = 1;
      
      // Center circle
      ctx.beginPath();
      ctx.arc(w/2, h/2, 45, 0, Math.PI * 2);
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Center crosshair lines
      ctx.beginPath();
      ctx.moveTo(w/2 - 70, h/2);
      ctx.lineTo(w/2 - 50, h/2);
      ctx.moveTo(w/2 + 50, h/2);
      ctx.lineTo(w/2 + 70, h/2);
      ctx.moveTo(w/2, h/2 - 70);
      ctx.lineTo(w/2, h/2 - 50);
      ctx.moveTo(w/2, h/2 + 50);
      ctx.lineTo(w/2, h/2 + 70);
      ctx.stroke();

      // Draw scrolling pitch scale (HUD ladder)
      ctx.lineWidth = 1;
      const ladderW = 30;
      ctx.beginPath();
      // left rung
      ctx.moveTo(w/2 - 100, h/2 - 40);
      ctx.lineTo(w/2 - 100 + ladderW, h/2 - 40);
      ctx.moveTo(w/2 - 100, h/2);
      ctx.lineTo(w/2 - 100 + ladderW + 10, h/2);
      ctx.moveTo(w/2 - 100, h/2 + 40);
      ctx.lineTo(w/2 - 100 + ladderW, h/2 + 40);
      
      // right rung
      ctx.moveTo(w/2 + 100, h/2 - 40);
      ctx.lineTo(w/2 + 100 - ladderW, h/2 - 40);
      ctx.moveTo(w/2 + 100, h/2);
      ctx.lineTo(w/2 + 100 - ladderW - 10, h/2);
      ctx.moveTo(w/2 + 100, h/2 + 40);
      ctx.lineTo(w/2 + 100 - ladderW, h/2 + 40);
      ctx.stroke();

      ctx.fillStyle = colorPrimary;
      ctx.font = '8px monospace';
      ctx.fillText("+10", w/2 - 120, h/2 - 37);
      ctx.fillText("00", w/2 - 120, h/2 + 3);
      ctx.fillText("-10", w/2 - 120, h/2 + 43);

      // Radar Scan Line sweep
      if (mode !== 'normal') {
        scanAngle = (scanAngle + 0.005) % (Math.PI * 2);
        
        ctx.save();
        ctx.translate(w - 70, h - 70);
        
        // draw miniature radar circle
        ctx.strokeStyle = `${colorPrimary}40`;
        ctx.beginPath();
        ctx.arc(0, 0, 40, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.stroke();

        // draw radar line
        ctx.strokeStyle = colorPrimary;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(scanAngle) * 40, Math.sin(scanAngle) * 40);
        ctx.stroke();
        ctx.restore();
      }

      // Scanlines & CRT screen curvature glow
      if (mode === 'nv' || mode === 'thermal' || mode === 'fusion') {
        ctx.fillStyle = 'rgba(255,255,255,0.015)';
        for (let y = 0; y < h; y += 4) {
          ctx.fillRect(0, y, w, 2);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mode]);

  const modeDetails = {
    fusion: {
      name: "IR FUSION OVERLAY",
      desc: "Combines 8-14μm thermal radiance with color-calibrated optical imagery. Maximum structural detail and heat detection."
    },
    thermal: {
      name: "LWIR THERMOGRAPHY",
      desc: "Long-Wave Infrared spectrum visualization. Discovers absolute thermal deviations, cutting through fog and dust."
    },
    nv: {
      name: "AMPLIFIED NIGHT VISION",
      desc: "High-gain photodiode amplification. Enhances sparse ambient starlight, outputting sharp tactical green contrast."
    },
    normal: {
      name: "STANDARD HD OPTICS",
      desc: "Visible spectrum camera sensor feed. Clean high-definition video without spectral enhancement overlays."
    }
  };

  return (
    <section className="hud-section" id="hud-sim">
      <div className="container">
        <div className="hud-layout">
          
          <div className="hud-info">
            <p className="section-subtitle">Tactical Simulation</p>
            <h2 className="section-title" style={{ fontSize: '2.4rem' }}>Interactive HUD Simulator</h2>
            <p className="section-desc" style={{ margin: '0' }}>
              Cycle through the sensor fusion modules below to see how the IR FUSION core processor overlays spatial intelligence in various conditions.
            </p>

            <div className="hud-selector">
              {(Object.keys(modeDetails) as HudMode[]).map((m) => (
                <button 
                  key={m} 
                  className={`hud-tab ${mode === m ? 'active' : ''}`}
                  onClick={() => setMode(m)}
                >
                  <div>
                    <div className="hud-tab-title">{modeDetails[m].name}</div>
                    <div className="hud-tab-desc">{modeDetails[m].desc.slice(0, 75)}...</div>
                  </div>
                  <div className="hud-indicator"></div>
                </button>
              ))}
            </div>
          </div>

          <div className={`hud-viewer mode-${mode}`}>
            {/* Live Interactive Canvas */}
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
            
            {/* Telemetry Overlay HUD */}
            <div className="hud-overlay">
              <div className="hud-top-hud">
                <div>
                  <div>SYS: CALIBRATED</div>
                  <div>FPS: {telemetry.fps}</div>
                  <div>FOV: 45° X 32°</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div>MODE: {mode.toUpperCase()}</div>
                  <div>SIG: {telemetry.signalStrength}%</div>
                  <div>TEMP: {telemetry.sensorTemp}°C</div>
                </div>
              </div>

              <div className="hud-bottom-hud">
                <div>
                  <div>HDG: {telemetry.heading.toString().padStart(3, '0')}°</div>
                  <div>RNG: {telemetry.range}m</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div>PWR: ACTIVE</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>CELL:</span>
                    <div className="hud-bar-container">
                      <div className="hud-bar-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Grid/Scanlines texture */}
            <div className="hud-scanner-overlay"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

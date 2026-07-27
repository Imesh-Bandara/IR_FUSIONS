import type { CSSProperties } from 'react'

interface BrandWordmarkProps {
  animate?: boolean
  className?: string
}

export function BrandWordmark({ animate = true, className = '' }: BrandWordmarkProps) {
  const ir = 'IR'.split('')
  const fusions = ' FUSIONS'.split('')
  const charStyle = (delay: number) => ({ '--char-delay': `${delay}s` }) as CSSProperties

  return (
    <h1
      className={`brand-wordmark ${animate ? 'brand-wordmark-animate' : ''} ${className}`.trim()}
    >
      <span className="brand-wordmark-ir">
        {ir.map((char, i) => (
          <span
            key={`ir-${i}`}
            className="brand-char brand-char-ir"
            style={charStyle(i * 0.07)}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="brand-wordmark-fusions">
        {fusions.map((char, i) => (
          <span
            key={`fu-${i}`}
            className="brand-char brand-char-fusions"
            style={charStyle(0.18 + i * 0.05)}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </h1>
  )
}

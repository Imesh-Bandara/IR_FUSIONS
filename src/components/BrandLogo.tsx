interface BrandLogoProps {
  variant?: 'header' | 'hero'
}

export function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  if (variant === 'hero') {
    return (
      <div className="brand-logo brand-logo-hero">
        <h1 className="brand-logo-wordmark">
          <span className="brand-logo-ir">IR</span>
          <span className="brand-logo-fusions"> FUSIONS</span>
        </h1>
      </div>
    )
  }

  return (
    <div className="brand-logo brand-logo-header">
      <img src="/logo.jpeg" alt="IR FUSIONS" className="brand-logo-image" />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { BrandWordmark } from './BrandWordmark'

const SPLINE_URL = 'https://prod.spline.design/8kH7Rk3T594M6HxU/scene.splinecode'

interface SplineSceneProps {
  onReady: () => void
  heroProgress: number
}

export function SplineScene({ onReady, heroProgress }: SplineSceneProps) {
  const [sceneReady, setSceneReady] = useState(false)
  const splineRef = useRef<HTMLElement>(null)
  const readyRef = useRef(false)

  const fade = Math.max(0, 1 - heroProgress * 1.4)
  const scale = 1 - heroProgress * 0.08

  useEffect(() => {
    const markReady = () => {
      if (readyRef.current) return
      readyRef.current = true
      setSceneReady(true)
      onReady()
    }

    const currentSpline = splineRef.current
    if (currentSpline) {
      currentSpline.addEventListener('load', markReady)
    }

    const timer = setTimeout(markReady, 2500)

    return () => {
      if (currentSpline) {
        currentSpline.removeEventListener('load', markReady)
      }
      clearTimeout(timer)
    }
  }, [onReady])

  return (
    <div
      className="spline-fullscreen"
      style={{
        opacity: fade,
        transform: `scale(${scale})`,
        pointerEvents: heroProgress > 0.85 ? 'none' : 'auto',
      }}
    >
      <div
        className="spline-brand-layer"
        style={{ opacity: Math.max(0, 1 - heroProgress * 2) }}
      >
        <BrandWordmark animate={heroProgress < 0.1} />
        <div className="brand-wordmark-glow" />
      </div>

      {!sceneReady && (
        <div className="spline-load-bar" aria-hidden="true">
          <div className="spline-load-bar-fill" />
        </div>
      )}

      <spline-viewer
        ref={splineRef as React.RefObject<HTMLElement>}
        url={SPLINE_URL}
        className={`spline-wrapper ${sceneReady ? 'spline-ready' : ''}`}
      />
    </div>
  )
}

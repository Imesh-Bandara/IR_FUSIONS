import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0)
  const [heroProgress, setHeroProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      const heroHeight = window.innerHeight
      setHeroProgress(Math.min(1, y / heroHeight))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollY, heroProgress }
}

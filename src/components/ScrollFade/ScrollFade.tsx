import { useEffect, useRef, useState } from 'react'

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ScrollFade = ({ children, className, style }: ScrollFadeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(1)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const vh = window.innerHeight

      // 1. Lower fade-in: As top of container enters from bottom of screen (vh -> vh * 0.2)
      const lowerFade =
        rect.top >= vh
          ? 0
          : rect.top > vh * 0.2
            ? (vh - rect.top) / (vh * 0.8)
            : 1

      // 2. Upper fade-out: As top of container leaves top of screen (0 -> -vh * 0.4)
      const upperFadeRange = vh * 0.4
      const upperFade =
        rect.top >= 0
          ? 1
          : Math.max(0, (rect.top + upperFadeRange) / upperFadeRange)

      const rawOpacity = Math.max(
        0,
        Math.min(1, Math.min(lowerFade, upperFade)),
      )

      // Smoothstep easing: 3x^2 - 2x^3 for buttery smooth transitions
      const smoothOpacity = rawOpacity * rawOpacity * (3 - 2 * rawOpacity)

      // Vertical translation offset (shifts up by 24px as it fades out/in)
      const offset = (1 - smoothOpacity) * 24

      setOpacity(smoothOpacity)
      setTranslateY(offset)
    }

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

export default ScrollFade

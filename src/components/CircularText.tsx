import { useMemo, useState, type CSSProperties } from 'react'

interface CircularTextProps {
  text?: string
  color?: string
  direction?: 'clockwise' | 'anticlockwise'
  radius?: number
  startAngle?: number
  rotateSpeed?: number
  fontSize?: number
  fontWeight?: number
  letterSpacing?: number
  className?: string
  center?: React.ReactNode
}

/**
 * Rebuilt from the reference "Circular Text Pro" Framer component — the
 * original only used Framer's `addPropertyControls` for its editor panel,
 * so the rotating-ring logic below is a 1:1 port with that stripped out.
 */
export default function CircularText({
  text = 'FLASHiT • NEED IT? FLASHiT • ',
  color = '#111822',
  direction = 'clockwise',
  radius = 46,
  startAngle = -90,
  rotateSpeed = 14,
  fontSize = 10,
  fontWeight = 700,
  letterSpacing = 1,
  className = '',
  center,
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const chars = useMemo(() => {
    const safeText = text.length ? text : ' '
    const repeated = safeText.length < 14 ? safeText.repeat(4) : safeText.repeat(2)
    return Array.from(repeated)
  }, [text])

  const step = 360 / chars.length
  const clockwise = direction === 'clockwise'
  const rotateKeyframes = clockwise ? 'circularTextRotateCW' : 'circularTextRotateCCW'

  const wrapperStyle: CSSProperties = {
    width: radius * 2,
    height: radius * 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }

  return (
    <div className={className} style={wrapperStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <style>{`
        @keyframes circularTextRotateCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes circularTextRotateCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .circular-text-ring { animation: none !important; }
        }
      `}</style>
      <div
        className="circular-text-ring"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          borderRadius: '50%',
          transformOrigin: '50% 50%',
          animationName: rotateKeyframes,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDuration: `${Math.max(0.05, isHovered ? rotateSpeed / 2 : rotateSpeed)}s`,
          willChange: 'transform',
        }}
      >
        {chars.map((char, i) => {
          const angle = startAngle + i * step
          return (
            <span
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transformOrigin: '50% 50%',
                transform: `rotateZ(${angle}deg) translate3d(0, -${radius}px, 0)`,
                fontSize,
                fontWeight,
                letterSpacing,
                fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                color,
                whiteSpace: 'pre',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              {char === ' ' ? ' ' : char}
            </span>
          )
        })}
      </div>
      {center && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{center}</div>}
    </div>
  )
}

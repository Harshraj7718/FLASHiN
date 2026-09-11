import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'

const VIEW_WIDTH = 927
const VIEW_HEIGHT = 400

// One uninterrupted curve connecting waypoints along the journey.
const PROCESS_PATH = `
  M 77 54
  C 132 2 244 8 297 118
  C 350 70 461 75 507 185
  C 571 124 698 136 757 271
`

const points = [
  { x: 77, y: 54 },
  { x: 297, y: 118 },
  { x: 507, y: 185 },
  { x: 757, y: 271 },
]

interface AnimatedPathProps {
  lineColor?: string
  dotColor?: string
  strokeWidth?: number
  dashLength?: number
  gapLength?: number
  dotSize?: number
  speed?: number
  trailLength?: number
  startDelay?: number
  startOnView?: boolean
  showBase?: boolean
  baseOpacity?: number
  className?: string
}

export default function AnimatedPath({
  lineColor = '#EB0029',
  dotColor = '#111822',
  strokeWidth = 1.5,
  dashLength = 7,
  gapLength = 7,
  dotSize = 11,
  speed = 130,
  trailLength = 0.3,
  startDelay = 0,
  startOnView = true,
  showBase = true,
  baseOpacity = 0.16,
  className = '',
}: AnimatedPathProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const measurementPathRef = useRef<SVGPathElement>(null)
  const [started, setStarted] = useState(!startOnView)
  const [pathLength, setPathLength] = useState(800)
  const uniqueId = useId().replace(/[:]/g, '')
  const animationName = `flashit-path-flow-${uniqueId}`
  const animationClass = `flashit-path-anim-${uniqueId}`

  // Measure the real curve so the speed stays visually consistent.
  useLayoutEffect(() => {
    const path = measurementPathRef.current
    if (!path) return
    const measured = path.getTotalLength()
    if (measured > 0) setPathLength(measured)
  }, [])

  useEffect(() => {
    if (!startOnView) {
      setStarted(true)
      return
    }
    const element = containerRef.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setStarted(entry.isIntersecting), { threshold: 0.15 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [startOnView])

  const animationDuration = Math.max(pathLength / Math.max(speed, 1), 0.4)
  const normalizedTrail = Math.max(0.01, Math.min(trailLength, 0.9999))
  const normalizedGap = 1 - normalizedTrail
  const maskId = `flashit-path-mask-${uniqueId}`

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
      <style>{`
        @keyframes ${animationName} {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -1; }
        }
        .${animationClass} {
          animation-name: ${animationName};
          animation-duration: ${animationDuration}s;
          animation-delay: ${Math.max(startDelay, 0)}s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
          will-change: stroke-dashoffset;
        }
        @media (prefers-reduced-motion: reduce) {
          .${animationClass} { animation: none !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, display: 'block', overflow: 'visible' }}
      >
        <path ref={measurementPathRef} d={PROCESS_PATH} fill="none" stroke="transparent" strokeWidth={1} pointerEvents="none" />
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" x={-100} y={-100} width={VIEW_WIDTH + 200} height={VIEW_HEIGHT + 200}>
            <path
              d={PROCESS_PATH}
              pathLength={1}
              fill="none"
              stroke="white"
              strokeWidth={Math.max(strokeWidth + 14, 18)}
              strokeLinecap="round"
              strokeDasharray={`${normalizedTrail} ${normalizedGap}`}
              strokeDashoffset={0}
              className={started ? animationClass : undefined}
            />
          </mask>
        </defs>

        {showBase && (
          <path
            d={PROCESS_PATH}
            fill="none"
            stroke={lineColor}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dashLength} ${gapLength}`}
            strokeLinecap="round"
            opacity={baseOpacity}
            vectorEffect="non-scaling-stroke"
          />
        )}

        <path
          d={PROCESS_PATH}
          fill="none"
          stroke={lineColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          mask={`url(#${maskId})`}
        />

        {points.map((point, index) => (
          <circle key={`dot-${index}`} cx={point.x} cy={point.y} r={dotSize / 2} fill={dotColor} />
        ))}
      </svg>
    </div>
  )
}

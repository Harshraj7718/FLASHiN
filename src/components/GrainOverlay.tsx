import { useCallback, useEffect, useRef } from 'react'

interface GrainOverlayProps {
  opacity?: number
  grainSize?: number
  speed?: number
  blendMode?: React.CSSProperties['mixBlendMode']
  mode?: 'grain' | 'scanlines' | 'both'
  scanlineSpacing?: number
  scanlineOpacity?: number
  showVignette?: boolean
  vignetteColor?: string
  vignetteStrength?: number
  vignetteSize?: number
}

/**
 * Rebuilt from the reference "GrainOverlay" Framer component. The original
 * used framer-motion's useScroll/useTransform purely for an optional
 * scroll-linked fade — dropped here since this runs as a fixed, full-viewport
 * layer with no single scroll container to track. Everything else (the
 * canvas noise + scanline drawing, the vignette) is a direct port.
 */
export default function GrainOverlay({
  opacity = 0.022,
  grainSize = 80,
  speed = 12,
  blendMode = 'overlay',
  mode = 'both',
  scanlineSpacing = 4,
  scanlineOpacity = 0.015,
  showVignette = true,
  vignetteColor = '#111822',
  vignetteStrength = 0.16,
  vignetteSize = 80,
}: GrainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | undefined>(undefined)
  const lastFrameRef = useRef(0)

  const drawGrain = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const { width, height } = canvas
      if (width === 0 || height === 0) return

      if (mode === 'grain' || mode === 'both') {
        const imageData = ctx.createImageData(width, height)
        const data = imageData.data
        const blockSize = Math.max(1, Math.round(grainSize / 20))
        for (let y = 0; y < height; y += blockSize) {
          for (let x = 0; x < width; x += blockSize) {
            const value = Math.random() * 255
            for (let dy = 0; dy < blockSize && y + dy < height; dy++) {
              for (let dx = 0; dx < blockSize && x + dx < width; dx++) {
                const index = ((y + dy) * width + (x + dx)) * 4
                data[index] = value
                data[index + 1] = value
                data[index + 2] = value
                data[index + 3] = 255
              }
            }
          }
        }
        ctx.putImageData(imageData, 0, 0)
      } else {
        ctx.clearRect(0, 0, width, height)
      }

      if (mode === 'scanlines' || mode === 'both') {
        ctx.fillStyle = `rgba(0, 0, 0, ${scanlineOpacity})`
        for (let y = 0; y < height; y += scanlineSpacing) {
          ctx.fillRect(0, y, width, 1)
        }
      }
    },
    [mode, grainSize, scanlineSpacing, scanlineOpacity],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrain(canvas)
    }
    resize()
    window.addEventListener('resize', resize)

    if (reducedMotion) {
      return () => window.removeEventListener('resize', resize)
    }

    const animate = (timestamp: number) => {
      const interval = 1000 / speed
      if (timestamp - lastFrameRef.current >= interval) {
        lastFrameRef.current = timestamp
        drawGrain(canvas)
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [drawGrain, speed])

  const vignetteGradient = showVignette
    ? `radial-gradient(ellipse at center, transparent ${100 - vignetteSize}%, ${vignetteColor} 100%)`
    : undefined

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', mixBlendMode: blendMode, opacity, display: 'block' }} />
      {showVignette && <div style={{ position: 'absolute', inset: 0, background: vignetteGradient, opacity: vignetteStrength }} />}
    </div>
  )
}

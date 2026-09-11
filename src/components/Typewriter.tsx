import { useEffect, useRef, useState } from 'react'

interface TypewriterProps {
  text: string
  className?: string
  speed?: number
  startDelay?: number
  cursor?: boolean
}

export default function Typewriter({ text, className = '', speed = 55, startDelay = 200, cursor = true }: TypewriterProps) {
  const [count, setCount] = useState(0)
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const startedRef = useRef(false)

  useEffect(() => {
    setCount(0)
    startedRef.current = false
  }, [text])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setCount(text.length)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return
        startedRef.current = true

        let i = 0
        const tick = () => {
          i += 1
          setCount(i)
          if (i < text.length) {
            timerRef.current = setTimeout(tick, speed)
          }
        }
        timerRef.current = setTimeout(tick, startDelay)
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timerRef.current)
    }
  }, [text, speed, startDelay])

  return (
    <span ref={wrapperRef} className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {cursor && <span className="typewriter-cursor" style={{ borderRight: '0.09em solid currentColor', marginLeft: '0.03em' }} />}
      </span>
      <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}>
        {text}
      </span>
    </span>
  )
}

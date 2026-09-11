import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import CircularText from './CircularText'

export default function CircularBadge() {
  return (
    <Link
      to="/join"
      aria-label="Join FLASHiT"
      className="fixed right-4 top-[92px] z-40 hidden items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 sm:right-6 sm:top-24 md:flex"
    >
      <CircularText
        text="NEED IT? FLASHiT • JOIN NOW • "
        color="#EB0029"
        radius={44}
        fontSize={9}
        letterSpacing={0.5}
        rotateSpeed={16}
        center={
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_6px_18px_-6px_rgba(235,0,41,0.6)]">
            <Zap size={14} fill="currentColor" aria-hidden="true" />
          </span>
        }
      />
    </Link>
  )
}

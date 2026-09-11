import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import CurtainLoader from '@/components/CurtainLoader'
import GrainOverlay from '@/components/GrainOverlay'
import CircularBadge from '@/components/CircularBadge'
import Home from '@/pages/Home'
import { useLanguage } from '@/i18n'

const Customers = lazy(() => import('@/pages/Customers'))
const Suppliers = lazy(() => import('@/pages/Suppliers'))
const Professionals = lazy(() => import('@/pages/Professionals'))
const HowItWorks = lazy(() => import('@/pages/HowItWorks'))
const BulkOrders = lazy(() => import('@/pages/BulkOrders'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Join = lazy(() => import('@/pages/Join'))
const Legal = lazy(() => import('@/pages/Legal'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

function SuspenseFallback() {
  const { t } = useLanguage()
  return <div className="py-32 text-center text-brand-dark/40">{t.common.loading}</div>
}

export default function App() {
  return (
    <BrowserRouter>
      <CurtainLoader />
      <GrainOverlay />
      <CircularBadge />
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customer" element={<Customers />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/bulk-orders" element={<BulkOrders />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<Join />} />
              <Route path="/legal/:page" element={<Legal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  )
}

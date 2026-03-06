'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustSection from '@/components/TrustSection'
import PairingSection from '@/components/PairingSection'
import ProductCategories from '@/components/ProductCategories'
import AIVisionSection from '@/components/AIVisionSection'
import YouthEmploymentSection from '@/components/YouthEmploymentSection'
import FounderSection from '@/components/FounderSection'
import PhilosophySection from '@/components/PhilosophySection'
import NewsletterSection from '@/components/NewsletterSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSection />
      <PairingSection />
      <ProductCategories />
      <AIVisionSection />
      <YouthEmploymentSection />
      <FounderSection />
      <PhilosophySection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

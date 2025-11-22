import React from 'react'
import ServiceHeader from './ServiceHeader'
import HeroSection from './HeroSection'
import ServiceGrid from './ServiceGrid'
import Partners from '@/components/partners/Partners'

const Page = async () => {
  return (
    <div>
      <HeroSection />
      <ServiceHeader />
      <ServiceGrid />
      <Partners />
    </div>
  )
}

export default Page

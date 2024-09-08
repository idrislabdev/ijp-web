import React from 'react'
import AboutUsHeroSection from '@/@core/page/about-us/hero-section'
import AboutUsProfileSection from '@/@core/page/about-us/profile-section'
import AboutUsOurMission from '@/@core/page/about-us/our-mission'
import AboutUsStrategySection from '@/@core/page/about-us/strategy-section'
import AboutUsHistorySection from '@/@core/page/about-us/history-section'
import AboutUsAreaSection from '@/@core/page/about-us/area-section'

import '@/styles/about-us.css'

export default async function  MainPage({ params }: any) {
  return (
    <main className='about-us-page sm:mobile-responsive'>
      <AboutUsHeroSection />
      <AboutUsProfileSection />
      <AboutUsOurMission />
      <AboutUsHistorySection />
      <AboutUsStrategySection />
      <AboutUsAreaSection />
    </main>
  )
}


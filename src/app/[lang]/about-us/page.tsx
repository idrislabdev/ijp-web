import React from 'react'
import '@/styles/about-us.css'
import AboutUsHeroSection from '@/@core/page/about-us/hero-section'
import AboutUsProfileSection from '@/@core/page/about-us/profile-section'
import AboutUsOurMission from '@/@core/page/about-us/our-mission'
import AboutUsStrategySection from '@/@core/page/about-us/strategy-section'

export default async function  MainPage({ params }: any) {
  return (
    <main className='home-page sm:mobile-responsive'>
      <AboutUsHeroSection />
      <AboutUsProfileSection />
      <AboutUsOurMission />
      <AboutUsStrategySection />
    </main>
  )
}


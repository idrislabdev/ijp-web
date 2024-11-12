import React from 'react'
import AboutUsHeroSection from '@/@core/page/about-us/hero-section'
import AboutUsProfileSection from '@/@core/page/about-us/profile-section'
import AboutUsOurMission from '@/@core/page/about-us/our-mission'
import AboutUsStrategySection from '@/@core/page/about-us/strategy-section'
import AboutUsHistorySection from '@/@core/page/about-us/history-section'
import AboutUsAreaSection from '@/@core/page/about-us/area-section'
import { getDictionariesAbout } from '@/app/dictionaries'

import '@/styles/about-us.css'
import axiosInstance from '@/@core/utils/axios'
async function getData() {
  let res = await fetch(`${process.env.BASE_API_URL}/api/about-us`, {
    cache: 'no-store',
  })
  let data = await res.json()
  return data.data
}
 
export default async function  MainPage({ params }: any) {
  const { 
    header, 
    profile,
    histories,
    market_area,
    strategies,
    vission_mission
   } = await getData();
  return (
    <main className='about-us-page sm:mobile-responsive'>
      <AboutUsHeroSection objLang={header} lang={params.lang} />
      <AboutUsProfileSection objLang={profile} lang={params.lang} />
      <AboutUsOurMission objLang={vission_mission} lang={params.lang}/>
      <AboutUsHistorySection objLang={histories} lang={params.lang}/>
      <AboutUsStrategySection objLang={strategies} lang={params.lang}/>
      <AboutUsAreaSection objLang={market_area} lang={params.lang}/>
    </main>
  )
}


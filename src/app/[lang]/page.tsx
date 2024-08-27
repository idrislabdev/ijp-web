import React from 'react'
import HomeOurProductsSection from '@/@core/page/home/our-products-section'
import HomeAboutSection from '@/@core/page/home/about-section'
import HomeBusinessUnitSection from '@/@core/page/home/business-unit-section'
import HomeBannerSection from '@/@core/page/home/banner-section'
import HomeNewsSection from '@/@core/page/home/news-section'

import '@/styles/home.css'

export default async function  MainPage({ params }: any) {
  return (
    <main className='home-page sm:mobile-responsive'>
      <HomeBannerSection />
      <HomeAboutSection objLang={null} />
      <HomeBusinessUnitSection objLang={null}/>
      <HomeOurProductsSection />
      <HomeNewsSection objLang={null}/>
    </main>
  )
}


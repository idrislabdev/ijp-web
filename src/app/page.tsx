import React from 'react'
import MainHeader from '@/@core/components/main-header'
import HomeOurProductsSection from '@/@core/page/home/our-products-section'
import HomeAboutSection from '@/@core/page/home/about-section'
import HomeBusinessUnitSection from '@/@core/page/home/business-unit-section'
import HomeBannerSection from '@/@core/page/home/banner-section'
import HomeNewsSection from '@/@core/page/home/news-section'
import Footer from '@/@core/components/footer'
import '@/styles/components/main-header.css'
import '@/styles/home.css'


export default async function  MainPage({ params }: any) {
  return (
    <main className='home-page sm:mobile-responsive'>
      <MainHeader lang={'id'}/>
      <HomeBannerSection lang={'id'} />
      <HomeAboutSection objLang={null} />
      <HomeBusinessUnitSection objLang={null}/>
      <HomeOurProductsSection />
      <HomeNewsSection objLang={null}/>
      <Footer />
    </main>
  )
}


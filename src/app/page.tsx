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
import { getDictionariesHome } from './dictionaries'

export default async function  MainPage({ params }: any) {
  const { 
    header, 
    about, 
    business_units, 
    news, 
    our_products
   } = await getDictionariesHome();
  
  return (
    <>
      <MainHeader lang={'id'}/>
      <main className='home-page sm:mobile-responsive'>
        <HomeBannerSection objLang={header} lang={'id'} />
        <HomeAboutSection objLang={about} lang={'id'} />
        <HomeBusinessUnitSection objLang={business_units} lang={'id'}/>
        <HomeOurProductsSection objLang={our_products} lang={'id'}/>
        {/* <HomeNewsSection objLang={news} lang={'id'}/> */}
      </main>
      <Footer /> 
    </>
  )
}


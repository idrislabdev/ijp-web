import React from 'react'
import HomeOurProductsSection from '@/@core/page/home/our-products-section'
import HomeAboutSection from '@/@core/page/home/about-section'
import HomeBusinessUnitSection from '@/@core/page/home/business-unit-section'
import HomeBannerSection from '@/@core/page/home/banner-section'
import HomeNewsSection from '@/@core/page/home/news-section'

import '@/styles/home.css'
import { getDictionariesHome } from '../dictionaries'

export default async function  MainPage({ params }: any) {
  const { 
    header, 
    about, 
    business_units, 
    news, 
    our_products
   } = await getDictionariesHome();
  return (
    <main className='home-page sm:mobile-responsive'>
      <HomeBannerSection objLang={header} lang={params.lang} />
      <HomeAboutSection objLang={about} lang={params.lang}/>
      <HomeBusinessUnitSection objLang={business_units} lang={params.lang}/>
      <HomeOurProductsSection objLang={our_products} lang={params.lang} />
      <HomeNewsSection objLang={news} lang={params.lang}/>
    </main>
  )
}


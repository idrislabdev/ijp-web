"use"
import React from 'react'
import HomeBannerSection from '../banner-section';
import HomeAboutSection from '../about-section';
import HomeBusinessUnitSection from '../business-unit-section';
import HomeOurProductsSection from '../our-products-section';
import MainHeader from '@/@core/components/main-header';
import Footer from '@/@core/components/footer';
import axiosInstance from '@/@core/utils/axios';
import '@/styles/components/main-header.css'
import '@/styles/home.css'
import { promises as fs } from 'fs';
import { getDataHome } from '@/@core/services/api';
import { unstable_cache } from 'next/cache'


async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/home/about`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
   
export default async function  HomePageWrapper(props: { lang:string }) {
    const { lang } = props
    const { 
      header, 
      about, 
      business_units, 
      news, 
      our_products
     } = await getData();

    return (
        <>
            <MainHeader lang={lang}/>
            <main className='home-page sm:mobile-responsive'>
                <HomeBannerSection objLang={header} lang={lang} />
                <HomeAboutSection objLang={about} lang={lang}/>
                <HomeBusinessUnitSection objLang={business_units} lang={lang}/>
                <HomeOurProductsSection objLang={our_products} lang={lang} />
                {/* <HomeNewsSection objLang={news} lang={lang}/> */}
            </main>
\        </>
    )
}


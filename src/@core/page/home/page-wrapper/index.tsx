
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

export default async function  HomePageWrapper(props: { lang:string }) {
    const { lang } = props
    // const response = await axiosInstance.get(`/api/home`);
    // const { data } = response.data
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`)

    const res = await fetch(`http://127.0.0.1:3000/api/home`)
    const { data } = await res.json()
    const { 
      header, 
      about, 
      business_units, 
      news, 
      our_products
     } = data;

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
            <Footer />
        </>
    )
}


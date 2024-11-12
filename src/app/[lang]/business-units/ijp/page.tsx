import React from 'react'
import BusinessUnitsHeroSection from '@/@core/page/business-units/hero-section';
import BusinessUnitsProductsSection from '@/@core/page/business-units/products-section';
import BusinessUnitsOurMissionSection from '@/@core/page/business-units/our-mission-section';
import BusinessUnitsProfileSection from '@/@core/page/business-units/profile-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';

import '@/styles/business-units.css'
import axiosInstance from '@/@core/utils/axios';
async function getData() {
  let res = await fetch(`${process.env.BASE_API_URL}/api/business-units-ijp`, {
    cache: 'no-store',
  })
  let data = await res.json()
  return data.data
}
export default async function  IjpPage({ params }: any) {
    const { 
      header, 
      profile,
      vission_mission,
      our_products,
      contact
    } = await getData();
    return (
      <main className='business-units-page sm:mobile-responsive'>
        <BusinessUnitsHeroSection objLang={header} lang={params.lang}/>
        <BusinessUnitsProfileSection objLang={profile} lang={params.lang}/>
        <BusinessUnitsOurMissionSection objLang={vission_mission} lang={params.lang}/>
        <BusinessUnitsProductsSection objLang={our_products} lang={params.lang}/>
        <BusinessUnitsContactUsSection objLang={contact} lang={params.lang}/>
      </main>
    )
  }
  
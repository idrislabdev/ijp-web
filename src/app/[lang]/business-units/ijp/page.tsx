import React from 'react'
import BusinessUnitsHeroSection from '@/@core/page/business-units/hero-section';
import BusinessUnitsProductsSection from '@/@core/page/business-units/products-section';
import BusinessUnitsOurMissionSection from '@/@core/page/business-units/our-mission-section';
import BusinessUnitsProfileSection from '@/@core/page/business-units/profile-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';
import { getDictionariesIjp } from '@/app/dictionaries';

import '@/styles/business-units.css'

export default async function  IjpPage({ params }: any) {
    const { 
      header, 
      profile,
      vission_mission,
      our_products,
      contact
    } = await getDictionariesIjp();
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
  
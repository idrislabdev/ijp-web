import React from 'react'


import BusinessUnitsHeroIjsaSection from '@/@core/page/business-units/hero-ijsa-section';
import BusinessUnitsProductsIjsaSection from '@/@core/page/business-units/products-ijsa-section';
import BusinessUnitsOurMissionIjsaSection from '@/@core/page/business-units/our-mission-ijsa-section';
import BusinessUnitsProfileIjsaSection from '@/@core/page/business-units/profile-ijsa-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';
import BusinessUnitsAreaSection from '@/@core/page/business-units/area-section';
import { getDictionariesIjsa } from '@/app/dictionaries';

import '@/styles/business-units.css'

export default async function  IjsaPage({ params }: any) {
    const { 
      header, 
      profile,
      vission_mission,
      our_products,
      market_area,
      contact
    } = await getDictionariesIjsa();
    return (
      <main className='business-units-page sm:mobile-responsive'>
        <BusinessUnitsHeroIjsaSection objLang={header} lang={params.lang}/>
        <BusinessUnitsProfileIjsaSection objLang={profile} lang={params.lang}/>
        <BusinessUnitsOurMissionIjsaSection objLang={vission_mission} lang={params.lang}/>
        <BusinessUnitsProductsIjsaSection objLang={our_products} lang={params.lang}/>
        <BusinessUnitsAreaSection objLang={market_area} lang={params.lang}/>
        <BusinessUnitsContactUsSection objLang={contact} lang={params.lang} />
      </main>
    )
  }
  
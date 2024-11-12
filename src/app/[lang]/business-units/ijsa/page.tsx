import React from 'react'


import BusinessUnitsHeroIjsaSection from '@/@core/page/business-units/hero-ijsa-section';
import BusinessUnitsProductsIjsaSection from '@/@core/page/business-units/products-ijsa-section';
import BusinessUnitsOurMissionIjsaSection from '@/@core/page/business-units/our-mission-ijsa-section';
import BusinessUnitsProfileIjsaSection from '@/@core/page/business-units/profile-ijsa-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';
import BusinessUnitsAreaSection from '@/@core/page/business-units/area-section';

async function getData() {
  let res = await fetch(`${process.env.BASE_API_URL}/api/business-units-ijsa`, {
    cache: 'no-store',
  })
  let data = await res.json()
  return data.data
}
export default async function  IjsaPage({ params }: any) {
    const { 
      header, 
      profile,
      vission_mission,
      our_products,
      market_area,
      contact
    } = await getData();
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
  
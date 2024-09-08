import React from 'react'


import BusinessUnitsHeroIjsaSection from '@/@core/page/business-units/hero-ijsa-section';
import BusinessUnitsProductsIjsaSection from '@/@core/page/business-units/products-ijsa-section';
import BusinessUnitsOurMissionIjsaSection from '@/@core/page/business-units/our-mission-ijsa-section';
import BusinessUnitsProfileIjsaSection from '@/@core/page/business-units/profile-ijsa-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';
import BusinessUnitsAreaSection from '@/@core/page/business-units/area-section';

import { getDictionariesContactUs } from '@/app/dictionaries';
import '@/styles/business-units.css'

export default async function  IjsaPage({ params }: any) {
    const {
        header_section, 
        info_section,
    } = await getDictionariesContactUs(params.lang);

    return (
      <main className='business-units-page sm:mobile-responsive'>
        <BusinessUnitsHeroIjsaSection objLang={null} />
        <BusinessUnitsProfileIjsaSection />
        <BusinessUnitsOurMissionIjsaSection />
        <BusinessUnitsProductsIjsaSection />
        <BusinessUnitsAreaSection objLang={null} />
        <BusinessUnitsContactUsSection objLang={null} />
      </main>
    )
  }
  
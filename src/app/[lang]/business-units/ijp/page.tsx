import React from 'react'


import BusinessUnitsHeroSection from '@/@core/page/business-units/hero-section';
import BusinessUnitsProductsSection from '@/@core/page/business-units/products-section';
import BusinessUnitsOurMissionSection from '@/@core/page/business-units/our-mission-section';
import BusinessUnitsProfileSection from '@/@core/page/business-units/profile-section';
import BusinessUnitsContactUsSection from '@/@core/page/business-units/contact-us-section';

import { getDictionariesContactUs } from '@/app/dictionaries';
import '@/styles/business-units.css'

export default async function  IjpPage({ params }: any) {
    const {
        header_section, 
        info_section,
    } = await getDictionariesContactUs(params.lang);

    return (
      <main className='business-units-page sm:mobile-responsive'>
        <BusinessUnitsHeroSection objLang={null} />
        <BusinessUnitsProfileSection />
        <BusinessUnitsOurMissionSection />
        <BusinessUnitsProductsSection />
        <BusinessUnitsContactUsSection objLang={null} />
      </main>
    )
  }
  
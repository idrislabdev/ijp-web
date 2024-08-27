import ContactUsMapSection from '@/@core/page/contact-us/map-section'
import React from 'react'
import { getDictionariesContactUs } from '@/app/dictionaries';

import '@/styles/contact-us.css'
import ContactUsHeaderSection from '@/@core/page/contact-us/header-section';
import ContactUsInfoSection from '@/@core/page/contact-us/info-section';
export default async function  ContactUsPage({ params }: any) {
    const {
        header_section, 
        info_section,
    } = await getDictionariesContactUs(params.lang);

    return (
      <main className='contact-us-page sm:mobile-responsive'>
        <ContactUsMapSection objLang={null} />
        <ContactUsHeaderSection objLang={header_section} />
        <ContactUsInfoSection objLang={info_section} />
      </main>
    )
  }
  
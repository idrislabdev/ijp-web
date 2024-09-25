import React from 'react'
import ContactUsHeaderSection from '@/@core/page/contact-us/header-section';
import ContactUsInfoSection from '@/@core/page/contact-us/info-section';
import ContactUsMapSection from '@/@core/page/contact-us/map-section'

import { getDictionariesContactUs } from '@/app/dictionaries';
import '@/styles/contact-us.css'

export default async function  ContactUsPage({ params }: any) {
  const { 
    header, 
    info,
    office_hour
  } = await getDictionariesContactUs();
    return (
      <main className='contact-us-page sm:mobile-responsive'>
        <ContactUsMapSection objLang={header} lang={params.lang} />
        <ContactUsHeaderSection objLang={header} lang={params.lang} />
        <ContactUsInfoSection objLang={info} lang={params.lang} />
      </main>
    )
  }
  
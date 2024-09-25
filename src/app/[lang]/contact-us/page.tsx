import React from 'react'
import ContactUsHeaderSection from '@/@core/page/contact-us/header-section';
import ContactUsInfoSection from '@/@core/page/contact-us/info-section';
import ContactUsMapSection from '@/@core/page/contact-us/map-section'

import '@/styles/contact-us.css'

export default async function  ContactUsPage({ params }: any) {

    return (
      <main className='contact-us-page sm:mobile-responsive'>
        <ContactUsMapSection objLang={null} />
        <ContactUsHeaderSection objLang={null} />
        <ContactUsInfoSection objLang={null} />
      </main>
    )
  }
  
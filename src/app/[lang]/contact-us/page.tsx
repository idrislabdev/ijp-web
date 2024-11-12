import React from 'react'
import ContactUsHeaderSection from '@/@core/page/contact-us/header-section';
import ContactUsInfoSection from '@/@core/page/contact-us/info-section';
import ContactUsMapSection from '@/@core/page/contact-us/map-section'

import '@/styles/contact-us.css'

async function getData() {
  let res = await fetch(`${process.env.BASE_API_URL}/api/contact-us`, {
    cache: 'no-store',
  })
  let data = await res.json()
  return data.data
}
export default async function  ContactUsPage({ params }: any) {
    const { 
      header, 
      info
    } = await getData();

    return (
      <main className='contact-us-page sm:mobile-responsive'>
        <ContactUsMapSection objLang={header} lang={params.lang} />
        <ContactUsHeaderSection objLang={header} lang={params.lang} />
        <ContactUsInfoSection objLang={info} lang={params.lang} />
      </main>
    )
  }
  
import React from 'react'
import ContactUsHeaderSection from '@/@core/page/contact-us/header-section';
import ContactUsInfoSection from '@/@core/page/contact-us/info-section';
import ContactUsMapSection from '@/@core/page/contact-us/map-section'

import { getDictionariesContactUs } from '@/app/dictionaries';
import '@/styles/contact-us.css'
import axiosInstance from '@/@core/utils/axios';

export default async function  ContactUsPage({ params }: any) {
    const response = await axiosInstance.get(`/api/contact-us`);
    const { data } = response.data
    const { 
      header, 
      info
    } = data;

    return (
      <main className='contact-us-page sm:mobile-responsive'>
        <ContactUsMapSection objLang={header} lang={params.lang} />
        <ContactUsHeaderSection objLang={header} lang={params.lang} />
        <ContactUsInfoSection objLang={info} lang={params.lang} />
      </main>
    )
  }
  
import React from 'react'
import CareersHeroSection from '@/@core/page/careers/hero-section';
import CareersJobsSection from '@/@core/page/careers/jobs-section';
import CareersAreaSection from '@/@core/page/careers/area-section';
import '@/styles/careers.css'
import { getDictionariesCarrers } from '@/app/dictionaries';

export default async function  ContactUsPage({ params }: any) {
    const { 
      header, 
      jobs_area,
      office_location
    } = await getDictionariesCarrers();
    return (
      <main className='careers-page sm:mobile-responsive'>
        <CareersHeroSection objLang={header} lang={params.lang}/>
        <CareersAreaSection objLang={office_location} lang={params.lang} />
        <CareersJobsSection objLang={jobs_area}  lang={params.lang}/>
      </main>
    )
  }
  
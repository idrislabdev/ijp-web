import React from 'react'
import CareersHeroSection from '@/@core/page/careers/hero-section';
import CareersJobsSection from '@/@core/page/careers/jobs-section';
import CareersAreaSection from '@/@core/page/careers/area-section';
import '@/styles/careers.css'

export default async function  ContactUsPage({ params }: any) {

    return (
      <main className='careers-page sm:mobile-responsive'>
        <CareersHeroSection objLang={null} />
        <CareersAreaSection objLang={null} />
        <CareersJobsSection lang={params.lang} objLang={null} />
      </main>
    )
  }
  
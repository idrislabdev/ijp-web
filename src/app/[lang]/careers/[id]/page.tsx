import React from 'react'
import CareersHeroSection from '@/@core/page/careers/hero-section';
import CareersJobsSection from '@/@core/page/careers/jobs-section';
import CareersAreaSection from '@/@core/page/about-us/area-section';
import CareersDetailSection from '@/@core/page/careers/detail-section';
import '@/styles/careers.css'
import CareersHeroDetailSection from '@/@core/page/careers/hero-detail-section';

export default async function  ContactUsDetailPage({ params }: any) {

    return (
      <main className='careers-page sm:mobile-responsive'>
        <CareersHeroDetailSection objLang={null} />
        <CareersDetailSection objLang={null} params={params} />
      </main>
    )
  }
  
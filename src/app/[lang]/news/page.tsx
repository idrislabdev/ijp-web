import React from 'react'

import '@/styles/news.css'
import NewsLatestSection from '@/@core/page/news/latest-section'
import NewsMainSection from '@/@core/page/news/main-section'
import NewsHeroSection from '@/@core/page/news/hero-section'
export default async function  ContactUsPage({ params }: any) {

    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={null} />
            <NewsMainSection objLang={null} />
            <NewsLatestSection objLang={null} />
        </main>
    )
  }
  
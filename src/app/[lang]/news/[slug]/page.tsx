import React from 'react'

import '@/styles/news.css'
import NewsLatestSection from '@/@core/page/news/latest-section'
import NewsMainSection from '@/@core/page/news/main-section'
import NewsHeroSection from '@/@core/page/news/hero-section'
import NewsDetailSection from '@/@core/page/news/detail-section'
export default async function  NewsBlogPage({ params }: any) {

    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={null} />
            <NewsDetailSection lang={params.lang} objLang={null} />
        </main>
    )
  }
  
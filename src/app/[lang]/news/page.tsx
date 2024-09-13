import React from 'react'

import '@/styles/news.css'
import NewsLatestSection from '@/@core/page/news/latest-section'
import NewsMainSection from '@/@core/page/news/main-section'
import NewsHeroSection from '@/@core/page/news/hero-section'
export default async function  NewsPage({ params }: any) {

    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={null} />
            <NewsMainSection lang={params.lang} objLang={null} />
            <NewsLatestSection  lang={params.lang} objLang={null} />
        </main>
    )
  }
  
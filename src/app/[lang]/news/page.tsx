import React from 'react'

import '@/styles/news.css'
import NewsLatestSection from '@/@core/page/news/latest-section'
import NewsMainSection from '@/@core/page/news/main-section'
import NewsHeroSection from '@/@core/page/news/hero-section'
import { getDictionariesNews } from '@/app/dictionaries'

export default async function  NewsPage({ params }: any) {
    const { 
        header, 
        other
    } = await getDictionariesNews();
    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={header} lang={params.lang} />
            <NewsMainSection objLang={other} lang={params.lang} />
            <NewsLatestSection objLang={other} lang={params.lang} />
        </main>
    )
  }
  
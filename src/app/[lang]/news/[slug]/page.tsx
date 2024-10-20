import React from 'react'

import NewsHeroSection from '@/@core/page/news/hero-section'
import NewsDetailSection from '@/@core/page/news/detail-section'
import { getDictionariesNews } from '@/app/dictionaries'

import '@/styles/news.css'
export default async function  NewsBlogPage({ params }: any) {
    const { 
        header, 
        other
    } = await getDictionariesNews();
    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={header} lang={params.lang} />
            <NewsDetailSection objLang={other} lang={params.lang} />
        </main>
    )
  }
  
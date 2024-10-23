import React from 'react'

import '@/styles/news.css'
import NewsLatestSection from '@/@core/page/news/latest-section'
import NewsMainSection from '@/@core/page/news/main-section'
import NewsHeroSection from '@/@core/page/news/hero-section'
import { getDictionariesNews } from '@/app/dictionaries'
import news from "@/app/data/news.json"

export default async function  NewsPage({ params }: any) {
    const { 
        header, 
        other
    } = await getDictionariesNews();
    const dataNews = news[0]
    return (
        <main className='news-page sm:mobile-responsive'>
            <NewsHeroSection objLang={header} lang={params.lang} />
            {dataNews && <NewsMainSection objLang={other} lang={params.lang} objNews={dataNews}/>}
            <NewsLatestSection objLang={other} lang={params.lang} news={news} />
        </main>
    )
  }
  
import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'
import Link from 'next/link'

const NewsMainSection = (props: { lang:string, objLang: any, objNews:any }) => {
    const { lang, objLang, objNews } = props
    return (
        <section className='news-main-section'>
            <div className='main-container'>
                <div className='card-main-news' >
                    <Image src={objNews.thumbnail} alt='blog news image' width="0" height="0" sizes="100%" />
                    <div className='card-body'>
                        <div className='text-date'>
                            <label>21 Agustus 2024</label>
                        </div>
                        <div className='text-title'>
                            <h5><a>{objNews.title}</a></h5>
                        </div>
                        <div className='text-content'>
                           <p>{objNews.prolog}</p>
                        </div>
                        <div className='text-readmore'>
                            <Link href={`/${lang}/news/${objNews.slug}`}>{objLang[lang].link_text}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsMainSection

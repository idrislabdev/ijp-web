import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'
import Link from 'next/link'

const NewsLatestSection = (props: { lang:string, objLang: any}) => {
    const { lang, objLang } = props
    const news = [1,2,3,4,5,6,7,8,9,10]
    return (
        <section className='news-latest-section'>
            <div className='title-container'>
                <h2>{objLang[lang].latest_text}</h2>
            </div>
            <div className='latest-container'>
                {
                    news.map((item:any, index:number) => (
                        <div className='card-subcontainer' key={index}>
                            <div className='card-news' >
                                <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%" />
                                <div className='card-body'>
                                    <div className='text-date'>
                                        <label>21 Agustus 2024</label>
                                    </div>
                                    <div className='text-title'>
                                        <h5><a>Lorem ipsum dolor sit amet</a></h5>
                                    </div>
                                    <div className='text-content'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , 
                                            consectetur adipiscing elit...
                                        </p>
                                    </div>
                                    <div className='text-readmore'>
                                        <Link href={`/${lang}/news/news-slug`}>{objLang[lang].link_text}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewsLatestSection

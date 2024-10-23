import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'
import Link from 'next/link'
import moment from 'moment'

const NewsLatestSection = (props: { lang:string, objLang: any, news:any}) => {
    const { lang, objLang, news } = props
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
                                <Image src={item.thumbnail} alt='blog news image' width="0" height="0" sizes="100%" />
                                <div className='card-body'>
                                    <div className='text-date'>
                                        <label>{moment(item.created_at).format("DD MMMM YYYY")}</label>
                                    </div>
                                    <div className='text-title'>
                                        <h5><a>{item.title}</a></h5>
                                    </div>
                                    <div className='text-content'>
                                        <p>
                                            {item.prolog}
                                        </p>
                                    </div>
                                    <div className='text-readmore'>
                                        <Link href={`/${lang}/news/${item.slug}`}>{objLang[lang].link_text}</Link>
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

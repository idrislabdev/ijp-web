import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'
import Link from 'next/link'
import news from "@/app/data/news.json"
import moment from 'moment'

const NewsDetailSection = (props: { lang:string, objLang: any, paramSlug:any}) => {
    const { lang, objLang, paramSlug } = props
    const objNews = news.find((x) => x.slug === paramSlug)
    const dateString = moment(objNews?.created_at).format('DD MMMM YYYY');
    return (
        <section className='news-detail-section'>
            <div className='main-container'>
                <div className='card-main-news' >
                    <div className='text-title'>
                        <h2>{objNews?.title}</h2>
                        <div className='text-date'>
                            <p>Dipost oleh Admin</p>
                            <label>{dateString}</label>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='text-content' dangerouslySetInnerHTML={{ __html: objNews ? objNews.content : "" }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsDetailSection

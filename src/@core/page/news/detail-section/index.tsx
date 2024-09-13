import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'
import Link from 'next/link'

const NewsDetailSection = (props: { lang:string, objLang: any}) => {
    const { lang, objLang } = props
    return (
        <section className='news-detail-section'>
            <div className='main-container'>
                <div className='card-main-news' >
                    <div className='text-title'>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <div className='text-date'>
                            <p>Dipost oleh Admin</p>
                            <label>21 Agustus 2024</label>
                        </div>
                    </div>
                    <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%" />
                    <div className='card-body'>

                        <div className='text-content'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsDetailSection

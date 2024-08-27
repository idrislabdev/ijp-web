import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'

const NewsHeroSection = (props: { objLang: any}) => {
    const { objLang } = props

    return (
        <section className='news-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>Selamat Datang</h2>
                </div>
                <div className='text-title'>
                    <h1>BERITA UNICORP (UNI CORPORATION)</h1>
                </div>
            </div>
        </section>
    )
}

export default NewsHeroSection

import React from 'react'
import '@/styles/careers.css'
const CareersHeroSection = (props: { objLang: any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='careers-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>{objLang[lang].title}</h2>
                </div>
                <div className='text-title'>
                    <h1>{objLang[lang].description}</h1>
                </div>
            </div>
        </section>
    )
}

export default CareersHeroSection

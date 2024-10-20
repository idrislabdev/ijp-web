import React from 'react'
import '@/styles/business-units.css'
const BusinessUnitsHeroIjsaSection = (props: { objLang: any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>{objLang[lang].title}</h2>
                </div>
                <div className='text-title'>
                    <h1>{objLang[lang].subtitle}</h1>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsHeroIjsaSection

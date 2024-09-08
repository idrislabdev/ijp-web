import React from 'react'
import '@/styles/business-units.css'
const BusinessUnitsHeroIjsaSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='business-units-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>Unit Bisnis</h2>
                </div>
                <div className='text-title'>
                    <h1>IJSA (Indo Jaya Sukses Abadi)</h1>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsHeroIjsaSection

import React from 'react'
import '@/styles/careers.css'
const CareersHeroDetailSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='careers-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>Lowogan Pekerjaan</h2>
                </div>
                <div className='text-title'>
                    <h1>Sales Area Jawa Tengah</h1>
                </div>
            </div>
        </section>
    )
}

export default CareersHeroDetailSection

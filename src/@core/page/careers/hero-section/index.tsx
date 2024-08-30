import React from 'react'
import '@/styles/careers.css'
const CareersHeroSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='careers-hero-section'>
            <div className='hero-container'>
                <div className='text-welcome'>
                    <h2>Bergabung Dengan Tim Kami</h2>
                </div>
                <div className='text-title'>
                    <h1>UNICORP (UNI CORPORATION)</h1>
                </div>
            </div>
        </section>
    )
}

export default CareersHeroSection

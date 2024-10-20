import Image from 'next/image'
import React from 'react'

const HomeAboutSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='home-about-section'>
            <div className='about-description-container'>
                <h1>{objLang[lang].title}</h1>
                <h5>{objLang[lang].subtitle}</h5>
                <p>{objLang[lang].description}</p>
            </div>
            <div className='about-image-container'>
                <Image src={objLang.image_url} className='about-img' alt='gallery' width={330} height={330}/>
            </div>
        </section>
    )
}

export default HomeAboutSection

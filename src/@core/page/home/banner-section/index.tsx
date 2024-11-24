import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBannerSection = (props:{objLang:any, lang:string}) => {
  const { objLang, lang } = props
  return (
    <section className='home-banner-section'>
      <div className='home-banner-container'>
        <div className='banner-desc-subcontainer'>
          <h1>{objLang[lang].title}</h1>
          <h2>{objLang[lang].subtitle_1}</h2>
          <h5>{objLang[lang].subtitle_2}</h5>
          <Link href={`/${lang}/about-us`}>{objLang[lang].button_text}</Link>
        </div>
        <div className='banner-img-subcontainer'>
          <Image src={objLang.image_url} className='product-img' alt='product ijp' width={0} height={0} sizes='100%'/>
        </div>
      </div>
    </section>
  )
}

export default HomeBannerSection

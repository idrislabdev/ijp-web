import Image from 'next/image'
import React from 'react'

const AboutUsProfileSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
  return (
    <section className='about-us-profile-section'>
        <div className='profile-container'>
            <div className='image-subcontainer'>
                <div className='top-subcontainer'>
                    <Image src={objLang.image_1_url} alt='bapak sugik' width="0" height="0" sizes="100%" />
                </div>
                <div className='middle-subcontainer'>
                    <div className='experience-subcontainer'>
                        <label>{objLang[lang].experience_1}</label>
                        <span>{objLang[lang].experience_2}</span>
                    </div>
                </div>
                <div className='bottom-subcontainer'>
                    <div className='bottom-sub-image'>
                        <Image src={objLang.image_2_url} alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                    <div className='bottom-sub-image'>
                        <Image src={objLang.image_3_url} alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                </div>
            </div>
            <div className='desc-subcontainer'>
                <div className='desc-title'>
                    <h1>{objLang[lang].title}</h1>
                    <h2>{objLang[lang].subtitle}</h2>
                </div>
                <div className='desc-content'>
                    <p>{objLang[lang].description_1}</p>
                    <p>{objLang[lang].description_2}</p>

                </div>
                <div className='desc-quote'>
                    <h2>{objLang[lang].quote}</h2>
                    <h5>- UNICORP FOUNDER</h5>
                    <div className='desc-founder'>
                        <Image src='/images/vectors/vector-profile.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                        <div className='text-founder'>
                            <p>Sugijanto, ST</p>
                            <label>CEO, Founder</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsProfileSection

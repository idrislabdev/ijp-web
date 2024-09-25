import Image from 'next/image'
import React from 'react'

const BusinessUnitsProfileSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-profile-section'>
            <div className='profile-container'>
                <div className='image-subcontainer'>
                    <div className='top-subcontainer'>
                        <Image src={objLang.image_1_url} alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                    <div className='middle-subcontainer'>
                        <div className='experience-subcontainer'>
                            <label>20+</label>
                            <span>Tahun Pengalaman</span>
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
                    </div>
                    <div className='desc-content'>
                        <p>{objLang[lang].description_1}</p>
                        <p>{objLang[lang].description_2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsProfileSection

import Image from 'next/image'
import React from 'react'

const BusinessUnitsProfileIjsaSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-profile-ijsa-section'>
            <div className='profile-container'>
                <div className='desc-subcontainer'>
                    <div className='desc-title'>
                        <h1>{objLang[lang].title}</h1>
                    </div>
                    <div className='desc-content'>
                        <p>{objLang[lang].description_1}</p>
                        <p>{objLang[lang].description_2}</p>
                        <p>{objLang[lang].description_3}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsProfileIjsaSection

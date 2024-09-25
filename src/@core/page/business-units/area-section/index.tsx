import React from 'react'

const BusinessUnitsAreaSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang} = props
    return (
        <section className='business-units-area-section'>
            <div className='area-container'>
                <div className='title-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                    <h2>{objLang[lang].subtitle_1}</h2>
                    <p>{objLang[lang].subtitle_2}</p>
                </div>
            </div>
        </section>
  )
}

export default BusinessUnitsAreaSection

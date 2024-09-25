import React from 'react'

const CareersAreaSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='careers-area-section'>
            <div className='area-container'>
                <div className='title-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                    <h2>{objLang[lang].subtitle}</h2>
                    <p>{objLang[lang].description}</p>
                </div>
                <div className='area-subcontainer'>
                    {objLang[lang].offices.map((item:any, index:number)=> (
                        <div className='detail-subcontainer' key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default CareersAreaSection

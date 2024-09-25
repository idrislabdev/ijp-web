import React from 'react'

const AboutUsAreaSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='about-us-area-section'>
            <div className='area-container'>
                <div className='title-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                    <h2>{objLang[lang].subtitle_1}</h2>
                    <p>{objLang[lang].subtitle_2}</p>
                </div>
                <div className='area-subcontainer'>
                    {objLang[lang].contents.map((item:any, index:number)=>(
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

export default AboutUsAreaSection

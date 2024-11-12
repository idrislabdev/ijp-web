import React from 'react'

const HomeBusinessUnitSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='home-business-unit-section'>
            <div className='business-unit-container'>
                <div className='title-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                    <p>{objLang[lang].description}</p>
                </div>
                <div className='business-unit-subcontainer'>
                    <div className='business-unit'>
                        <label>{objLang[lang].units[0].name}</label>
                        <div className='business-unit-desc'>
                            <h5>{objLang[lang].units[0].title}</h5>
                            <p>{objLang[lang].units[0].description}</p>
                        </div>
                    </div>
                    <div className='business-unit'>
                        <label>{objLang[lang].units[1].name}</label>
                        <div className='business-unit-desc'>
                            <h5>{objLang[lang].units[1].title}</h5>
                            <p>{objLang[lang].units[1].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HomeBusinessUnitSection

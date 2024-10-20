import Image from 'next/image'
import React from 'react'

const BusinessUnitsProductsIjsaSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-products-section'>
            <div className='products-ijsa-container'>
                <div className='products-title'>
                    <h1>{objLang[lang].title}</h1>
                    <p>{objLang[lang].description_1}</p>
                    <p>{objLang[lang].description_2}</p>
                </div>
                <div className='products-subcontainer'>
                    {objLang.products.map((item:any, index:number) => (
                        <div className='our-product-wrapper' key={index}>
                            <div className='our-product-card'>
                                <Image src={item.image_url} className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                                <div className='card-description'>
                                    <h5>{item.name}</h5>
                                    <p>{objLang[lang].material_text}: <span>{item.material}</span></p>
                                    <p>{objLang[lang].long_text}: <span>{item.long}</span></p>
                                    <p>{objLang[lang].thick_text}: <span>{item.thick}</span></p>
                                    <p>{objLang[lang].color_text}: <span>{item.color}</span></p>
                                </div>
                            </div>
                        </div>  
                    ))} 
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsProductsIjsaSection

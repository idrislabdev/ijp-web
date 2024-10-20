import React from 'react'
import '@/styles/business-units.css'
import { EnvelopIcon, HomeIcon, PhoneIcon } from '@/@core/my-icons'
const BusinessUnitsContactUsSection = (props: { objLang: any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-contact-us-section'>
            <div className='contact-us-container'>
                <div className='title-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                </div>
                <div className='detail-subcontainer'>
                    <div className='sub-detail'>
                        <HomeIcon color={'#fff'} />
                        <h5>{objLang[lang].address.title}</h5>
                        <p>{objLang[lang].address.description}</p>
                        <span>{objLang[lang].address.value}</span>
                    </div>
                    <div className='sub-detail'>
                        <PhoneIcon />
                        <h5>{objLang[lang].phone.title}</h5>
                        <p>{objLang[lang].phone.description}</p>
                        <span>{objLang[lang].phone.value}</span>
                    </div>
                    <div className='sub-detail'>
                        <EnvelopIcon color={'#fff'} />
                        <h5>{objLang[lang].email.title}</h5>
                        <p>{objLang[lang].email.description}</p>
                        <span>{objLang[lang].email.value}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsContactUsSection

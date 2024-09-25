import React from 'react'
import '@/styles/contact-us.css'
const ContactUsHeaderSection = (props: { objLang: any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='contact-us-header-section'>
            <div className='header-container'>
                <h2>{objLang[lang].title}</h2>
                <div className='header-subcontainer'>
                    <p>{objLang[lang].description}</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUsHeaderSection

import React from 'react'
import '@/styles/business-units.css'
import { EnvelopIcon, HomeIcon, PhoneIcon } from '@/@core/my-icons'
const BusinessUnitsContactUsSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='business-units-contact-us-section'>
            <div className='contact-us-container'>
                <div className='title-subcontainer'>
                    <h1>Conctact Us</h1>
                </div>
                <div className='detail-subcontainer'>
                    <div className='sub-detail'>
                        <HomeIcon color={'#fff'} />
                        <h5>Visit Us</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <span>Lorem Ipsum is simply </span>
                    </div>
                    <div className='sub-detail'>
                        <PhoneIcon />
                        <h5>Call Us</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <span>+62 31 9934 2408</span>
                    </div>
                    <div className='sub-detail'>
                        <EnvelopIcon color={'#fff'} />
                        <h5>Contact Us</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                        <span>ijsa.marketing@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsContactUsSection

import React from 'react'

const ContactUsMapSection = (props: {objLang:any, lang:string}) => {
    return (
    <section className='contact-us-map-section'>
        <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.529690137196!2d112.8115169147751!3d-7.294225794735371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f083271f9ef9%3A0x402698f69e2b82d1!2sJl.%20Raya%20Sukolilo%20Mulia%20No.76%2C%20Keputih%2C%20Kec.%20Sukolilo%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060111!5e0!3m2!1sid!2sid!4v1610613440565!5m2!1sid!2sid"
                aria-hidden="false">
            </iframe>
        </div>
    </section>
  )
}

export default ContactUsMapSection

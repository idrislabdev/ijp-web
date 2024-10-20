import { ArrowRightIcon, BuildingIcon, FaqIcon, MailIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import React from 'react'

const ContactUsInfoSection = (props: { objLang: any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='contact-us-info-section'>
            <div className='info-container'>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon mail bg-[#F0FAF0]'>
                            <MailIcon />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang[lang].email.title}</h5>
                        <p>{objLang[lang].email.description} {objLang[lang].email.value}</p>
                        <a>{objLang[lang].email.link_text} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon phone bg-[#FFF3E8]'>
                            <PhoneIcon />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang[lang].phone.title}</h5>
                        <p>{objLang[lang].phone.description} {objLang[lang].phone.value}</p>
                        <a>{objLang[lang].phone.link_text} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon bg-[#F0FAF0]'>
                            <BuildingIcon  />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang[lang].office.title}</h5>
                        <p>{objLang[lang].office.description} {objLang[lang].office.value}</p>
                        <a>{objLang[lang].office.link_text} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
            </div>
            <div className='business-hours-container'>
                <div className='title-subcontainer'>
                    <h5>{objLang[lang].office_hour.title}</h5>
                    <p>{objLang[lang].office_hour.description}</p>
                </div>
                <div className='cards-subcontainer'>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.monday.text}</label>
                        <span>{objLang[lang].office_hour.hours.monday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.tuesday.text}</label>
                        <span>{objLang[lang].office_hour.hours.tuesday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.wednesday.text}</label>
                        <span>{objLang[lang].office_hour.hours.wednesday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.thursday.text}</label>
                        <span>{objLang[lang].office_hour.hours.thursday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.friday.text}</label>
                        <span>{objLang[lang].office_hour.hours.friday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.saturday.text}</label>
                        <span>{objLang[lang].office_hour.hours.saturday.value}</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>{objLang[lang].office_hour.hours.sunday_holiday.text}</label>
                        <span>{objLang[lang].office_hour.hours.sunday_holiday.value}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsInfoSection

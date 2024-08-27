import { ArrowRightIcon, BuildingIcon, FaqIcon, MessageSquareIcon, PhoneIcon } from '@/@core/my-icons'
import React from 'react'

const ContactUsInfoSection = (props: { objLang: any}) => {
    const { objLang } = props
    return (
        <section className='contact-us-info-section'>
            <div className='info-container'>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon bg-[#F0FAF0]'>
                            <FaqIcon />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.enquire.title}</h5>
                        <p>{objLang.enquire.content}</p>
                        <a>{objLang.enquire.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon phone bg-[#FFF3E8]'>
                            <PhoneIcon />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.live_chat.title}</h5>
                        <p>{objLang.live_chat.content}</p>
                        <a>{objLang.live_chat.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='card-header'>
                        <div className='header-icon bg-[#F0FAF0]'>
                            <BuildingIcon  />
                        </div>
                    </div>
                    <div className='card-content'>
                        <h5>{objLang.by_post.title}</h5>
                        <p>{objLang.by_post.content}</p>
                        <a>{objLang.by_post.link} <ArrowRightIcon color={'#fff'} /></a>
                    </div>
                </div>
            </div>
            <div className='business-hours-container'>
                <div className='title-subcontainer'>
                    <h5>Jam Kerja UNICORP</h5>
                    <p>Berikut ini merupakan jam kantor yang ada di unicorp</p>
                </div>
                <div className='cards-subcontainer'>
                    <div className='business-hour-card'>
                        <label>Senin</label>
                        <span>08:00 - 16:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Selasa</label>
                        <span>08:00 - 16:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Rabu</label>
                        <span>08:00 - 16:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Kamis</label>
                        <span>08:00 - 16:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Jumat</label>
                        <span>08:00 - 16:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Sabtu</label>
                        <span>08:00 - 14:00</span>
                    </div>
                    <div className='business-hour-card'>
                        <label>Minggu / Hari Besar</label>
                        <span>Libur</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsInfoSection

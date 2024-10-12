import { BulpIcon, EyeIcon, HandShakeIcon, TargetIcon } from '@/@core/my-icons'
import React from 'react'

const AboutUsOurMission = (props: {objLang:any, lang:string}) => {
    const { objLang, lang} = props
    return (
        <section className='about-us-our-mission-section'>
            <div className='our-mission-container '>
                <div className='detail-subcontainer w-1/2'>
                    <div className='icon-detail stroke'>
                        <TargetIcon />
                    </div>
                    <div className='desc-detail'>
                        <h5>{objLang[lang].our_missions.title}</h5>
                        <ul>
                            {objLang[lang].our_missions.contents.map((item:string, index:number)=>(
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='detail-subcontainer w-1/2'>
                    <div className='icon-detail fill-bulp'>
                        <BulpIcon />
                    </div>
                    <div className='desc-detail'>
                    <h5>{objLang[lang].our_vissions.title}</h5>
                    <ul>
                            {objLang[lang].our_vissions.contents.map((item:string, index:number)=>(
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='our-mission-container'>
                <div className='detail-subcontainer w-[70%]'>
                    <div className='icon-detail fill'>
                        <HandShakeIcon />
                    </div>
                    <div className='desc-detail'>
                        <h5>{objLang[lang].our_values.title} (<span className='text-primary'>{objLang[lang].our_values.subtitle}</span>)</h5>
                        <div className='desc-growup'>
                            <div className='details-growup'>
                                {objLang[lang].our_values.contents.map((item:any, index:number)=>(
                                    <div className='detail-growup' key={index}>
                                        <h5><span>{item.title.charAt(0)}</span>{item.title.slice(1)}</h5>
                                        <p>{item.description} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsOurMission

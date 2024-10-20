import { BulpIcon, EyeIcon, HandShakeIcon, StarategyIcon, Target2Icon, TargetIcon } from '@/@core/my-icons'
import React from 'react'

const BusinessUnitsOurMissionIjsaSection = (props: {objLang:any, lang: string}) => {
    const { objLang, lang } = props
    return (
        <section className='business-units-our-mission-ijsa-section'>
            <div className='our-mission-container '>
                <div className='detail-subcontainer'>
                    <div className='icon-detail fill'>
                        <BulpIcon />
                    </div>
                    <div className='desc-detail'>
                        <h5>{objLang[lang].our_vissions.title}</h5>
                        <ul>
                            {objLang[lang].our_vissions.contents.map((item:string, index:number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='detail-subcontainer-2'>
                    <div className='detail-subcontainer'>
                        <div className='icon-detail fill'>
                            <Target2Icon color={'#fff'} />
                        </div>
                        <div className='desc-detail'>
                            <h5>{objLang[lang].our_missions.title}</h5>
                            <ul>
                                {objLang[lang].our_missions.contents.map((item:string, index:number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='detail-subcontainer'>
                        <div className='icon-detail fill'>
                            <StarategyIcon color={'#fff'} />
                        </div>
                        <div className='desc-detail'>
                            <h5>{objLang[lang].our_strategies.title}</h5>
                            <ul>
                                {objLang[lang].our_strategies.contents.map((item:string, index:number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BusinessUnitsOurMissionIjsaSection

import { TargetIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'

const AboutUsHistorySection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='about-us-history-section'>
            <div className='history-container'>
                <div className='title-container'>
                    <h1>{objLang[lang].title}</h1>
                    <p>{objLang[lang].subtitle}</p>
                </div>
                <ul>
                 {objLang[lang].contents.map((item:any, index:number)=>(
                        <li key={index}>
                            <div className='icon-step'>
                                <TargetIcon />
                                <span>{item.title}</span>
                            </div>
                            <div className='desc-step'>
                                <h5>{item.subtitle}</h5>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default AboutUsHistorySection

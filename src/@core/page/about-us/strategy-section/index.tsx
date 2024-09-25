import { CheckSquareIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'

const AboutUsStrategySection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang} = props
    return (
        <section className='about-us-strategy-section'>
            <div className='strategy-container'>
                <div className='desc-subcontainer'>
                    <h1>{objLang[lang].title}</h1>
                    <ul>
                        {objLang[lang].contents.map((item:string, index:number)=>(
                           <li key={index}>
                                <span><CheckSquareIcon /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='image-subcontainer'>
                    <Image src='/images/others/strategy.png' alt='strategy' width="0" height="0" sizes="100%" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsStrategySection

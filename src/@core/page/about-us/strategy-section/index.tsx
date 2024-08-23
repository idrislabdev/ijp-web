import { CheckSquareIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'

const AboutUsStrategySection = () => {
  return (
    <section className='about-us-strategy-section'>
        <div className='strategy-container'>
            <div className='desc-subcontainer'>
                <h1>Our Strategy</h1>
                <ul>
                    <li>
                        <span><CheckSquareIcon /></span>
                        Mengembangkan sumber daya manusia untuk berinovasi dan menciptakan produk - produk baru.
                    </li>
                    <li>
                        <span><CheckSquareIcon /></span>
                        Berkolaborasi dengan ahli untuk menciptakan pasar baru dan membuat segmentasi sehingga perusahaan dapat berkembang dengan cepat.
                    </li>
                    <li>
                        <span><CheckSquareIcon /></span>
                        Berkolaborasi dengan ahli untuk menciptakan pasar baru dan membuat segmentasi sehingga perusahaan dapat berkembang dengan cepat.
                    </li>
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

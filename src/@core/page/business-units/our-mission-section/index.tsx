import { BulpIcon, EyeIcon, HandShakeIcon, Target2Icon, TargetIcon } from '@/@core/my-icons'
import React from 'react'

const BusinessUnitsOurMissionSection = () => {
  return (
    <section className='business-units-our-mission-section'>
        <div className='our-mission-container '>
            <div className='detail-subcontainer'>
                <div className='icon-detail fill'>
                    <BulpIcon />
                </div>
                <div className='desc-detail'>
                    <h5>Our Vission</h5>
                    <ul>
                        <li>Menjadi pemimpin perusahaan perdagangan bahan kimia di Indonesia.</li>
                    </ul>
                </div>
            </div>
            <div className='detail-subcontainer'>
                <div className='icon-detail fill mb-[15px]'>
                    <Target2Icon color={'#fff'} />
                </div>
                <div className='desc-detail'>
                    <h5>Our Mission</h5>
                    <ul>
                        <li> IJP sebagai perusahaan yang berorientasi pada pelanggan akan berusaha memenuhi segala kebutuhan pelanggan.</li>
                        <li>Membuat sistem dan kerjasama tim untuk meningkatkan kepuasan pelanggan dan suplai yang berkelanjutan.</li>
                        <li>Selalu membuat inovasi dan terus meningkatkan kualitas untuk kepuasan pelanggan.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessUnitsOurMissionSection

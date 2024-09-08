import { BulpIcon, EyeIcon, HandShakeIcon, StarategyIcon, Target2Icon, TargetIcon } from '@/@core/my-icons'
import React from 'react'

const BusinessUnitsOurMissionIjsaSection = () => {
  return (
    <section className='business-units-our-mission-ijsa-section'>
        <div className='our-mission-container '>
            <div className='detail-subcontainer'>
                <div className='icon-detail fill'>
                    <BulpIcon />
                </div>
                <div className='desc-detail'>
                    <h5>Our Vission</h5>
                    <ul>
                        <li>Menjadi pemimpin pasar untuk sarung tangan plastik.</li>
                    </ul>
                </div>
            </div>
            <div className='detail-subcontainer-2'>
                <div className='detail-subcontainer'>
                    <div className='icon-detail fill'>
                        <Target2Icon color={'#fff'} />
                    </div>
                    <div className='desc-detail'>
                        <h5>Our Mission</h5>
                        <ul>
                            <li>Mengembangkan sumber daya manusia untuk berinovasi dan bekerja secara efektif dan efisien.</li>
                            <li>Memprioritaskan kepuasan pelanggan dengan memberikan produk yang berkualitas.</li>
                        </ul>
                    </div>
                </div>
                <div className='detail-subcontainer'>
                    <div className='icon-detail fill'>
                        <StarategyIcon color={'#fff'} />
                    </div>
                    <div className='desc-detail'>
                        <h5>Our Starategy</h5>
                        <ul>
                            <li>Meningkatkan kualitas dan kapasitas produksi untuk memenuhi kebutuhan pelanggan.</li>
                            <li>Menciptakan lebih banyak produk dan menumbuhkan pasar dengan menggandeng lebih banyak distributor.</li>
                            <li>Mendapatkan bahan baku yang kompetitif yang dapat membuat produksi lebih efisien.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessUnitsOurMissionIjsaSection

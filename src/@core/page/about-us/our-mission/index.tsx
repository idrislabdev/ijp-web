import { BulpIcon, EyeIcon, HandShakeIcon, TargetIcon } from '@/@core/my-icons'
import React from 'react'

const AboutUsOurMission = () => {
  return (
    <section className='about-us-our-mission-section'>
        <div className='our-mission-container '>
            <div className='detail-subcontainer w-1/2'>
                <div className='icon-detail stroke'>
                    <TargetIcon />
                </div>
                <div className='desc-detail'>
                    <h5>Our Mission</h5>
                    <p>
                        Menjadi leader di industri makanan, retail, pertanian & industri lainnya di Indonesia.
                    </p>
                </div>
            </div>
            <div className='detail-subcontainer w-1/2'>
                <div className='icon-detail fill-bulp'>
                    <BulpIcon />
                </div>
                <div className='desc-detail'>
                    <h5>Our Vission</h5>
                    <ul>
                        <li> daya manusia serta pengembangan perusahaan berkesinambungan.</li>
                        <li>Fokus pada kepuasan pelanggan dengan memberikan produk terbaik dengan kualitas dan layanan terbaik.</li>
                        <li>Memberikan kesempatan sumber daya manusia era milenial untuk berkarya, berkontribusi dengan didukung proses pengembangan kemampuannya sehingga UNICORP akan berkembang lebih cepat untuk rencana jangka panjang.</li>
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
                    <h5>Our Value (<span className='text-primary'>GROW UP</span>)</h5>
                    <div className='desc-growup'>
                        <div className='details-growup'>
                            <div className='detail-growup'>
                                <h5><span>G</span>ROW ORIENTATION</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className='detail-growup'>
                                <h5><span>R</span>ELIGIOUS</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className='detail-growup'>
                                <h5><span>O</span>UTSTANDING (EXCELLENT)</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                        <div className='details-growup'>
                            <div className='detail-growup'>
                                <h5><span>W</span>INNING TEAM</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className='detail-growup'>
                                <h5><span>U</span>NIQUE</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className='detail-growup'>
                                <h5><span>P</span>ROFESSIONAL</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsOurMission

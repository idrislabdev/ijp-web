import Image from 'next/image'
import React from 'react'

const AboutUsProfileSection = () => {
  return (
    <section className='about-us-profile-section'>
        <div className='profile-container'>
            <div className='image-subcontainer'>
                <div className='top-subcontainer'>
                    <Image src='/images/galleries/gallery-1.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                </div>
                <div className='middle-subcontainer'>
                    <div className='experience-subcontainer'>
                        <label>20+</label>
                        <span>Tahun Pengalaman</span>
                    </div>
                </div>
                <div className='bottom-subcontainer'>
                    <div className='bottom-sub-image'>
                        <Image src='/images/galleries/gallery-2.jpeg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                    <div className='bottom-sub-image'>
                        <Image src='/images/galleries/gallery-6.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                </div>
            </div>
            <div className='desc-subcontainer'>
                <div className='desc-title'>
                    <h1>Profil Perusahaan</h1>
                    <h2>
                        Unicorp adalah grup perusahaan yang bergerak di berbagai bidang industri
                    </h2>
                </div>
                <div className='desc-content'>
                    <p>
                        Unicorp bermula dengan didirikannya CV. INDO JAYA PUTRA pada tahun 2001 di Surabaya 
                        untuk pemasaran area Indonesia bagian timur. Untuk memenuhi visi sebagai pemimpin perusahaan perdagangan bahan kimia di Indonesia, 
                        kami telah mendirikan 2 cabang: Cabang Semarang untuk pemasaran area Indonesia bagian tengah dan Cabang Jakarta untuk pemasaran 
                        area Indonesia bagian barat.
                    </p>
                    <p>
                        Sebagai importir, pabrik dan distributor, cabang kami dilengkapi dengan gudang yang didesain khusus 
                        dan armada pengiriman yang terlatih untuk memastikan bahwa setiap pelanggan akan menerima pelayanan terbaik.
                    </p>
                </div>
                <div className='desc-quote'>
                    <h2>
                        Odio eu feugiat pretium nibh ipsum. Pellentesque habitant morbi tristique senectus et netus et. 
                        Cursus sit amet dictum sit amet justo donec enim. Massa sapien faucibus et molestie ac feugiat.
                    </h2>
                    <h5>- UNICORP FOUNDER</h5>
                    <div className='desc-founder'>
                        <Image src='/images/vectors/vector-profile.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                        <div className='text-founder'>
                            <p>Sugijanto, ST</p>
                            <label>CEO, Founder</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsProfileSection

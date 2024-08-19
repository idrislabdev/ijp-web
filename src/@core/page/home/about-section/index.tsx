import Image from 'next/image'
import React from 'react'

const HomeAboutSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-about-section'>
            <div className='about-description-container'>
                <h1>Tentang Unicorp</h1>
                <h5>Unicorp adalah Grup perusahaan yang bergerak di berbagai bidang industri, diantaranya: Makanan, Pertanian, Retail serta Industri lainnya.</h5>
                <p>
                    Unicorp bermula dengan didirikannya CV. INDO JAYA PUTRA pada tahun 2001 di Surabaya untuk pemasaran area Indonesia bagian timur. 
                    Untuk memenuhi visi sebagai pemimpin perusahaan perdagangan bahan kimia di Indonesia, kami telah mendirikan 2 cabang: Cabang Semarang untuk pemasaran area Indonesia bagian tengah dan Cabang Jakarta untuk pemasaran area Indonesia bagian barat. Sebagai importir, pabrik dan distributor, cabang kami dilengkapi dengan gudang yang didesain khusus dan armada pengiriman 
                    yang terlatih untuk memastikan bahwa setiap pelanggan akan menerima pelayanan terbaik.
                </p>
            </div>
            <div className='about-image-container'>
                <Image src='/images/galleries/gallery-2.jpeg' className='about-img' alt='gallery' width={330} height={330}/>
            </div>
        </section>
    )
}

export default HomeAboutSection

import Image from 'next/image'
import React from 'react'

const HomeBannerSection = () => {
  return (
    <section className='home-banner-section'>
      <div className='home-banner-container'>
        <div className='banner-desc-subcontainer'>
          <h1>UNICORP (UNI CORPORATION)</h1>
          <h2>
            Merupakan Grup perusahaan yang bergerak di berbagai bidang industri
          </h2>
          <h5>diantaranya adalah Makanan, Pertanian, Retail serta Industri lainnya</h5>
          <a>Baca Selengkapnya</a>
        </div>
        <div className='banner-img-subcontainer'>
          <Image src='/images/others/product.png' className='product-img' alt='product ijp' width={500} height={500}/>
          {/* <Image src='/images/others/inaglove.png' className='inaglove-img' alt='inaglove' width={250} height={250}/> */}
        </div>
      </div>
    </section>
  )
}

export default HomeBannerSection

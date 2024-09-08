import Image from 'next/image'
import React from 'react'

const BusinessUnitsProductsIjsaSection = () => {
  return (
    <section className='business-units-products-section'>
        <div className='products-ijsa-container'>
            <div className='products-title'>
                <h1>Our product (INA GLOVE)</h1>
                <p>
                    merupakan sarung tangan berbahan dasar plastik HDPE (High-density Polyethylene), maupun Biodegradable. 
                    Kami memiliki dua jenis sarung tangan yaitu sarung tangan dengan permukaan polos dan emboss (tampak ada bintik – bintik).
                </p>
                <p>
                    Produk kami terdiri dari beberapa pilihan warna seperti natural (bening), biru, dan warna lainnya sesuai permintaan. 
                    Kami melayani berbagai kebutuhan ukuran, tebal, dan warna sesuai permintaan pelanggan.
                </p>
            </div>
            <div className='products-subcontainer'>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-description'>
                            <h5>Jenis Polos</h5>
                            <p>Bahan: <span>HDPE atau Biodegradable</span></p>
                            <p>Panjang: <span>27(cm) - 29(cm)</span></p>
                            <p>Tebal: <span>8, 10, 25 (mikron)</span></p>
                            <p>Warna: <span>Natural, Biru, Custom</span></p>
                        </div>
                    </div>
                </div>    
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-description'>
                            <h5>Jenis Emboss</h5>
                            <p>Bahan: <span>HDPE atau Biodegradable</span></p>
                            <p>Panjang: <span>47(cm)</span></p>
                            <p>Tebal: <span>8, 10, 25 (mikron)</span></p>
                            <p>Warna: <span>Natural, Biru, Custom</span></p>
                        </div>
                    </div>
                </div>    
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-description'>
                            <h5>Jenis Polos</h5>
                            <p>Bahan: <span>HDPE atau Biodegradable</span></p>
                            <p>Panjang: <span>27(cm) - 29(cm)</span></p>
                            <p>Tebal: <span>8, 10, 25 (mikron)</span></p>
                            <p>Warna: <span>Natural, Biru, Custom</span></p>
                        </div>
                    </div>
                </div>    
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-description'>
                            <h5>Jenis Emboss</h5>
                            <p>Bahan: <span>HDPE atau Biodegradable</span></p>
                            <p>Panjang: <span>47(cm)</span></p>
                            <p>Tebal: <span>8, 10, 25 (mikron)</span></p>
                            <p>Warna: <span>Natural, Biru, Custom</span></p>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default BusinessUnitsProductsIjsaSection

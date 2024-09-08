import Image from 'next/image'
import React from 'react'

const BusinessUnitsProductsSection = () => {
  return (
    <section className='business-units-products-section'>
        <div className='products-container'>
            <div className='products-title'>
                <h1>Our products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, 
                    sed porta est consectetur. Sed imperdiet libero id nisi euismod. Sed imperdiet libero id nisi euismod, 
                    sed porta est consectetur. Sed imperdiet libero id nisi euismod
                </p>
            </div>
            <div className='products-subcontainer'>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-overlay'>
                            <h6>unicol</h6>
                            <label>Pewarna Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/sosweet-1.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-overlay'>
                            <h6>sosweet</h6>
                            <label>Pemanis Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/uniwhite-1.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-overlay'>
                            <h6>uniwhite</h6>
                            <label>Tepung Pemutih Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/chemicals.jpg' className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                        <div className='card-overlay'>
                            <h6>other chemicals</h6>
                            <label>Bahan Kimia Lain</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessUnitsProductsSection

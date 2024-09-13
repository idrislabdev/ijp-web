"use client"

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React from 'react'

const HomeOurProductsSection = () => {
    const downloadCatalog = async () => {
        const resp = await axiosInstance.get(`/catalogs/sample-catalog.pdf`);

        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `katalog.pdf`);
        document.body.appendChild(link);
        link.click();
    }
  return (
    <section className='home-our-products-section'>
        <div className='our-products-container'>
            <div className='our-products-title'>
                <h1>Our products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, 
                    sed porta est consectetur. Sed imperdiet libero id nisi euismod
                </p>
                <a onClick={downloadCatalog}>Download Product</a>
            </div>
            <div className='our-products-subcontainer'>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/unicol.jpg' className='our-product-img' alt='unicol' width={330} height={330}/>
                        <div className='card-overlay'>
                            <h6>unicol</h6>
                            <label>Pewarna Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/sosweet-1.jpg' className='our-product-img' alt='unicol' width={330} height={330}/>
                        <div className='card-overlay'>
                            <h6>sosweet</h6>
                            <label>Pemanis Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/uniwhite-1.jpg' className='our-product-img' alt='unicol' width={330} height={330}/>
                        <div className='card-overlay'>
                            <h6>uniwhite</h6>
                            <label>Tepung Pemutih Untuk Makanan</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/chemicals.jpg' className='our-product-img' alt='unicol' width={330} height={330}/>
                        <div className='card-overlay'>
                            <h6>other chemicals</h6>
                            <label>Bahan Kimia Lain</label>
                        </div>
                    </div>
                </div>
                <div className='our-product-wrapper'>
                    <div className='our-product-card'>
                        <Image src='/images/our-products/inaglove-1.jpg' className='our-product-img' alt='unicol' width={330} height={330}/>
                        <div className='card-overlay'>
                            <h6>inaglove</h6>
                            <label>Sarung Tangan Plastik</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeOurProductsSection

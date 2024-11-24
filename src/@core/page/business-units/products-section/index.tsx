"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ModalProduct from '../modal-product'

const BusinessUnitsProductsSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    const [product, setProduct] = useState(null)
    const [openModal, setOpenModal ] = useState(false);

    const showProduct = (obj:any) => {
        setProduct(obj)
        setOpenModal(true)
    }
    return (
        <>
            <section className='business-units-products-section'>
                <div className='products-container'>
                    <div className='products-title'>
                        <h1>{objLang[lang].title}</h1>
                        <p>{objLang[lang].description}</p>
                    </div>
                    <div className='product-detail-container'>
                        <h5 className='text-2xl font-semibold'>Produk Internal</h5>
                        <div className='products-subcontainer'>
                            {objLang.products.map((item:any, index:number) => (
                                <div className='our-product-wrapper' key={index}>
                                    <div className='our-product-card' onClick={_ => showProduct(item)}>
                                        <Image src={item.image_url} className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                                        <div className='card-overlay'>
                                            <h6>{item.name}</h6>
                                            <label>{item.description}</label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='product-detail-container'>
                        <h5 className='text-2xl font-semibold'>Produk Lainnya</h5>
                        <div className='products-subcontainer'>
                            {objLang.products_others.map((item:any, index:number) => (
                                <div className='our-product-wrapper' key={index}>
                                    <div className='our-product-card' onClick={_ => showProduct(item)}>
                                        <Image src={item.image_url} className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                                        <div className='card-overlay'>
                                            <h6>{item.name}</h6>
                                            <label>{item.description}</label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <ModalProduct
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                product={product}
            />
        </>
    )
}

export default BusinessUnitsProductsSection

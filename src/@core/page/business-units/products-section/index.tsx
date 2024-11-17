"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ModalProduct from '../modal-products'

const BusinessUnitsProductsSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    const [category, setCategory] = useState('')
    const [openModal, setOpenModal ] = useState(false);

    const showProduct = (val:string) => {
        setCategory(val)
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
                    <div className='products-subcontainer'>
                        {objLang.products.map((item:any, index:number) => (
                            <div className='our-product-wrapper' key={index}>
                                <div className='our-product-card' onClick={_ => showProduct(item.name)}>
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
            </section>
            <ModalProduct
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                category={category}
            />
        </>
    )
}

export default BusinessUnitsProductsSection

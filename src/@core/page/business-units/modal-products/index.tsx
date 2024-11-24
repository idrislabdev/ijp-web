import { AddOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { Message, Modal, useToaster } from 'rsuite'
import '@/styles/components/cards.css'

const ModalProducts = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        category:string
    }) => {
    const { isModalOpen, setIsModalOpen, category } = props
    const [products, setProducts] = useState([])
   
    const getData = useCallback(async () => {
        const response = await axiosInstance.get(`/api/products/ijp?category=${category}`);
        const { data } = response.data
        setProducts(data)
    }, [category]);

    useEffect(() => {
        if (isModalOpen) {
            getData()
        } else {
            setProducts([]);
        }
    }, [getData, isModalOpen])

    return (
        <Modal size="lg" className='modal-full' backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Daftar Produk {category.toUpperCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-wrap gap-[8px]'>
                    {products.map((item:any,index:number) => (
                        <div className='our-product-main-wrapper' key={index}>
                            <div className='our-product-card'>
                                <Image src={item.url} className='our-product-img' alt={item.name} width={0} height={0} sizes='100%'/>
                                <div className='card-overlay'>
                                    <label>{item.name}</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalProducts

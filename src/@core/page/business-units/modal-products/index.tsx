import { AddOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { Message, Modal, useToaster } from 'rsuite'

const ModalProduct = (props: {
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
                <Modal.Title>Manage Product {category.toUpperCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-wrap gap-[8px]'>
                    {products.map((item:any,index:number) => (
                        <div className='flex gap-[4px] w-[200px] h-[200px] border' key={index}>
                            <div className='admin-product-card-wrapper'>
                                <div className='our-product-card h-full'>
                                    <Image src={item.url} className='w-full h-full object-cover' alt={`${item.name}`} width={0} height={0} sizes='100%'/>
                                    <div className='card-overlay'>
                                        <label className='bg-blue-700'>{item.name}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalProduct

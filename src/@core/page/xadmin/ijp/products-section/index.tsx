"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';
import ModalManageProduct from './modal-manage-products';
import '@/styles/components/cards.css'

const XadminIJPProductsSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [description, setDescription] = useState(objData[lang].description)
    const [products, setProducts] = useState(objData.products)
    const [category, setCategory] = useState('')
    const [openModal, setOpenModal ] = useState(false);
    
    const [fileData1, setFileData1] = useState(null)
    const [fileData2, setFileData2] = useState(null)
    const [fileData3, setFileData3] = useState(null)
    const [fileData4, setFileData4] = useState(null)
    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Section Berhasil Diupdate
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("title", title);
        payload.append("description", description);
        payload.append("products", JSON.stringify(products));
        
        if (fileData1 !== null)
            payload.append("file_1", fileData1);

        if (fileData2 !== null)
            payload.append("file_2", fileData2);

        if (fileData3 !== null)
            payload.append("file_3", fileData3);

        if (fileData4 !== null)
            payload.append("file_4", fileData4);

        const response = await axiosInstance.post("/api/business-units-ijp/our-products", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile = (index:number) => {
        let src:any = document.getElementById(`file-upload-${index+1}`)
        let files = src.files[0]

        const temp = [...products]
        temp[index].image_url = URL.createObjectURL(files)
        
        if (index === 0)
            setFileData1(files)
    
        if (index === 1)
            setFileData2(files)
    
        if (index === 2)
            setFileData3(files)
    
        if (index === 3)
            setFileData4(files)
    
    }

    const setProductsName = (val:any, index:number) => {
        const temp = [...products]
        temp[index].name = val
        setProducts(temp)
    }

    const setProductsDescription = (val:any, index:number) => {
        const temp = [...products]
        temp[index].description = val
        setProducts(temp)
    }

    const manageProduct = (val:string) => {
        setCategory(val)
        setOpenModal(true)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setDescription(objData[lang].description)
        setProducts(objData.products)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijp-products-section'>
                <div className='products-container'>
                    <div className='products-title'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} className='description'/>
                    </div>
                    <div className='products-subcontainer'>
                        {products.map((item:any, index:number) => (
                            <div className='our-product-wrapper' key={index}>
                                <div className='our-product-card'>
                                    <Image src={item.image_url} className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                                    <div className='card-overlay'>
                                        <label className='bg-white w-full text-center font-medium'>{item.name}</label>
                                        <input value={item.description} onChange={e => setProductsDescription(e.target.value, index)} className='description'/>
                                        <div className='change-picture'>
                                            <input id={`file-upload-${index+1}`} accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={_ => setFile(index)}/>
                                            <label htmlFor={`file-upload-${index+1}`}>Ganti Foto</label>
                                            <button className='btn btn-sm btn-outline-primary' onClick={_ => manageProduct(item.name)}>Manage Product</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
            <ModalManageProduct 
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                category={category}
            />
        </div>
    )
}

export default XadminIJPProductsSection

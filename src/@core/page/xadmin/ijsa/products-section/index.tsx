"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJSAProductsSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [description1, setDescription1] = useState(objData[lang].description_1)
    const [description2, setDescription2] = useState(objData[lang].description_2)
    const [materialText, setMaterialText] = useState(objData[lang].material_text)
    const [longText, setLongText] = useState(objData[lang].long_text)
    const [thickText, setThickText] = useState(objData[lang].thick_text)
    const [colorText, setColorText] = useState(objData[lang].color_text)
    const [products, setProducts] = useState(objData.products)

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
        payload.append("description_1", description1);
        payload.append("description_2", description2);
        payload.append("products", JSON.stringify(products));
        
        if (fileData1 !== null)
            payload.append("file_1", fileData1);

        if (fileData2 !== null)
            payload.append("file_2", fileData2);

        if (fileData3 !== null)
            payload.append("file_3", fileData3);

        if (fileData4 !== null)
            payload.append("file_4", fileData4);

        const response = await axiosInstance.post("/api/business-units-ijsa/our-products", payload);
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

    const setProductsMaterial = (val:any, index:number) => {
        const temp = [...products]
        temp[index].material = val
        setProducts(temp)
    }

    const setProductLong = (val:any, index:number) => {
        const temp = [...products]
        temp[index].long = val
        setProducts(temp)
    }

    const setProductsThick = (val:any, index:number) => {
        const temp = [...products]
        temp[index].thick = val
        setProducts(temp)
    }

    const setProductsColor = (val:any, index:number) => {
        const temp = [...products]
        temp[index].color = val
        setProducts(temp)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setDescription1(objData[lang].description_1)
        setDescription2(objData[lang].description_2)
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
            <div className='admin-ijsa-products-section'>
                <div className='products-ijsa-container'>
                    <div className='products-title'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <textarea value={description1} onChange={e => setDescription1(e.target.value)} className='description'/>
                        <textarea value={description2} onChange={e => setDescription2(e.target.value)} className='description'/>
                    </div>
                    <div className='products-subcontainer'>
                        {products.map((item:any, index:number) => (
                            <div className='our-product-wrapper' key={index}>
                                <div className='our-product-card'>
                                    <div className='card-image'>
                                        <Image src={item.image_url} className='our-product-img' alt='unicol' width={0} height={0} sizes='100%'/>
                                        <div className='img-overlay'>
                                            <input id={`file-upload-${index+1}`} accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={_ => setFile(index)}/>
                                            <label htmlFor={`file-upload-${index+1}`}>Ganti Foto</label>
                                        </div>
                                    </div>
                                    <div className='card-description'>
                                        <input value={item.name} onChange={e => setProductsName(e.target.value, index)} className='name'/>
                                        <p>{materialText}:<input value={item.material} onChange={e => setProductsMaterial(e.target.value, index)} className='value'/></p>
                                        <p>{longText}: <input value={item.long} onChange={e => setProductLong(e.target.value, index)} className='value'/></p>
                                        <p>{thickText}: <input value={item.thick} onChange={e => setProductsThick(e.target.value, index)} className='value'/></p>
                                        <p>{colorText}: <input value={item.color} onChange={e => setProductsColor(e.target.value, index)} className='value'/></p>
                                    </div>
                                </div>
                            </div>  
                        ))} 
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJSAProductsSection

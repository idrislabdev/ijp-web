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
    const [fileData, setFileData] = useState([])

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
        
        if (fileData.length > 0) {
            fileData.forEach((item:any) => {
                payload.append(`file_${item.id+1}`, item.files);
            });
        }

        const response = await axiosInstance.post("/api/business-units-ijsa/our-products", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile = (index:number) => {
        let src:any = document.getElementById(`file-upload-${index+1}`)
        let files = src.files[0]

        const temp = [...products]
        temp[index].image_url = URL.createObjectURL(files)
        
        let obj = {
            id: index,
            files: files
        }

        const tempFile:any = [...fileData]
        const check = tempFile.findIndex((x:any) => x.id === index)
        if (check >= 0) {
            tempFile[check].files = files
        } else {
            tempFile.push(obj)
        }
        setFileData(tempFile)
    
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

    const addProducts = () => {
        const temp = [...products];
        let newProduct = temp[0]
        newProduct.name = ''
        newProduct.long = ''
        newProduct.thick = ''
        newProduct.color = ''
        newProduct.material = ''
        temp.push(newProduct);
        setProducts(temp)
    }

    const deleteProduct = (index:number) => {
        const temp = [...products]
        temp.splice(index, 1)
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
                                            <div className='flex flex-col gap-[8px]'>
                                                <label htmlFor={`file-upload-${index+1}`}>Ganti Foto</label>
                                                <button className='btn btn-danger rounded-none !h-[40px]' onClick={_ => deleteProduct(index)}>Hapus</button>
                                            </div>
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
                        <div className='our-product-wrapper'>
                            <div className='add-card h-[395px] flex flex-col justify-center items-center cursor-pointer'>
                                <button className='btn btn-link' onClick={() => addProducts()}><AddOutlineIcon />Produk</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJSAProductsSection

"use client";

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminProductSection = (props: {objData:any}) => {
    const fileInput = useRef<HTMLInputElement>(null);

    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubTitle] = useState(objData[lang].subtitle)
    const [buttonText, setButtonText] = useState(objData[lang].button_text)
    const [fileData, setFileData] = useState(null);

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Product Section Berhasil Diupdate
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("title", title);
        payload.append("subtitle", subtitle);
        payload.append("button_text", buttonText);

        if (fileData !== null)
            payload.append("file", fileData);

        const response = await axiosInstance.post("/api/home/products", payload);
        if (fileInput.current) {
            fileInput.current.value = "";
        }
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile = async() => {
        let src:any = document.getElementById('file-upload')
        let files = src.files[0]
        if (files.size > 2000000) {
            alert(
              'File yang anda upload Terlalu Besar (Maksimal 2Mb) ' +
                'Ukuran File yang anda kirim ' +
                formatBytes(files.size)
            )
            files = null
            if (fileInput.current) {
                fileInput.current.value = "";
            }
        } else {
            setFileData(files)
        }


    }

    const formatBytes = (bytes:any, decimals = 0) => {
        if (bytes === 0) return '0 GB'
        if (isNaN(parseInt(bytes))) return bytes
        if (typeof bytes === 'string') bytes = parseInt(bytes)
        if (bytes === 0) return '0'
        const k = 1000
        const dm = decimals + 1 || 3
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubTitle(objData[lang].subtitle)
        setButtonText(objData[lang].button_text)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-home-products-section'>
                <div className='home-products-container'>
                    <div className='products-header'>
                        <div className='products-title'>
                            <input value={title} onChange={e => setTitle(e.target.value)} className='w-full btn btn-primary'/>
                            <textarea value={subtitle} onChange={e => setSubTitle(e.target.value)} className='w-full min-h-[100px] max-h-[100px]'/>
                        </div>
                        <input value={buttonText} onChange={e => setButtonText(e.target.value)} className='text-primary !bg-white text-center h-[44px]'/>
                        <div className='flex flex-col justify-center items-center gap-[4px]'>
                            <label className='text-neutral-700 text-lg'>Upload Katalog <span className='text-sm'>(*pdf)</span></label>
                            <input id="file-upload" type='file' accept='.pdf' onChange={setFile} ref={fileInput}/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full btn btn-primary' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminProductSection

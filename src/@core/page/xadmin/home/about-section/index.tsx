"use client";

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminHomeAboutSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubTitle] = useState(objData[lang].subtitle)
    const [description, setDescription] = useState(objData[lang].description)
    const [url, setUrl] = useState(objData.image_url)
    const [fileData, setFileData] = useState(null)
    const [placement, setPlacement] = React.useState('topCenter');
    const toaster = useToaster();
    const message = (
        <Message showIcon type={'info'} closable>
           The message appears on the {placement}.
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("title", title);
        payload.append("subtitle", subtitle);
        payload.append("description", description);

        if (fileData !== null)
            payload.append("file", fileData);

        const response = await axiosInstance.post("/api/home/about", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile = () => {
        let src:any = document.getElementById('file-upload')
        let files = src.files[0]
        setUrl(URL.createObjectURL(files))
        setFileData(files)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubTitle(objData[lang].subtitle)
        setDescription(objData[lang].description)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-home-about-section'>
                <div className='about-description-container'>
                    <input value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea value={subtitle} className='min-h-[100px] max-h-[100px]' onChange={e => setSubTitle(e.target.value)}/>
                    <textarea value={description} className='max-h-[250px] min-h-[250px]' onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className='about-image-container'>
                    <Image src={url} className='about-img' alt='gallery' width={330} height={330}/>
                    <div className='img-overlay'>
                        <input id="file-upload" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile}/>
                        <label htmlFor="file-upload">Ganti Foto</label>
                    </div>
                </div>
            </div>
            <button className='w-full btn btn-primary' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminHomeAboutSection

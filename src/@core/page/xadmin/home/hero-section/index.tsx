"use client";

import { AddOutlineIcon, CheckSquareIcon, EnvelopIcon, HomeIcon, PhoneIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminHomeHeroSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle1, setSubtitle1] = useState(objData[lang].subtitle_1)
    const [subtitle2, setSubtitle2] = useState(objData[lang].subtitle_2)
    const [buttonText, setButtonText] = useState(objData[lang].button_text)
    const [url, setUrl] = useState(objData.image_url)
    const [fileData, setFileData] = useState(null)

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
        payload.append("subtitle_1", subtitle1);
        payload.append("subtitle_2", subtitle2);
        payload.append("button_text", buttonText);

        if (fileData !== null)
            payload.append("file", fileData);

        const response = await axiosInstance.post("/api/home/hero", payload);
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
        setSubtitle1(objData[lang].subtitle_1)
        setSubtitle2(objData[lang].subtitle_2)
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
            <section className='admin-home-banner-section'>
                <div className='home-banner-container'>
                    <div className='banner-desc-subcontainer'>
                        <input value={title} onChange={e => setTitle(e.target.value)}/>
                        <textarea value={subtitle1} className='min-h-[100px] max-h-[100px]' onChange={e => setSubtitle1(e.target.value)}/>
                        <input value={subtitle2} onChange={e => setSubtitle2(e.target.value)}/>
                        <input value={buttonText} onChange={e => setButtonText(e.target.value)} className='button-text'/>
                    </div>
                    <div className='banner-img-subcontainer'>
                        <Image src={url} className='product-img' alt='product ijp' width={0} height={0} sizes='100%'/>
                        <div className='img-overlay'>
                            <input id="file-upload" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile}/>
                            <label htmlFor="file-upload">Ganti Foto</label>
                        </div>
                    </div>
                </div>
            </section>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminHomeHeroSection

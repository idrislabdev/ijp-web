"use client";

import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminNewsSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubTitle] = useState(objData[lang].subtitle)
    const [buttonText, setButtonText] = useState(objData[lang].button_text)

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data About Berhasil Diupdate
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("title", title);
        payload.append("subtitle", subtitle);
        payload.append("button_text", buttonText);

        const response = await axiosInstance.post("/api/home/news", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
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
            <div className='admin-home-news-section'>
                <div className='home-news-container'>
                    <div className='news-header'>
                        <div className='news-title'>
                            <input value={title} onChange={e => setTitle(e.target.value)} className='w-full'/>
                            <textarea value={subtitle} onChange={e => setSubTitle(e.target.value)} className='w-full min-h-[100px] max-h-[100px]'/>
                        </div>
                        <input value={buttonText} onChange={e => setButtonText(e.target.value)} className='bg-primary !text-white text-center'/>

                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminNewsSection

"use client";

import { AddOutlineIcon, CheckSquareIcon, EnvelopIcon, HomeIcon, PhoneIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJPHeaderSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubtitle] = useState(objData[lang].subtitle)

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
        payload.append("subtitle", subtitle);

        const response = await axiosInstance.post("/api/business-units-ijp/header", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle(objData[lang].subtitle)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijp-hero-section'>
                <div className='hero-container'>
                    <div className='text-welcome'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>

                    </div>
                    <div className='text-title'>
                        <input value={subtitle} onChange={e => setSubtitle(e.target.value)} className='title'/>
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJPHeaderSection

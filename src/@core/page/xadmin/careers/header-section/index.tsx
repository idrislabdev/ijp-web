"use client";

import { AddOutlineIcon, CheckSquareIcon, EnvelopIcon, HomeIcon, PhoneIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminCareersHeaderSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [description, setDescription] = useState(objData[lang].description)

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

        const response = await axiosInstance.post("/api/careers/header", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    useEffect(() => {
        setTitle(objData[lang].title)
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
            <div className='admin-careers-hero-section'>
                <div className='hero-container'>
                    <div className='text-welcome'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                    </div>
                    <div className='text-title'>
                        <input value={description} onChange={e => setDescription(e.target.value)} className='title'/>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminCareersHeaderSection

"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJSAMarketAreaSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle1, setSubtitle1] = useState(objData[lang].subtitle_1)
    const [subtitle2, setSubtitle2] = useState(objData[lang].subtitle_2)
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

        const response = await axiosInstance.post("/api/business-units-ijsa/market-area", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle1(objData[lang].subtitle_1)
        setSubtitle2(objData[lang].subtitle_2)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijsa-area-section'>
                <div className='area-container'>
                    <div className='title-subcontainer'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <input value={subtitle1} onChange={e => setSubtitle1(e.target.value)} className='subtitle-1'/>
                        <input value={subtitle2} onChange={e => setSubtitle2(e.target.value)} className='subtitl-2'/>
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJSAMarketAreaSection

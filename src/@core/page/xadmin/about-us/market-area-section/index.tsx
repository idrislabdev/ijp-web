"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminAboutMarketAreaSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle1, setSubtitle1] = useState(objData[lang].subtitle_1)
    const [subtitle2, setSubtitle2] = useState(objData[lang].subtitle_2)
    const [contents, setContents] = useState(objData[lang].contents)
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
        payload.append("subtitle_1", subtitle1);
        payload.append("subtitle_2", subtitle2);
        payload.append("contents", JSON.stringify(contents))


        const response = await axiosInstance.post("/api/about-us/market-area", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setContentTitle = (val:any, index:number) => {
        const temp = [...contents]
        temp[index].title = val
        setContents(temp)
    }

    const setContentDescription = (val:any, index:number) => {
        const temp = [...contents]
        temp[index].description = val
        setContents(temp)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle1(objData[lang].subtitle_1)
        setSubtitle2(objData[lang].subtitle_2)
        setContents(objData[lang].contents)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-about-us-area-section'>
                <div className='area-container'>
                    <div className='title-subcontainer'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <input value={subtitle1} onChange={e => setSubtitle1(e.target.value)} className='subtitle-1'/>
                        <input value={subtitle2} onChange={e => setSubtitle2(e.target.value)} className='subtitl-2'/>
                    </div>
                    <div className='area-subcontainer'>
                        {contents.map((item:any, index:number)=>(
                            <div className='detail-subcontainer' key={index}>
                                <input value={item.title} onChange={e => setContentTitle(e.target.value, index)} className='title'/>
                                <textarea value={item.description} onChange={e => setContentDescription(e.target.value, index)} className='description'/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminAboutMarketAreaSection

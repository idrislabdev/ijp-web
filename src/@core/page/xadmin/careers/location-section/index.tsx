"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminCareersLocationSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubtitle] = useState(objData[lang].subtitle)
    const [description, setDescription] = useState(objData[lang].description)
    const [offices, setOffices] = useState(objData[lang].offices)
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
        payload.append("description", description);
        payload.append("offices", JSON.stringify(offices))


        const response = await axiosInstance.post("/api/careers/locations", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setContentTitle = (val:any, index:number) => {
        const temp = [...offices]
        temp[index].title = val
        setOffices(temp)
    }

    const setContentDescription = (val:any, index:number) => {
        const temp = [...offices]
        temp[index].description = val
        setOffices(temp)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle(objData[lang].subtitle)
        setDescription(objData[lang].description)
        setOffices(objData[lang].offices)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-careers-location-section'>
                <div className='area-container'>
                    <div className='title-subcontainer'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <input value={subtitle} onChange={e => setSubtitle(e.target.value)} className='subtitle-1'/>
                        <input value={description} onChange={e => setDescription(e.target.value)} className='subtitl-2'/>
                    </div>
                    <div className='area-subcontainer'>
                        {offices.map((item:any, index:number)=>(
                            <div className='detail-subcontainer' key={index}>
                                <input value={item.title} onChange={e => setContentTitle(e.target.value, index)} className='title'/>
                                <textarea value={item.description} onChange={e => setContentDescription(e.target.value, index)} className='description'/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminCareersLocationSection

"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJSAProfileSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubtitle] = useState(objData[lang].subtitle)
    const [description1, setDescription1] = useState(objData[lang].description_1)
    const [description2, setDescription2] = useState(objData[lang].description_2)
    const [description3, setDescription3] = useState(objData[lang].description_3)

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
        payload.append("description_3", description2);

        const response = await axiosInstance.post("/api/business-units-ijsa/profile", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

  

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle(objData[lang].subtitle)
        setDescription1(objData[lang].description_1)
        setDescription2(objData[lang].description_2)

    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijsa-section'>
                <div className='profile-container'>
                    <div className='desc-subcontainer'>
                        <div className='desc-title'>
                            <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        </div>
                        <div className='desc-content'>
                            <textarea value={description1} onChange={e => setDescription1(e.target.value)} className='description'/>
                            <textarea value={description2} onChange={e => setDescription2(e.target.value)} className='description'/>
                            <textarea value={description3} onChange={e => setDescription3(e.target.value)} className='description'/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJSAProfileSection

"use client";

import { AddOutlineIcon, CheckSquareIcon, TargetIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminAboutHistorySection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubtitle] = useState(objData[lang].subtitle)
    const [contents, setContents] = useState(objData[lang].contents)
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
        payload.append("contents", JSON.stringify(contents))


        const response = await axiosInstance.post("/api/about-us/history", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setContentTitle = (val:any, index:number) => {
        const temp = [...contents]
        temp[index].title = val
        setContents(temp)
    }

    const setContentSubTitle = (val:any, index:number) => {
        const temp = [...contents]
        temp[index].subtitle = val
        setContents(temp)
    }

    const setContentDescription = (val:any, index:number) => {
        const temp = [...contents]
        temp[index].description = val
        setContents(temp)
    }

    const deleteContents = (index:number) => {
        const temp = [...contents]
        temp.splice(index, 1)
        setContents(temp)
    }

    const iterateContents = () => {
        const temp = [...contents]
        temp.push({title: "", subtitle: "", description: ""})
        setContents(temp)
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle(objData[lang].subtitle)
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
            <div className='admin-about-us-history-section'>
                <div className='history-container'>
                    <div className='title-container'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <textarea value={subtitle} onChange={e => setSubtitle(e.target.value)} className='subtitle'/>
                    </div>
                    <ul>
                        {contents.map((item:any, index:number)=>(
                            <li key={index}>
                                <div className='icon-step'>
                                    <TargetIcon />
                                    <input value={item.title} onChange={e => setContentTitle(e.target.value, index)} className='title'/>
                                </div>
                                <div className='desc-step'>
                                    <input value={item.subtitle} onChange={e => setContentSubTitle(e.target.value, index)} className='subtitle'/>
                                    <textarea value={item.description} onChange={e => setContentDescription(e.target.value, index)} className='description'/>    
                                </div>
                                <a className='btn-remove' onClick={_ => deleteContents(index)}><TrashOutlineIcon /></a>
                            </li>
                        ))}
                        <button className='btn-sm btn-outline flex items-center justify-center' onClick={iterateContents}><AddOutlineIcon /></button>
                    </ul>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminAboutHistorySection

"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminAboutOurStrategySection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [contents, setContents] = useState(objData[lang].contents)
    const [url, setUrl] = useState(objData.image_url)
    const [fileData, setFileData] = useState(null)
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
        payload.append("contents", JSON.stringify(contents))

        if (fileData !== null)
            payload.append("file", fileData);

        const response = await axiosInstance.post("/api/about-us/our-strategy", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile = () => {
        let src:any = document.getElementById('file-upload')
        let files = src.files[0]
        setUrl(URL.createObjectURL(files))
        setFileData(files)
    }

    const updateContent = (val:any, index:number) => {
        const temp = [...contents]
        temp[index] = val
        setContents(temp)
    }

    const iterateContents = () => {
        const temp = [...contents]
        temp.push("")
        setContents(temp)
    }

    const deleteContents = (index:number) => {
        const temp = [...contents]
        temp.splice(index, 1)
        setContents(temp)
    }


    useEffect(() => {
        setTitle(objData[lang].title)
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
            <div className='admin-about-us-strategy-section'>
                <div className='strategy-container'>
                    <div className='desc-subcontainer'>
                        <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        <ul> 
                            {contents.map((item:string, index:number)=>(
                                <li key={index}>
                                    <span><CheckSquareIcon /></span>
                                    <input value={contents[index]} onChange={e => updateContent(e.target.value, index)}/>
                                    <a className='btn-remove' onClick={_ => deleteContents(index)}><TrashOutlineIcon /></a>
                                </li>
                            ))}
                            <button className='flex items-center justify-center btn-sm' onClick={iterateContents}><AddOutlineIcon /></button>
                        </ul>
                    </div>
                    <div className='image-subcontainer'>
                        <Image src={url} alt='strategy' width="0" height="0" sizes="100%" />
                        <div className='img-overlay'>
                            <input id="file-upload" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile}/>
                            <label htmlFor="file-upload">Ganti Foto</label>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminAboutOurStrategySection

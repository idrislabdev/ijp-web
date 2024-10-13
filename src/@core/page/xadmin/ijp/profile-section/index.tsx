"use client";

import { AddOutlineIcon, CheckSquareIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJPProfileSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [subtitle, setSubtitle] = useState(objData[lang].subtitle)
    const [description1, setDescription1] = useState(objData[lang].description_1)
    const [description2, setDescription2] = useState(objData[lang].description_2)
    const [experience1, setExperience1] = useState(objData[lang].experience_1)
    const [experience2, setExperience2] = useState(objData[lang].experience_2)
    const [quote, setQuote] = useState(objData[lang].quote)
    const [url1, setUrl1] = useState(objData.image_1_url)
    const [url2, setUrl2] = useState(objData.image_2_url)
    const [url3, setUrl3] = useState(objData.image_3_url)
    const [fileData1, setFileData1] = useState(null)
    const [fileData2, setFileData2] = useState(null)
    const [fileData3, setFileData3] = useState(null)
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
        payload.append("description_1", description1);
        payload.append("description_2", description2);
        payload.append("experience_1", experience1);
        payload.append("experience_2", experience2);
        
        if (fileData1 !== null)
            payload.append("file_1", fileData1);

        if (fileData2 !== null)
            payload.append("file_2", fileData2);

        if (fileData3 !== null)
            payload.append("file_3", fileData3);

        const response = await axiosInstance.post("/api/business-units-ijp/profile", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setFile1 = () => {
        let src:any = document.getElementById('file-upload-1')
        let files = src.files[0]
        setUrl1(URL.createObjectURL(files))
        setFileData1(files)
    }

    const setFile2 = () => {
        let src:any = document.getElementById('file-upload-2')
        let files = src.files[0]
        setUrl2(URL.createObjectURL(files))
        setFileData2(files)
    }


    const setFile3 = () => {
        let src:any = document.getElementById('file-upload-3')
        let files = src.files[0]
        setUrl3(URL.createObjectURL(files))
        setFileData3(files)
    }


    useEffect(() => {
        setTitle(objData[lang].title)
        setSubtitle(objData[lang].subtitle)
        setDescription1(objData[lang].description_1)
        setDescription2(objData[lang].description_2)
        setExperience1(objData[lang].experience_1)
        setExperience2(objData[lang].experience_2)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijp-profile-section'>
                <div className='profile-container'>
                    <div className='image-subcontainer'>
                        <div className='top-subcontainer'>
                            <Image src={url1} alt='bapak sugik' width="0" height="0" sizes="100%" />
                            <div className='img-overlay'>
                                <input id="file-upload-1" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile1}/>
                                <label htmlFor="file-upload-1">Ganti Foto</label>
                            </div>
                        </div>
                        <div className='middle-subcontainer'>
                            <div className='experience-subcontainer'>
                                <input value={experience1} onChange={e => setExperience1(e.target.value)} className='experience-number'/>
                                <input value={experience2} onChange={e => setExperience2(e.target.value)} className='experience-text'/>
                            </div>
                        </div>
                        <div className='bottom-subcontainer'>
                            <div className='bottom-sub-image'>
                                <Image src={url2} alt='bapak sugik' width="0" height="0" sizes="100%" />
                                <div className='img-overlay'>
                                    <input id="file-upload-2" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile2}/>
                                    <label htmlFor="file-upload-2">Ganti Foto</label>
                                </div>
                            </div>
                            <div className='bottom-sub-image'>
                                <Image src={url3} alt='bapak sugik' width="0" height="0" sizes="100%" />
                                <div className='img-overlay'>
                                    <input id="file-upload-3" accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile3}/>
                                    <label htmlFor="file-upload-3">Ganti Foto</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='desc-subcontainer'>
                        <div className='desc-title'>
                            <input value={title} onChange={e => setTitle(e.target.value)} className='title'/>
                        </div>
                        <div className='desc-content'>
                            <textarea value={description1} onChange={e => setDescription1(e.target.value)} className='description'/>
                            <textarea value={description2} onChange={e => setDescription2(e.target.value)} className='description'/>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJPProfileSection

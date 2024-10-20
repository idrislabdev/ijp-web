"use client";

import { AddOutlineIcon, BulpIcon, CheckSquareIcon, HandShakeIcon, TargetIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminAboutOurMissionSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [ourMissions, setOurMissions] = useState(objData[lang].our_missions)
    const [ourVissions, setOurVissions] = useState(objData[lang].our_vissions)
    const [ourValues, setOurValues] = useState(objData[lang].our_values)
    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Section Berhasil Diupdate
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("our_missions", JSON.stringify(ourMissions))
        payload.append("our_vissions", JSON.stringify(ourVissions))
        payload.append("our_values", JSON.stringify(ourValues))

        const response = await axiosInstance.post("/api/about-us/our-mission", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }


    const updateContentMissions = (val:any, index:number) => {
        const temp = ourMissions.contents
        temp[index] = val
        setOurMissions({...ourMissions, contents: temp})
    }

    const updateContentVissions = (val:any, index:number) => {
        const temp = ourVissions.contents
        temp[index] = val
        setOurVissions({...ourVissions, contents: temp})
    }

    const updateContentTitleValues = (val:any, index:number) => {
        const temp = ourValues.contents
        temp[index].title = val
        setOurValues({...ourValues, contents: temp})
    }

    const updateContentDescriptionValues = (val:any, index:number) => {
        const temp = ourValues.contents
        temp[index].description = val
        setOurValues({...ourValues, contents: temp})
    }

    const iterateMissions = () => {
        const temp = ourMissions.contents
        temp.push("")
        setOurMissions({...ourMissions, contents: temp})
    }

    const deleteMissions = (index:number) => {
        const temp = ourMissions.contents
        temp.splice(index, 1)
        setOurMissions({...ourMissions, contents: temp})
    }

    const iterateVissions = () => {
        const temp = ourVissions.contents
        temp.push("")
        setOurVissions({...ourVissions, contents: temp})
    }

    const deleteVissions = (index:number) => {
        const temp = ourVissions.contents
        temp.splice(index, 1)
        setOurVissions({...ourVissions, contents: temp})
    }

    useEffect(() => {
        setOurVissions(objData[lang].our_vissions)
        setOurMissions(objData[lang].our_missions)
        setOurValues(objData[lang].our_values)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-about-us-our-mission-section'>
                <div className='our-mission-container '>
                    <div className='detail-subcontainer w-1/2'>
                        <div className='icon-detail stroke'>
                            <TargetIcon />
                        </div>
                        <div className='desc-detail'>
                            <input value={ourMissions.title} onChange={e => setOurMissions({...ourMissions, title:e.target.value})}/>
                            <ul>
                                {ourMissions.contents.map((item:string, index:number)=>(
                                    <li key={index}>
                                        <input value={item} onChange={e => updateContentMissions(e.target.value, index)}/>       
                                        <a className='btn-remove' onClick={_ => deleteMissions(index)}><TrashOutlineIcon /></a>
                                    </li>                           
                                ))}
                                <button className='flex items-center justify-center btn-sm' onClick={iterateMissions}><AddOutlineIcon /></button>
                            </ul>
                        </div>
                    </div>
                    <div className='detail-subcontainer w-1/2'>
                        <div className='icon-detail fill-bulp'>
                            <BulpIcon />
                        </div>
                        <div className='desc-detail'>
                        <input value={ourVissions.title} onChange={e => setOurVissions({...ourVissions, title:e.target.value})}/>
                            <ul>
                                {ourVissions.contents.map((item:string, index:number)=>(
                                    <li key={index}>
                                        <input value={item} onChange={e => updateContentVissions(e.target.value, index)}/>    
                                        <a className='btn-remove' onClick={_ => deleteVissions(index)}><TrashOutlineIcon /></a>
                                    </li>   
                                ))}
                                <button className='flex items-center justify-center btn-sm' onClick={iterateVissions}><AddOutlineIcon /></button>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='our-mission-container'>
                    <div className='detail-subcontainer w-[70%]'>
                        <div className='icon-detail fill'>
                            <HandShakeIcon />
                        </div>
                        <div className='desc-detail'>
                            <div className='flex items-center justify-center gap-[5px]'>
                                <input value={ourValues.title} onChange={e => setOurValues({...ourValues, title:e.target.value})}/>
                                <input value={ourValues.subtitle} onChange={e => setOurValues({...ourValues, subtitle:e.target.value})}/>
                            </div>
                            <div className='desc-growup'>
                                <div className='details-growup'>
                                    {ourValues.contents.map((item:any, index:number)=>(
                                        <div className='detail-growup' key={index}>
                                            <input value={item.title} className='title' onChange={e => updateContentTitleValues(e.target.value, index)}/>         
                                            <input value={item.description} className='description' onChange={e => updateContentDescriptionValues(e.target.value, index)}/>         
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminAboutOurMissionSection

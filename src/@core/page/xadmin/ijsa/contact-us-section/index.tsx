"use client";

import { AddOutlineIcon, CheckSquareIcon, EnvelopIcon, HomeIcon, PhoneIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminIJSAContactUsSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [title, setTitle] = useState(objData[lang].title)
    const [address, setAddress] = useState(objData[lang].address)
    const [phone, setPhone] = useState(objData[lang].phone)
    const [email, setEmail] = useState(objData[lang].email)

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
        payload.append("address", JSON.stringify(address))
        payload.append("phone", JSON.stringify(phone))
        payload.append("email", JSON.stringify(email))

        const response = await axiosInstance.post("/api/business-units-ijsa/contact", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    useEffect(() => {
        setTitle(objData[lang].title)
        setAddress(objData[lang].address)
        setPhone(objData[lang].phone)
        setEmail(objData[lang].email)

    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-ijsa-contact-us-section'>
                <div className='contact-us-container'>
                    <div className='title-subcontainer'>
                        <input value={title} className='title' onChange={e => setTitle(e.target.value)}/>       
                    </div>
                    <div className='detail-subcontainer'>
                        <div className='sub-detail'>
                            <HomeIcon color={'#fff'} />
                            <input value={address.title} className='title' onChange={e => setAddress({...address, title: e.target.value})}/>       
                            <textarea value={address.description} className='description' onChange={e => setAddress({...address, description: e.target.value})}/>       
                            <input value={address.value} className='value' onChange={e => setAddress({...address, value: e.target.value})}/>       
                        </div>
                        <div className='sub-detail'>
                            <PhoneIcon />
                            <input value={phone.title} className='title' onChange={e => setPhone({...phone, title: e.target.value})}/>       
                            <textarea value={phone.description} className='description' onChange={e => setPhone({...phone, description: e.target.value})}/>       
                            <input value={phone.value} className='value' onChange={e => setPhone({...phone, value: e.target.value})}/>   
                        </div>
                        <div className='sub-detail'>
                            <EnvelopIcon color={'#fff'} />
                            <input value={email.title} className='title' onChange={e => setEmail({...email, title: e.target.value})}/>       
                            <textarea value={email.description} className='description' onChange={e => setEmail({...email, description: e.target.value})}/>       
                            <input value={email.value} className='value' onChange={e => setEmail({...email, value: e.target.value})}/>   
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminIJSAContactUsSection

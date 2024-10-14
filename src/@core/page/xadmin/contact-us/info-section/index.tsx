"use client";

import { AddOutlineIcon, BuildingIcon, CheckSquareIcon, EnvelopIcon, HomeIcon, MailIcon, PhoneIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const XadminContactUsInfoSection = (props: {objData:any}) => {
    const {objData} = props;
    const [lang, setLang] = useState('id');
    const [email, setEmail] = useState(objData[lang].email)
    const [phone, setPhone] = useState(objData[lang].phone)
    const [office, setOffice] = useState(objData[lang].office)
    const [officeHour, setOfficeHour] = useState(objData[lang].office_hour)

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Section Berhasil Diupdate
        </Message>
      );

    const saveUpdate = async () => {
        let payload = new FormData();
        payload.append("lang", lang);
        payload.append("phone", JSON.stringify(phone))
        payload.append("email", JSON.stringify(email))
        payload.append("office", JSON.stringify(office))
        payload.append("office_hour", JSON.stringify(officeHour))



        const response = await axiosInstance.post("/api/contact-us/info", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const setOfficeHourText = (obj1:any, obj2:any, value:any) => {
        const temp = {...officeHour}
        temp.hours[obj1][obj2] = value
        setOfficeHour(temp)
    }

    useEffect(() => {
        setPhone(objData[lang].phone)
        setEmail(objData[lang].email)
        setOffice(objData[lang].office)
        setOfficeHour(objData[lang].office_hour)
    }, [objData, lang])

    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='tab-default'>
                <ul>
                    <li className={`${lang === "id" ? 'active' : ''}`}><a onClick={_ => setLang('id')}>Indonesia</a></li>
                    <li className={`${lang === "en" ? 'active' : ''}`}><a onClick={_ => setLang('en')}>Inggris</a></li>
                </ul>
            </div>
            <div className='admin-contact-us-info-section'>
                <div className='info-container'>
                    <div className='info-card'>
                        <div className='card-header'>
                            <div className='header-icon mail bg-[#F0FAF0]'>
                                <MailIcon />
                            </div>
                        </div>
                        <div className='card-content'>
                            <input value={email.title} className='title' onChange={e => setEmail({...email, title: e.target.value})}/>       
                            <textarea value={email.description} className='description' onChange={e => setEmail({...email, description: e.target.value})}/>       
                            <input value={email.link_text} className='link' onChange={e => setEmail({...email, link_text: e.target.value})}/>       
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='card-header'>
                            <div className='header-icon phone bg-[#FFF3E8]'>
                                <PhoneIcon />
                            </div>
                        </div>
                        <div className='card-content'>
                            <input value={phone.title} className='title' onChange={e => setPhone({...phone, title: e.target.value})}/>       
                            <textarea value={phone.description} className='description' onChange={e => setPhone({...phone, description: e.target.value})}/>       
                            <input value={phone.link_text} className='link' onChange={e => setPhone({...phone, link_text: e.target.value})}/>       
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='card-header'>
                            <div className='header-icon bg-[#F0FAF0]'>
                                <BuildingIcon  />
                            </div>
                        </div>
                        <div className='card-content'>
                            <input value={office.title} className='title' onChange={e => setOffice({...office, title: e.target.value})}/>       
                            <textarea value={office.description} className='description' onChange={e => setOffice({...office, description: e.target.value})}/>       
                            <input value={office.link_text} className='link' onChange={e => setOffice({...office, link_text: e.target.value})}/>       
                        </div>
                    </div>
                </div>
                <div className='business-hours-container'>
                    <div className='title-subcontainer'>
                        <input value={officeHour.title} className='title' onChange={e => setOfficeHour({...officeHour, title: e.target.value})}/>       
                        <textarea value={officeHour.description} className='description' onChange={e => setOfficeHour({...officeHour, description: e.target.value})}/>       
                    </div>
                    <div className='cards-subcontainer'>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.monday.text} className='label' onChange={e => setOfficeHourText('monday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.monday.value} className='span' onChange={e => setOfficeHourText('monday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.tuesday.text} className='label' onChange={e => setOfficeHourText('tuesday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.tuesday.value} className='span' onChange={e => setOfficeHourText('tuesday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.wednesday.text} className='label' onChange={e => setOfficeHourText('wednesday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.wednesday.value} className='span' onChange={e => setOfficeHourText('wednesday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.friday.text} className='label' onChange={e => setOfficeHourText('friday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.friday.value} className='span' onChange={e => setOfficeHourText('friday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.thursday.text} className='label' onChange={e => setOfficeHourText('thursday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.thursday.value} className='span' onChange={e => setOfficeHourText('thursday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.saturday.text} className='label' onChange={e => setOfficeHourText('saturday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.saturday.value} className='span' onChange={e => setOfficeHourText('saturday', 'value', e.target.value) }/>                               
                        </div>
                        <div className='business-hour-card'>
                            <input value={officeHour.hours.sunday_holiday.text} className='label' onChange={e => setOfficeHourText('sunday_holiday', 'text', e.target.value) }/>       
                            <input value={officeHour.hours.sunday_holiday.value} className='span' onChange={e => setOfficeHourText('sunday_holiday', 'value', e.target.value) }/>                               
                        </div>
                       
                    </div>
                </div>
            </div>
            <button className='w-full' onClick={saveUpdate}>Simpan Perubahan</button>
        </div>
    )
}

export default XadminContactUsInfoSection

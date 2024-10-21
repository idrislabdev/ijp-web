"use client"

import axiosInstance from '@/@core/utils/axios';
import React, { useRef, useState } from 'react'
import { Message, useToaster } from 'rsuite';

const CareersDetailSectionForm = (props: {job:any}) => {
    const fileInput = useRef<HTMLInputElement>(null);

    const { job } = props
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [fileData, setFileData] = useState(null);
    const [province, setProvince] = useState("");
    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Lamaran Berhasil Dikirim
        </Message>
    );

    const clearForm = () => {
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        setCity("");
        setProvince("");
        setFileData(null)
        if (fileInput.current) {
            fileInput.current.value = "";
        }
    }

    const checkField = () => {
        if (name !== '' && email !== '' && address !== '' && phone !== '' && city !== '' && province !== '' && fileData !== null) {
            return true
        } else {
            return false
        }
    }


    const sendCv = async () => {
        if (checkField() === true) {
            let payload = new FormData();
            payload.append("job_id", job.id);
            payload.append("job_name", job.name);
            payload.append("job_position", job.position);
            payload.append("job_location", job.location);
            payload.append("name", name);
            payload.append("email", email);
            payload.append("address", address);
            payload.append("phone", phone);
            payload.append("city", city);
            payload.append("province", province);
    
            if (fileData !== null)
                payload.append("file", fileData);
            
            const response = await axiosInstance.post("/api/send-cv", payload);
            clearForm();
            toaster.push(message, { placement:'bottomEnd', duration: 5000 })
        }

    }

    const setFile = () => {
        let src:any = document.getElementById('file-upload')
        let files = src.files[0]
        setFileData(files)
    }

    return (
        <div className='form-card'>
            <h5>Lamar Pekerjaan Ini</h5>
            <div className='form-area'>
                <div className='form'>
                    <label>Nama Lengkap<span className='text-red-500 text-xs'>*</span></label>
                    <input value={name} onChange={e => setName(e.target.value)} className='base' />
                </div>
                <div className='form'>
                    <label>Email<span className='text-red-500 text-xs'>*</span></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className='base' />
                </div>
                <div className='form'>
                    <label>Nomor Telepon<span className='text-red-500 text-xs'>*</span></label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} className='base' />
                </div>
                <div className='form'>
                    <label>Alamat<span className='text-red-500 text-xs'>*</span></label>
                    <textarea value={address} onChange={e => setAddress(e.target.value)} className='base' />
                </div>
                <div className='form'>
                    <label>Kota<span className='text-red-500 text-xs'>*</span></label>
                    <input value={city} onChange={e => setCity(e.target.value)} className='base' />
                </div>
                <div className='form'>
                    <label>Provinsi<span className='text-red-500 text-xs'>*</span></label>
                    <input value={province} onChange={e => setProvince(e.target.value)} className='base' />
                </div>
                {/* <div className='form'>
                    <label>Provinsi</label>
                    <select onChange={e => setProvince(e.target.value)} value={province}>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jakarta">Jakarta</option>
                    </select>
                </div> */}
                <div className='form'>
                    <label>Upload CV<span className='text-red-500 text-xs'>*</span></label>
                    <input id="file-upload" className='base' type='file' onChange={setFile} accept=".pdf" ref={fileInput}/>
                </div>
            </div>
            <button className={`btn ${checkField() === false ? '!bg-blue-300' : 'btn-primary'}`} onClick={sendCv}>Kirim Lamaran</button>
        </div>
    )
}

export default CareersDetailSectionForm

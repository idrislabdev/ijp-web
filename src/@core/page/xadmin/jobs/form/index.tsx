"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';

import dataOffices from '@/app/data/offices.json'
import dataPositions from '@/app/data/positions.json'

const JobsPageForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('Kantor Pusat');
  const [status, setStatus] = useState('Open');
  const [description, setDescription] = useState('');
  const [jobdescs, setJobdescs] = useState([]);
  const [qualifications, setQualifications] = useState([]);


  const toaster = useToaster();

  const message = (
      <Message showIcon type={'info'}>
        Data Section Berhasil Diupdate
      </Message>
  );

  const save = async () => {
    let body = {
      name          : name,
      position      : position,
      location      : location,
      description   : description,
      jobdescs      : jobdescs,
      status        : status,
      qualifications: qualifications
    }

    const response = await axiosInstance.post("/api/jobs", body);
    toaster.push(message, { placement:'bottomEnd', duration: 5000 })

  }

  return (
    <div className='form-input'>
        <div className='flex gap-[20px]'>
          <div className='form-area w-1/2'>
            <div className='input-area'>
              <label>Nama Lowongan</label>
              <input value={name} onChange={e => setName(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Posisi Pekerjaan</label>
              <select value={position} onChange={e => setPosition(e.target.value)} className='base'>
               {dataPositions.map((item:any, index:number) => (
                  <option value={item.name} key={index}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className='input-area'>
              <label>Lokasi (Penempatan)</label>
              <select value={location} onChange={e => setLocation(e.target.value)} className='base'>
                {dataOffices.map((item:any, index:number) => (
                  <option value={item.name} key={index}>{item.name}</option>
                ))}
              </select>
            </div>
            <div className='input-area'>
              <label>Tentang Pekerjaan</label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} className='base' />
            </div>
          </div>
          <div className='form-area w-1/2'>
            <div className='input-area'>
              <label>Jobdesk</label>
              <TagInput placeholder="Medium" style={{ width: '100%' }} defaultValue={jobdescs} onChange={(e:any) => setJobdescs(e)} />
            </div>
            <div className='input-area'>
              <label>Syarat / Kualifikasi</label>
              <TagInput placeholder="Medium" style={{ width: '100%' }} defaultValue={qualifications} onChange={(e:any) => setQualifications(e)}/>
            </div>
            <div className='input-area'>
              <label>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)} className='base'>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>
        <div className='form-button'>
            <button className='btn btn-outline-secondary'>Cancel</button>
            <button className='btn' onClick={_ => save()}>Save</button>
        </div>
    </div>
  )
}

export default JobsPageForm

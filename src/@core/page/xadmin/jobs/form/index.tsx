"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useCallback, useEffect, useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';

import dataOffices from '@/app/data/offices.json'
import dataPositions from '@/app/data/positions.json'

const JobsPageForm = (props: {uuid:string}) => {
  const { uuid } = props
  const [name, setName] = useState('');
  const [position, setPosition] = useState('Staff');
  const [location, setLocation] = useState('');
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
  
  const clearForm = () => {
    setName("");
    setPosition("");
    setLocation("");
    setDescription("");
    setJobdescs([]);
    setQualifications([]);
    setStatus('Open');
  }

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

    if (uuid === 'form') {
      await axiosInstance.post("/api/jobs", body);
      clearForm();
    } else {
      await axiosInstance.patch(`/api/jobs/${uuid}`, body);
    }

    toaster.push(message, { placement:'bottomEnd', duration: 5000 })
  }

  const getDetail = useCallback(async () => {
    const response = await axiosInstance.get(`/api/jobs/${uuid}`);
    const { data } = response.data
    setName(data.name);
    setPosition(data.position);
    setLocation(data.location);
    setDescription(data.description);
    setJobdescs(data.jobdescs);
    setQualifications(data.qualifications);
    setStatus(data.status);
  },[uuid])

  useEffect(() => {
    if (uuid != 'form') {
      getDetail();
    }
  }, [getDetail, uuid])

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
              <TagInput placeholder="Medium" style={{ width: '100%' }} value={jobdescs} onChange={(e:any) => setJobdescs(e)} />
            </div>
            <div className='input-area'>
              <label>Syarat / Kualifikasi</label>
              <TagInput placeholder="Medium" style={{ width: '100%' }} value={qualifications} onChange={(e:any) => setQualifications(e)}/>
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
            <button className='btn' onClick={_ => save()}>Save</button>
        </div>
    </div>
  )
}

export default JobsPageForm

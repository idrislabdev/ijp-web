"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';

import dataOffices from '@/app/data/offices.json'
import dataPositions from '@/app/data/positions.json'

const JobsUsersForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Open');



  const toaster = useToaster();

  const message = (
      <Message showIcon type={'info'}>
        Data Section Berhasil Diupdate
      </Message>
  );
  
  const clearForm = () => {
    setName("");
    setUsername("");
    setEmail("");
  }

  const save = async () => {
    let body = {
      name          : name,
      username      : username,
      email         : email,
    }

    const response = await axiosInstance.post("/api/users", body);
    toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    clearForm();
  }

  return (
    <div className='form-input'>
        <div className='flex gap-[20px]'>
          <div className='form-area w-full'>
            <div className='input-area'>
              <label>Nama User</label>
              <input value={name} onChange={e => setName(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Username</label>
              <input value={username} onChange={e => setUsername(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} className='base' />
            </div>
          </div>
        </div>
        <div className='form-button'>
            <button className='btn' onClick={_ => save()}>Save</button>
        </div>
    </div>
  )
}

export default JobsUsersForm

"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';

import dataOffices from '@/app/data/offices.json'
import dataPositions from '@/app/data/positions.json'

const ChangePasswordForm = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');


  const toaster = useToaster();

  const message = (
      <Message showIcon type={'info'}>
        Password Berhasil Diupdate
      </Message>
  );
  
  const clearForm = () => {
    setPassword1("");
    setPassword2("");
  }

  const save = async () => {
    let body = {
      password      : password1,
    }

    const response = await axiosInstance.post("/api/users/change-password", body);
    toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    clearForm();
  }

  return (
    <div className='form-input'>
        <div className='flex gap-[20px]'>
          <div className='form-area w-full'>
            <div className='input-area'>
              <label>Password</label>
              <input value={password1} onChange={e => setPassword1(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Ulangi Password</label>
              <input value={password2} onChange={e => setPassword2(e.target.value)} className='base' />
            </div>
          </div>
        </div>
        <div className='form-button'>
            <button className='btn' onClick={_ => save()}>Save</button>
        </div>
    </div>
  )
}

export default ChangePasswordForm

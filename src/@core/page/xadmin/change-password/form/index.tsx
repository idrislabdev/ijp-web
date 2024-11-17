"use client"
import axiosInstance from '@/@core/utils/axios';
import React, { useState } from 'react'
import TagInput from 'rsuite/TagInput';
import { Message, useToaster } from 'rsuite';


const ChangePasswordForm = (props: { token:any }) => {
  const { token } = props
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false)

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
    if (password1 == password2) {
      let body = {
        token: token,
        password      : password1,
      }
  
      const response = await axiosInstance.post("/api/users/change-password", body);
      toaster.push(message, { placement:'bottomEnd', duration: 5000 })
      setPassword1("")
      setPassword2("")
      setError(false)
    } else {
      setError(true)
    }
   
  }

  return (
    <div className='form-input'>
        <div className='flex flex-col gap-[20px]'>
          { password1 !== password2 && error &&
            <label className='bg-red-500 text-white text-base px-[10px]'>Pasword Tidak Sama</label>
          }
          <div className='form-area w-full'>
            <div className='input-area'>
              <label>Password</label>
              <input type='password' value={password1} onChange={e => setPassword1(e.target.value)} className='base' />
            </div>
            <div className='input-area'>
              <label>Ulangi Password</label>
              <input type='password' value={password2} onChange={e => setPassword2(e.target.value)} className='base' />
            </div>
          </div>
        </div>
        <div className='form-button'>
            <button className='btn disabled:!bg-slate-300' disabled={password1 == '' || password2 == ''} onClick={_ => save()}>Simpan Password</button>
        </div>
    </div>
  )
}

export default ChangePasswordForm

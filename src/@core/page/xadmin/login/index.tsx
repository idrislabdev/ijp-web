"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { HideEyeIcon, Lock2Icon, UserIcon } from '@/@core/my-icons'
import axiosInstance from '@/@core/utils/axios'
import { useRouter, useSearchParams } from "next/navigation";

const LoginContainerPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const logIn = async() => {
        setError('');
        let body = {
            username: username,
            password: password
        }
        axiosInstance.post("/api/login", body).
        then((response) => {
            const { success, error  } = response.data;
            if (success) {
                router.push("/xadmin/home");
                router.refresh();
            } else {
                console.log(error)
            }
        })
        .catch((error) => {
            setError(error.response.data.error);
        });
    }

    return (
        <div className='login-container'>
            <div className='left-subcontainer'>
                <div className='logo-subcontainer'>
                    {/* <TrivIcon color={'#318AC6'}/> */}
                </div>
                <div className='title-subcontainer'>
                    <h1>Selamat Datang</h1>
                    <p>Silahkan Login Untuk Masuk Halaman Admin</p>
                </div>
                <div className='form-subcontainer'>
                    {error !== '' &&  <label className='bg-red-500 text-white text-[14px]/[17px] h-[40px] flex flex-col justify-center items-center rounded-[4px]'>{error}</label>}
                    <div className='group-input prepend-append'>
                        <span className='append'><UserIcon color={'#838899'} /></span>
                        <input type='text' className='color-1' value={username} onChange={e => setUsername(e.target.value)} placeholder='username'/>
                    </div>
                    <div className='group-input prepend-append'>
                        <span className='append'><Lock2Icon color={'#838899'} /></span>
                        <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}  className='color-1' placeholder='Password'/>
                    </div>
                    <div className='button-flex'>
                        <button onClick={logIn} disabled={username === '' || password === ''} className='disabled:!bg-blue-300'>Log In</button>
                    </div>
                </div>
            </div>
            <div className='right-subcontainer'>
                <div className='image-subcontainer'>
                    <Image src='/images/others/login-2.png' alt='captcha' width={0} height={0} sizes='100%'/>
                </div>
            </div>
        </div>
    )
}

export default LoginContainerPage

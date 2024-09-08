import React from 'react'
import { HideEyeIcon, Lock2Icon, LockIcon, PeopleIcon, UserIcon } from '@/@core/my-icons'
import '@/styles/login.css'
import Image from 'next/image'
export default async function  XadminLoginPage({ params }: any) {
    return (
      <main className='login-page sm:mobile-responsive light-theme'>
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
            <div className='group-input prepend-append'>
              <span className='append'><UserIcon color={'#838899'} /></span>
              <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
              <input type='text' className='color-1' placeholder='username'/>
            </div>
            <div className='group-input prepend-append'>
              <span className='append'><Lock2Icon color={'#838899'} /></span>
              <span className='prepend'><HideEyeIcon color={'#838899'} /></span>
              <input type='password' className='color-1' placeholder='Password'/>
            </div>
            <div className='button-flex'>
              <button>Log In</button>
            </div>
          </div>
        </div>
        <div className='right-subcontainer'>
          <div className='image-subcontainer'>
            <Image src='/images/others/login-2.png' alt='captcha' width={0} height={0} sizes='100%'/>
          </div>
        </div>
      </div>
    </main>
    )
  }
  
  
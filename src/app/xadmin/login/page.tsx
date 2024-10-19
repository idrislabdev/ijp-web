import React from 'react'
import { HideEyeIcon, Lock2Icon, LockIcon, PeopleIcon, UserIcon } from '@/@core/my-icons'
import '@/styles/login.css'
import LoginContainerPage from '@/@core/page/xadmin/login'
export default async function  XadminLoginPage({ params }: any) {
    
    return (
      <main className='login-page sm:mobile-responsive light-theme'>
        <LoginContainerPage />
      </main>
    )
  }
  
  
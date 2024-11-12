
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminAboutProfileSection from '@/@core/page/xadmin/about-us/profile-section';
import { getDictionariesAbout } from '@/app/dictionaries';

import '@/styles/admin-about-us.css'
import Link from 'next/link';

export default async function  XadminAboutProfilePage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/about-us`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
  const { profile } = await getData();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><Link href={`/xadmin/about-us`}><FolderIcon /> About Us</Link></li>
                <li><FolderOpenIcon /> Profile Section</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Tentang Kami</h5>
                <p>Profile Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminAboutProfileSection objData={profile}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


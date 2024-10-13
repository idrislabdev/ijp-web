
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminAboutProfileSection from '@/@core/page/xadmin/about-us/profile-section';
import { getDictionariesAbout } from '@/app/dictionaries';

import '@/styles/admin-about-us.css'

export default async function  XadminAboutProfilePage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { profile } = await getDictionariesAbout();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Tentang Kami</li>
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


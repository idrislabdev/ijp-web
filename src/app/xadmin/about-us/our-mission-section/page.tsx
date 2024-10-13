
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminAboutOurMissionSection from '@/@core/page/xadmin/about-us/our-mission-section';
import { getDictionariesAbout } from '@/app/dictionaries';

import '@/styles/admin-about-us.css'

export default async function  XadminAboutOurStrategyPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { vission_mission } = await getDictionariesAbout();
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
                <li><FolderOpenIcon /> Our Mission Section</li>
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
                <p>Our Mission Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminAboutOurMissionSection objData={vission_mission}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


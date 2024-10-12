
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminOurStrategySection from '@/@core/page/xadmin/about-us/our-strategy-section';
import { getDictionariesAbout, getDictionariesHome } from '@/app/dictionaries';

import '@/styles/admin-about-us.css'

export default async function  XadminHomeProductPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { strategies } = await getDictionariesAbout();
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
                <li><FolderOpenIcon /> Our Stategy Section</li>
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
                <p>Our Strategy Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminOurStrategySection objData={strategies}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


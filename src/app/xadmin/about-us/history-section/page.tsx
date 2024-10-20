
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminAboutHistorySection from '@/@core/page/xadmin/about-us/history-section';
import { getDictionariesAbout, getDictionariesHome } from '@/app/dictionaries';

import '@/styles/admin-about-us.css'
import Link from 'next/link';

export default async function  XadminAboutHistoryPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { histories } = await getDictionariesAbout();
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
                <li><FolderOpenIcon /> History Section</li>
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
                <p>History Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminAboutHistorySection objData={histories}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


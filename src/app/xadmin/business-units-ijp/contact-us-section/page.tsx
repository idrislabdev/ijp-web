
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminIJPProfileSection from '@/@core/page/xadmin/ijp/profile-section';
import { getDictionariesIjp } from '@/app/dictionaries';
import '@/styles/admin-ijp.css'
import XadminIJPContactUsSection from '@/@core/page/xadmin/ijp/contact-us-section';

export default async function  XadminIJPContactUsPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { contact } = await getDictionariesIjp();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Business Units (IJP)</li>
                <li><FolderOpenIcon /> Contact Us Section</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Business Units (IJP)</h5>
                <p>Contact Us Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminIJPContactUsSection objData={contact}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


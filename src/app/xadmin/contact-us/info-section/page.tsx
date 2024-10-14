
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import { getDictionariesContactUs } from '@/app/dictionaries';
import XadminContactUsInfoSection from '@/@core/page/xadmin/contact-us/info-section';
import '@/styles/admin-contact-us.css'

export default async function  XadminContactInfoPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { info } = await getDictionariesContactUs();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Contact Us</li>
                <li><FolderOpenIcon /> Info Section</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Contact Us</h5>
                <p>Info Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminContactUsInfoSection objData={info} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

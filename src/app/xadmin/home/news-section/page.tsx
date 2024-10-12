
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import { getDictionariesHome } from '@/app/dictionaries';
import XadminNewsSection from '@/@core/page/xadmin/home/news-section';
import '@/styles/admin-home.css'

export default async function  XadminHomeNewsPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { news } = await getDictionariesHome();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Home</li>
                <li><FolderOpenIcon /> Berita Section</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Home</h5>
                <p>Berita Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminNewsSection objData={news}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


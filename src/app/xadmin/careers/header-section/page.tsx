
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminCareersHeaderSection from '@/@core/page/xadmin/careers/header-section';
import Link from 'next/link';
import { getDictionariesCarrers } from '@/app/dictionaries';
import '@/styles/admin-careers.css'

export default async function  XadminCareersHeaderPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { header } = await getDictionariesCarrers();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><Link href={`/xadmin/careers`}><FolderIcon /> Karir</Link></li>
                <li><FolderOpenIcon /> Header Section</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Karir</h5>
                <p>Header Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminCareersHeaderSection objData={header}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


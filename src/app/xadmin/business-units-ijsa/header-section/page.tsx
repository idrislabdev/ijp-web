
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminIJSAHeaderSection from '@/@core/page/xadmin/ijsa/header-section';
import { getDictionariesIjsa } from '@/app/dictionaries';
import '@/styles/admin-ijsa.css'
import Link from 'next/link';

export default async function  XadminIJSAHeaderPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { header } = await getDictionariesIjsa();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><Link href={`/xadmin/business-units-ijsa`}><FolderIcon /> Business Units (IJSA)</Link></li>
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
                <h5>Halaman Business Units (IJSA)</h5>
                <p>Header Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminIJSAHeaderSection objData={header}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


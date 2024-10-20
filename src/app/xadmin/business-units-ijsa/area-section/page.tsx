
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminIJSAMarketAreaSection from '@/@core/page/xadmin/ijsa/area-section';
import { getDictionariesIjsa } from '@/app/dictionaries';
import '@/styles/admin-ijsa.css'

export default async function  XadminIJSAAreaPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { market_area } = await getDictionariesIjsa();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Business Units (IJSA)</li>
                <li><FolderOpenIcon /> Area Section</li>
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
                <p>Area Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminIJSAMarketAreaSection objData={market_area}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


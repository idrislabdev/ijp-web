
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import { getDictionariesHome } from '@/app/dictionaries';
import XadminBusinessUnitsSection from '@/@core/page/xadmin/home/business-units-section';
import '@/styles/admin-home.css'

export default async function  XadminPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  const { business_units } = await getDictionariesHome();
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
                <li><FolderOpenIcon /> Unit Bisnis Section</li>
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
                <p>Unit Bisnis Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminBusinessUnitsSection objData={business_units}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


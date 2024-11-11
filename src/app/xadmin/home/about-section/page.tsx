
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import { getDictionariesHome } from '@/app/dictionaries';
import XadminHomeAboutSection from '@/@core/page/xadmin/home/about-section';
import '@/styles/admin-home.css'
import axiosInstance from '@/@core/utils/axios';
import { getDataHome } from '@/@core/services/api';
import { promises as fs } from 'fs';

export default async function  XadminHomeAboutPage({ params }: any) {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  let file_data = await fs.readFile(process.cwd() + '/src/app/dictionaries/home.json', 'utf8');
  let data = JSON.parse(file_data)
  const { about } = data

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
                <li><FolderOpenIcon /> About Section</li>
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
                <p>Pengaturan Section About</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminHomeAboutSection objData={about}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


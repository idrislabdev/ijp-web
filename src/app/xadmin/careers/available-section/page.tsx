
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon } from '@/@core/my-icons'
import XadminCareersAvailableSection from '@/@core/page/xadmin/careers/availabe-section';
import Link from 'next/link';
import '@/styles/admin-careers.css'

export default async function  XadminCareersAvailablePage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/careers`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
  const { jobs_area } = await getData();
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
                <li><FolderOpenIcon /> Tersedia Section</li>
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
                <p>Tersedia Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminCareersAvailableSection objData={jobs_area}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


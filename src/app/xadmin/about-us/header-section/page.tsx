
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import '@/styles/admin-ijp.css'
import XadminAboutHeaderSection from '@/@core/page/xadmin/about-us/header-section';
import Link from 'next/link';

export default async function  XadminIJPHeaderPage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/about-us`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
  const { header } = await getData();
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
                <h5>Halaman Business Units (IJP)</h5>
                <p>Header Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminAboutHeaderSection objData={header}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


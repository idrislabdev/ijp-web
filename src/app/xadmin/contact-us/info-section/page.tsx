
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon } from '@/@core/my-icons'
import XadminContactUsInfoSection from '@/@core/page/xadmin/contact-us/info-section';
import '@/styles/admin-contact-us.css'
import Link from 'next/link';

export default async function  XadminContactInfoPage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/contact-us`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
  const { info } = await getData();
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><Link href={`/xadmin/contact-us`}><FolderIcon /> Contact Us</Link></li>
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


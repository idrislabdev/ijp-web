
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import { getDictionariesHome } from '@/app/dictionaries';
import XadminNewsSection from '@/@core/page/xadmin/home/news-section';
import '@/styles/admin-home.css'
import XadminProductSection from '@/@core/page/xadmin/home/product-section';

export default async function  XadminHomeProductPage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/home`, {
      cache: 'no-store',
    })
    let data = await res.json()
    return data.data
  }
  const { our_products } = await getData();
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
                <li><FolderOpenIcon /> Product Section</li>
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
                <XadminProductSection objData={our_products}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


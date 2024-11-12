
import React, { useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import XadminIJPProfileSection from '@/@core/page/xadmin/ijp/profile-section';
import { getDictionariesIjp } from '@/app/dictionaries';
import '@/styles/admin-ijp.css'
import XadminIJPProductsSection from '@/@core/page/xadmin/ijp/products-section';
import Link from 'next/link';

export default async function  XadminIJPProductsPage() {
  async function getData() {
    let res = await fetch(`${process.env.BASE_API_URL}/api/business-units-ijp`, {
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
                <li><Link href={`/xadmin/business-units-ijp`}><FolderIcon /> Business Units (IJP)</Link></li>
                <li><FolderOpenIcon /> Products Section</li>
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
                <p>Products Section</p>
              </div>
            </div>
            <div className='main-body'>
                <XadminIJPProductsSection objData={our_products}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


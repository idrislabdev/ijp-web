"use client"

import React, { useEffect, useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import Link from 'next/link';
import XadminUsersTable from '@/@core/page/xadmin/users/table';

export default function  XadminUsersPage() {
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Data Users</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Data User</h5>
                <p>Manajemen Data User</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <div className='flex justify-end'>
                <Link href={`/xadmin/users/form`} className='btn btn-primary'>Tambah Data</Link>
              </div>
              <XadminUsersTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


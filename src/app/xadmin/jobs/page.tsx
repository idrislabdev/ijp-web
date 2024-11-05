import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon } from '@/@core/my-icons'

import Link from 'next/link';
import XadminJobsTable from '@/@core/page/xadmin/jobs/table';

export default async function  XadminJobsPage() {
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Data Jobs</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Jobs</h5>
                <p>Manajemen Lowongan Kerja</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <div className='flex justify-end'>
                <Link href={`/xadmin/jobs/form`} className='btn btn-primary'>Tambah Data</Link>
              </div>
              <XadminJobsTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


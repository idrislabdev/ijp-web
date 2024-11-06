import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, EyeIcon, EyeOutlineIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import Link from 'next/link';
import XadminApplicantsTable from '@/@core/page/xadmin/applicants/table';

export default async function  XadminApplicantsPage() {
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Data Pelamar</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Pelamar</h5>
                <p>Manajemen Data Pelamar Kerja</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <XadminApplicantsTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


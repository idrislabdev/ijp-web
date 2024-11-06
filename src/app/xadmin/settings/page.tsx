import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, EyeIcon, EyeOutlineIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import Link from 'next/link';
import XadminApplicantsTable from '@/@core/page/xadmin/applicants/table';
import XadminSettingsTable from '@/@core/page/xadmin/settings/table';

export default async function  XadminSettingsPage() {
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
                <li><FolderIcon /> Pengaturan</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Pengaturan</h5>
                <p>Pengaturan Data General</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <XadminSettingsTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


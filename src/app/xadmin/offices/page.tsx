import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, EyeIcon, EyeOutlineIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import XadminSettingsTable from '@/@core/page/xadmin/settings/table';
import XadminOfficesTable from '@/@core/page/xadmin/offices/table';

export default async function  XadminOfficesPage() {
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
                <li><FolderIcon /> Data Kantor &amp; Gudang</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Data Kantor &amp; Gudang</h5>
                <p>Pengaturan Data Kantor &amp; Gudang</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <XadminOfficesTable />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


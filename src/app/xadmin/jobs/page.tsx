import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import dataTable from "@/app/data/jobs.json"
import Link from 'next/link';

export default async function  XadminJobsPage() {
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
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Lowongan</th>
                    <th>Posisi</th>
                    <th>Lokasi</th>
                    <th>Tanggal Posting</th>
                    <th>Status</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item:any,index:number) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.location}</td>
                      <td>{moment(item.created_at).format('DD MMMM YYYY')}</td>
                      <td>{item.status}</td>
                      <td className='text-center'>
                        <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


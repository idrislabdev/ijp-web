import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { AboutOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import Link from 'next/link';

export default async function  XadminCareersPage() {
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
                <li><FolderIcon /> Karir</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <AboutOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Karir</h5>
                <p>Pengaturan Halaman Karir</p>
              </div>
            </div>
            <div className='main-body'>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Section</th>
                    <th>Keterangan</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Header / Hero</td>
                    <td>Pengaturan text dan gambar pada area header</td>
                    <td className='text-center'>
                      <Link href='/xadmin/careers/header-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Lokasi Kantor</td>
                    <td>Pengaturan Lokasi Kantor </td>
                    <td className='text-center'>
                      <Link href='/xadmin/careers/location-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Available Jobs</td>
                    <td>Pengaturan Available Jobs </td>
                    <td className='text-center'>
                      <Link href='/xadmin/careers/available-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


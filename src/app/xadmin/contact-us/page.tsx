import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import Link from 'next/link';

export default async function  XadminContactPage() {
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
                <li><FolderIcon /> Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <PhoneOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Kontak Kami</h5>
                <p>Pengaturan Halaman Kontak Kami</p>
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
                    <td>Header Section</td>
                    <td>Pengaturan Header</td>
                    <td className='text-center'>
                      <Link href='/xadmin/contact-us/header-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Info Section</td>
                    <td>Pengaturan Info</td>
                    <td className='text-center'>
                      <Link href='/xadmin/contact-us/info-section' className='btn-action'><PencilOutlineIcon /></Link>
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


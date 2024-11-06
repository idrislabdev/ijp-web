import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { AboutOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import Link from 'next/link';

export default async function  XadminIJSAPage() {
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
                <li><FolderIcon /> Business Units (IJSA)</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <AboutOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Business Units (IJSA)</h5>
                <p>Pengaturan Halaman Business Units (IJSA)</p>
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
                      <Link href='/xadmin/business-units-ijsa/header-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Profil Perusahaan</td>
                    <td>Pengaturan profil unit bisnis IJSA </td>
                    <td className='text-center'>
                      <Link href='/xadmin/business-units-ijsa/profile-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Visi dan Misi</td>
                    <td>Pengaturan visi dan misi IJSA</td>
                    <td className='text-center'>
                      <Link href='/xadmin/business-units-ijsa/our-mission-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Products</td>
                    <td>Section Produk</td>
                    <td className='text-center'>
                      <Link href='/xadmin/business-units-ijsa/products-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Area</td>
                    <td>Cakupan Area IJSA</td>
                    <td className='text-center'>
                      <Link href='/xadmin/business-units-ijsa/area-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Contact Us</td>
                    <td>Detail Kontak IJSA</td>
                    <td className='text-center'>
                      <Link href='/xadmin/business-units-ijsa/contact-us-section' className='btn-action'><PencilOutlineIcon /></Link>
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


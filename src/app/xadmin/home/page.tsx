import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import Link from 'next/link';

export default async function  XadminPage() {
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
                <li><FolderIcon /> Home</li>
                <li><FolderOpenIcon /> Setting Header</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <HomeOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Home</h5>
                <p>Pengaturan Halaman Home</p>
              </div>
            </div>
            <div className='main-body'>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Section</th>
                    <th>Keterangan</th>
                    <th>Last Update</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Header / Hero</td>
                    <td>Pengaturan text dan gambar pada area header</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <Link href='/xadmin/home/hero-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Tentang Perusahaan</td>
                    <td>Pengaturan info perusahan unicorp </td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <Link href='/xadmin/home/about-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Unit Bisnis</td>
                    <td>Pengaturan text pada section unit bisnis</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <Link href='/xadmin/home/business-units-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Product</td>
                    <td>Pengaturan info dan produk yang ingin ditampilkan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <Link href='/xadmin/home/products-section' className='btn-action'><PencilOutlineIcon /></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Berita Terkini</td>
                    <td>Pengaturan judul dan text pada section berita</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <Link href='/xadmin/home/news-section' className='btn-action'><PencilOutlineIcon /></Link>
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


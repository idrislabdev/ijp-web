import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

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
                <li><FolderIcon /> Home</li>
                <li><FolderOpenIcon /> Setting Header</li>
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
                    <th>Last Update</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Setting Map</td>
                    <td>Pengaturan Info Map Lokasi Perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Setting Text</td>
                    <td>Pengaturan welcome text pada halaman kontak kami</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Alamat Email</td>
                    <td>Pengaturan Alamat Email Utama</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Nomor Telepon</td>
                    <td>Pengaturan nomor telepon utama perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Alamat Perusahaan</td>
                    <td>Pengaturan alamat utama perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Jam Kerja</td>
                    <td>Pengaturan informasi jam kerja kantor / perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action'><PencilOutlineIcon /></a>
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


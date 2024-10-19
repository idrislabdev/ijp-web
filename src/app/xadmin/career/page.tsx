import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

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
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Karir</h5>
                <p>Manajemen Lowongan Kerja</p>
              </div>
            </div>
            <div className='main-body'>
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
                  <tr>
                    <td>01</td>
                    <td>Staff Accounting</td>
                    <td>Staff Accounting</td>
                    <td>Kantor Pusat</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td>Buka</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Staff IT</td>
                    <td>Staff IT</td>
                    <td>Kantor Pusat</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td>Buka</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Admin Sales</td>
                    <td>Admin Sales</td>
                    <td>Kantor Pusat</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td>Buka</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Staff Administrasi</td>
                    <td>Staff Administrasi</td>
                    <td>Kantor Cabang Jakarta</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td>Buka</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Manager Area</td>
                    <td>Manager Area</td>
                    <td>Kantor Cabang Semarang</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td>Buka</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
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


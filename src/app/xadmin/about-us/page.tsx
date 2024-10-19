import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { AboutOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
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
                <li><FolderIcon /> About Us</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <AboutOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Tentang Kami</h5>
                <p>Pengaturan Halaman Tentang Kami</p>
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
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Profil Perusahaan</td>
                    <td>Pengaturan profil perusahan unicorp </td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Visi dan Misi</td>
                    <td>Pengaturan visi dan misi perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Sejarah Unicorp</td>
                    <td>Pengaturan info tentang sejarah perusahaan unicorp</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Our Strategy</td>
                    <td>Detail strategi perusahaan</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
                    <td className='text-center'>
                      <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Area Perdagangan</td>
                    <td>Cakupan area perdagangan unicorp</td>
                    <td>{moment('2024-10-10').format('DD MMMM YYYY')}</td>
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


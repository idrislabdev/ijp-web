import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';
import Link from 'next/link';
import dataTable from "@/app/data/news.json"

export default async function  XadminNewsPage() {
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
                <li><FolderIcon /> Posting Berita</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Posting Berita</h5>
                <p>Manajemen Data Berita</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <div className='flex justify-end'>
                <Link href={`/xadmin/posting-news/form`} className='btn btn-primary'>Tambah Data</Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Berita</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item:any,index:number) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
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


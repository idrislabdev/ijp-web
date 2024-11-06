"use client"

import React, { useEffect, useState } from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import { ArchieveOutlineIcon, ArrowLeftIcon, FolderIcon, FolderOpenIcon, HomeOutlineIcon, PencilOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon } from '@/@core/my-icons'
import moment from 'moment';

import Link from 'next/link';
import axiosInstance from '@/@core/utils/axios';

export default async function  XadminUsersPage() {
  const [users,setUsers] = useState([])
  const formatDate = (val:string) => {
    moment.locale('id')
    return moment(val).format('DD MMMM YYYY');
  }

  const getData = async () => {
    const response = await axiosInstance.get(`/api/jobs`);
    const { data } = response.data
    setUsers(data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
          <div className='container-header'>
            <div className='breadcrumb-info'>
              <ul>
                <li><ArrowLeftIcon /></li>
                <li><FolderIcon /> Data Users</li>
              </ul>
            </div>
          </div>
          <div className='container-body'>
            <div className='title-body'>
              <div className='logo-area'>
                <ArchieveOutlineIcon />
              </div>
              <div className='text-area'>
                <h5>Halaman Data User</h5>
                <p>Manajemen Data User</p>
              </div>
            </div>
            <div className='main-body flex flex-col gap-[10px]'>
              <div className='flex justify-end'>
                <Link href={`/xadmin/users/form`} className='btn btn-primary'>Tambah Data</Link>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama User</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th className='text-center'>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item:any,index:number) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
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


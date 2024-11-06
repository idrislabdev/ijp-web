"use client";

import React, { useEffect, useState } from 'react'
import { EyeOutlineIcon, PencilOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
import ModalConfirm from '@/@core/components/modal/modal-confirm';
import moment from 'moment';
import Link from 'next/link';

const XadminUsersTable = () => {
    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal ] = useState(false);
    const [openModalConfirm, setOpenModalConfirm ] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const formatDate = (val:string) => {
        moment.locale('id')
        return moment(val).format('DD MMMM YYYY');
    }
    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Jobs Berhasil Dihapus
        </Message>
    );
    const deleteJobs = (id:string) => {
        setSelectedId(id)
        setOpenModalConfirm(true)
    }
    const confirmDelete = async () => {
        const response = await axiosInstance.delete(`/api/users/${selectedId}`);
        const { data } = response.data
        await getData();
        await setOpenModalConfirm(false)
        await toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    const getData = async () => {
        const response = await axiosInstance.get(`/api/users`);
        const { data } = response.data
        console.log(data)
        setUsers(data)
    }

    useEffect(() => {
      getData()
    }, [])
    return (
        <>
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
                        <div className='flex items-center'>
                            <a className='btn-action cursor-pointer'><PencilOutlineIcon /></a>
                            <a className='btn-action cursor-pointer' onClick={_ => deleteJobs(item.id)}><TrashOutlineIcon /></a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            <ModalConfirm 
                isModalOpen={openModalConfirm} 
                setIsModalOpen={setOpenModalConfirm} 
                content='Hapus Data Ini'
                onConfirm={confirmDelete}
            />
        </>
    )
}

export default XadminUsersTable

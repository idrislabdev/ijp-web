"use client";

import React, { useState } from 'react'
import dataTable from "@/app/data/jobs.json"
import { EyeOutlineIcon, PencilOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
import ModalConfirm from '@/@core/components/modal/modal-confirm';
import moment from 'moment';
import Link from 'next/link';

const XadminJobsTable = () => {
    const [jobs, setJobs] = useState(dataTable);
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
        const response = await axiosInstance.delete(`/api/jobs/${selectedId}`);
        const { data } = response.data
        await getData();
        await setOpenModalConfirm(false)
        await toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    const getData = async () => {
        const response = await axiosInstance.get(`/api/jobs`);
        const { data } = response.data
        setJobs(data)
    }
    return (
        <>
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
                  {dataTable.map((item:any,index:number) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.location}</td>
                      <td>{moment(item.created_at).format('DD MMMM YYYY')}</td>
                      <td>{item.status}</td>
                      <td className='text-center'>
                        <div className='flex items-center'>
                            <Link href={`/xadmin/jobs/${item.id}`} className='btn-action cursor-pointer'><PencilOutlineIcon /></Link>
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

export default XadminJobsTable

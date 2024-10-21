"use client";

import React, { useState } from 'react'
import dataTable from "@/app/data/applicants.json"
import { EyeOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
import ModalApplicant from '../modal-applicant';
import ModalConfirm from '@/@core/components/modal/modal-confirm';

const XadminApplicantsTable = () => {
    const [applicants, setApplicants] = useState(dataTable);
    const [applicant, setApplicant] = useState({})
    const [openModal, setOpenModal ] = useState(false);
    const [openModalConfirm, setOpenModalConfirm ] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Applicant Berhasil Dihapus
        </Message>
    );
    const showApplicant = (item:any) => {
        setApplicant(item)
        setOpenModal(true);
    }
    const deleteApplicant = (id:string) => {
        setSelectedId(id)
        setOpenModalConfirm(true)
    }
    const confirmDelete = async () => {
        const response = await axiosInstance.delete(`/api/applicants/${selectedId}`);
        const { data } = response.data
        setApplicants(data)
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Pelamar</th>
                        <th>Nama Lowongan</th>
                        <th>Posisi</th>
                        <th>Lokasi</th>
                        <th className='text-center'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((item:any,index:number) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.job_name}</td>
                        <td>{item.job_position}</td>
                        <td>{item.job_location}</td>
                        <td className='text-center'>
                        <div className='flex justify-center items-center gap-[4px]'>
                            <a className='btn-action cursor-pointer' onClick={_ => showApplicant(item)}><EyeOutlineIcon /></a>
                            <a className='btn-action cursor-pointer' onClick={_ => deleteApplicant(item.id)}><TrashOutlineIcon /></a>
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <ModalApplicant 
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                applicant={applicant}
            />
            <ModalConfirm 
                isModalOpen={openModalConfirm} 
                setIsModalOpen={setOpenModalConfirm} 
                content='Hapus Data Ini'
                onConfirm={confirmDelete}
            />
        </>
    )
}

export default XadminApplicantsTable

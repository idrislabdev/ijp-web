"use client";

import React, { useEffect, useState } from 'react'
import { EyeOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
import ModalApplicant from '../modal-applicant';
import ModalConfirm from '@/@core/components/modal/modal-confirm';
import * as XLSX from "xlsx";

const XadminApplicantsTable = () => {
    const [applicants, setApplicants] = useState([]);
    const [offices, setOffices] = useState([]);
    const [applicant, setApplicant] = useState({})
    const [openModal, setOpenModal ] = useState(false);
    const [openModalConfirm, setOpenModalConfirm ] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [selectPosition, setSelectPosition] = useState('Semua')

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
        const response = await axiosInstance.delete(`/api/jobs-applicant/${selectedId}`);
        const { data } = response.data
        await getData('');
        await setOpenModalConfirm(false)
        await toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    const getData = async (filter:string) => {
        const response = await axiosInstance.get(`/api/jobs-applicant`);
        const { data } = response.data
        if (filter === '') {
            setApplicants(data)
        } else {
            setApplicants(data.filter((x:any) => x.job_location === filter))
        }
    }

    const getDataOffices = async () => {
        const response = await axiosInstance.get(`/api/offices`);
        const { data } = response.data
        setOffices(data)
    }

    const handleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
        setSelectPosition(e.target.value)
        getData(e.target.value)
    }

    const exportData = async () => {
        const dataToExport = applicants.map((item: any) => ({
            'Nama Pelamar': item.name,
            'Judul Pekerjaan': item.job_name,
            'Posisi Pekerjaan': item.job_position,
            'Lokasi Pekerjaann': item.job_location,
          }),);
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
          XLSX.utils.book_append_sheet(workbook, worksheet, 'daftar pelamar');
          // Save the workbook as an Excel file
          XLSX.writeFile(workbook, `daftar_pelamar.xlsx`)
    }
    
    useEffect(() => {
        getData('')
        getDataOffices()
    }, [])
    return (
        <>
            <div className='flex justify-end gap-[4px]'>
                <select className='h-[40px]' onChange={handleChange} value={selectPosition}>
                    <option value={''}>Semua</option>
                    {offices.map((item:any, index:number) => (
                        <option value={item.name} key={index}>{item.name}</option>
                    ))}
                </select>
                <button className='btn btn-primary btn-big' onClick={() => exportData()}>Download Data</button>
            </div>
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

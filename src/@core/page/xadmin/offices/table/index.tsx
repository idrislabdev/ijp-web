"use client";

import React, { useState } from 'react'
import dataTable from "@/app/data/offices.json"
import { EyeOutlineIcon, PencilOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
import ModalEditOffices from '../modal-edit';
import ModalConfirm from '@/@core/components/modal/modal-confirm';

const XadminOfficesTable = () => {
    const [offices, setOffices] = useState(dataTable);
    const [office, setOffice] = useState({})
    const [openModal, setOpenModal ] = useState(false);
    const [openModalConfirm, setOpenModalConfirm ] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data office Berhasil Diupdate
        </Message>
    );
    const showOffice = (item:any) => {
        setOffice(item)
        setOpenModal(true);
    }
    const deleteApplicant = (id:string) => {
        setSelectedId(id)
        setOpenModalConfirm(true)
    }
    const confirmDelete = async () => {
        const response = await axiosInstance.delete(`/api/offices/${selectedId}`);
        const { data } = response.data
        setOffices(data)
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    const updateSuccess = () => {
        setOpenModal(false);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
        getData()
    }
    const getData = async () => {
        const response = await axiosInstance.get(`/api/offices`);
        const { data } = response.data
        setOffices(data)
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>No. Telepon</th>
                        <th>Fax</th>
                        <th>Email</th>
                        <th className='text-center'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {offices.map((item:any,index:number) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phones.length > 0 ? item.phones.join(", ") : ''}</td>
                        <td>{item.faxs.length > 0 ? item.faxs.join(", ") : ''}</td>
                        <td>{item.email}</td>
                        <td className='text-center'>
                        <div className='flex justify-center items-center gap-[4px]'>
                            <a className='btn-action cursor-pointer' onClick={_ => showOffice(item)}><PencilOutlineIcon /></a>
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
            <ModalEditOffices
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                dataObj={office}
                setDataObj={setOffice}
                onSuccess={updateSuccess}
            />
        </>
    )
}

export default XadminOfficesTable

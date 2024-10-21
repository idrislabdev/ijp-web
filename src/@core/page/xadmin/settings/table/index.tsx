"use client";

import React, { useState } from 'react'
import dataTable from "@/app/data/settings.json"
import { EyeOutlineIcon, PencilOutlineIcon, TrashOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import { Message, useToaster } from 'rsuite';
// import ModalApplicant from '../modal-applicant';
import ModalConfirm from '@/@core/components/modal/modal-confirm';
import ModalEditSetting from '../modal-edit';

const XadminSettingsTable = () => {
    const [settings, setSettings] = useState(dataTable);
    const [setting, setSetting] = useState({})
    const [openModal, setOpenModal ] = useState(false);
    const [openModalConfirm, setOpenModalConfirm ] = useState(false);
    const [selectedId, setSelectedId] = useState('');

    const toaster = useToaster();

    const message = (
        <Message showIcon type={'info'}>
          Data Setting Berhasil Diupdate
        </Message>
    );
    const showSetting = (item:any) => {
        setSetting(item)
        setOpenModal(true);
    }
    const deleteApplicant = (id:string) => {
        setSelectedId(id)
        setOpenModalConfirm(true)
    }
    const confirmDelete = async () => {
        const response = await axiosInstance.delete(`/api/settings/${selectedId}`);
        const { data } = response.data
        setSettings(data)
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    const updateSuccess = () => {
        setSettings(dataTable)
        setOpenModal(false);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Nilai</th>
                        <th className='text-center'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {settings.map((item:any,index:number) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td className='text-center'>
                        <div className='flex justify-center items-center gap-[4px]'>
                            <a className='btn-action cursor-pointer' onClick={_ => showSetting(item)}><PencilOutlineIcon /></a>
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
            <ModalEditSetting
                isModalOpen={openModal} 
                setIsModalOpen={setOpenModal} 
                dataObj={setting}
                setDataObj={setSetting}
                onSuccess={updateSuccess}
            />
        </>
    )
}

export default XadminSettingsTable

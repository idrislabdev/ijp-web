import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Modal } from 'rsuite'

const ModalApplicant = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        applicant:any
    }) => {
    const { isModalOpen, setIsModalOpen, applicant } = props
    const downloadCV = async () => {
        const resp = await axiosInstance.get(`/api/applicants/download-cv/${applicant.id}`, {responseType: 'blob'} );

        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `cv_${applicant.name}.pdf`);
        document.body.appendChild(link);
        link.click();
    }
    return (
        <Modal size="xs" backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Detail Data Pelamar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Nama</label>
                        <span className='text-sm'>: {applicant.name}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Lowongan</label>
                        <span className='text-sm'>: {applicant.job_name}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Posisi</label>
                        <span className='text-sm'>: {applicant.job_position}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Lokasi</label>
                        <span className='text-sm'>: {applicant.job_location}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Phone</label>
                        <span className='text-sm'>: {applicant.phone}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Email</label>
                        <span className='text-sm'>: {applicant.email}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Alamat</label>
                        <span className='text-sm'>: {applicant.address}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Kota</label>
                        <span className='text-sm'>: {applicant.city}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Provinsi</label>
                        <span className='text-sm'>: {applicant.province}</span>
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Download CV</label>
                        <span className='text-sm'>: <a className='text-primary underline cursor-pointer' onClick={_ => downloadCV()}>Download</a></span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalApplicant

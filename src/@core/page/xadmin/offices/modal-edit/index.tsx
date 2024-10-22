import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Modal, TagInput } from 'rsuite'

const ModalEditOffices = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        dataObj:any,
        setDataObj: Dispatch<SetStateAction<any>>,
        onSuccess: () => void
    }) => {
    const { isModalOpen, setIsModalOpen, dataObj, setDataObj, onSuccess} = props
    const udpateData = async () => {
        const body = dataObj
        const response = await axiosInstance.patch(`/api/offices`, body);
        const { data } = response.data
        onSuccess();
    }
    return (
        <Modal backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Edit Office</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Nama</label>
                        <input value={dataObj.name} className='base flex-1' onChange={e => setDataObj({...dataObj, name:e.target.value})} />
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Alamat</label>
                        <input value={dataObj.address} className='base flex-1' onChange={e => setDataObj({...dataObj, address:e.target.value})} />
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>No. Telepon</label>
                        <TagInput placeholder="Medium" style={{ flex: 1 }} defaultValue={dataObj.phones} onChange={(e:any) => setDataObj({...dataObj, phones:e})} />
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Fax</label>
                        <TagInput placeholder="Medium" style={{ flex: 1 }} defaultValue={dataObj.phones} onChange={(e:any) => setDataObj({...dataObj, faxs:e})} />
                    </div>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>Email</label>
                        <input value={dataObj.email} className='base flex-1' onChange={e => setDataObj({...dataObj, email:e.target.value})} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn w-full' onClick={_ => udpateData()}>Simpan Perubahan</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalEditOffices

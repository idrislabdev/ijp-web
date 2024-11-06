import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Modal } from 'rsuite'

const ModalEditSetting = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        dataObj:any,
        setDataObj: Dispatch<SetStateAction<any>>,
        onSuccess: () => void
    }) => {
    const { isModalOpen, setIsModalOpen, dataObj, setDataObj, onSuccess} = props
    const udpateData = async () => {
        const body = dataObj
        const response = await axiosInstance.patch(`/api/settings`, body);
        const { data } = response.data
        onSuccess();
    }
    return (
        <Modal size="xs" backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Edit Pengaturan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[20px] text-neutral-700'>
                        <label className='w-[100px] text-sm'>{dataObj.text}</label>
                        <input value={dataObj.value} className='base flex-1' onChange={e => setDataObj({...dataObj, value:e.target.value})} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn w-full' onClick={_ => udpateData()}>Simpan Perubahan</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalEditSetting

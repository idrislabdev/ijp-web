import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Message, Modal, useToaster } from 'rsuite'

const ModalManageProduct = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        category:string
    }) => {
    const { isModalOpen, setIsModalOpen, category } = props
    const toaster = useToaster();
    const message = (
        <Message showIcon type={'info'}>
          Data Product Berhasil Ditambah
        </Message>
      );
    const setFile = async () => {
        let src:any = document.getElementById('file-upload-manage')
        let files = src.files[0]
        // setUrl(URL.createObjectURL(files))
        // setFileData(files)

        let payload = new FormData();
        payload.append("lang", "test product");
        payload.append("category", category);
        payload.append("file", files)

        const response = await axiosInstance.post("/api/products/ijp", payload);
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }
    return (
        <Modal size="lg" className='modal-full' backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Manage Product {category.toUpperCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex gap-[4px] w-[150px] h-[150px] border'>
                    <div className='flex flex-col justify-center text-center items-center gap-[4px] w-full'>
                        <input id={`file-upload-manage`} accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden'/>
                        <label htmlFor={`file-upload-manage`} className='text-neutral-700 text-base text-center cursor-pointer' onChange={setFile}>Tambah Foto</label>                   
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalManageProduct

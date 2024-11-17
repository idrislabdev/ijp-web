import { AddOutlineIcon } from '@/@core/my-icons';
import axiosInstance from '@/@core/utils/axios';
import moment from 'moment'
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { Message, Modal, useToaster } from 'rsuite'

const ModalManageProduct = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        category:string
    }) => {
    const { isModalOpen, setIsModalOpen, category } = props
    const [fileData, setFileData] = useState(null)
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [products, setProducts] = useState([])
    const toaster = useToaster();
    const message = (
        <Message showIcon type={'info'}>
          Data Product Berhasil Ditambah
        </Message>
      );
    const setFile = async () => {
        let src:any = document.getElementById('file-upload-manage')
        let files = src.files[0]
        setUrl(URL.createObjectURL(files))
        setFileData(files)
    }

    const clearImage = () => {
        setUrl("");
        setFileData(null);
        setName("");
    }

    const saveImage = async () => {
        let payload = new FormData();
        payload.append("lang", "test product");
        payload.append("category", category);

        if (fileData != null)
            payload.append("file", fileData);

        const response = await axiosInstance.post("/api/products/ijp", payload);
        clearImage();
        await getData();
        toaster.push(message, { placement:'bottomEnd', duration: 5000 })
    }

    const getData = useCallback(async () => {
        const response = await axiosInstance.get(`/api/products/ijp?category=${category}`);
        const { data } = response.data
        setProducts(data)
    }, [category]);

    useEffect(() => {
        if (isModalOpen) {
            getData()
        }
    }, [getData, isModalOpen])

    return (
        <Modal size="lg" className='modal-full' backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Manage Product {category.toUpperCase()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='flex flex-wrap gap-[8px]'>
                    {products.map((item:any,index:number) => (
                        <div className='flex gap-[4px] w-[200px] h-[200px] border' key={index}>
                            <Image src={item.url} className='w-full object-cover' alt={`${item.name}`} width={0} height={0} sizes='100%'/>
                        </div>
                    ))}
                    <div className='flex gap-[4px] w-[200px] h-[200px] border'>
                        {url === "" &&
                            <div className='flex flex-col justify-center text-center items-center gap-[4px] w-full'>
                                <input id={`file-upload-manage`} accept=".jpg, .jpeg,.png" type="file" name="file" className='hidden' onChange={setFile}/>
                                <label htmlFor={`file-upload-manage`} className='text-neutral-700 text-base text-center cursor-pointer with-icon flex items-center gap-[4px]'>
                                    <AddOutlineIcon /><span>Tambah Produk</span>    
                                </label>                   
                            </div>
                        }
                        {url !== "" &&
                            <div className='admin-card-wrapper'>
                                <div className='our-product-card'>
                                    <Image src={url} className='w-full' alt='unicol' width={0} height={0} sizes='100%'/>
                                    <div className='card-overlay'>
                                        <input value={name} onChange={e => setName(e.target.value)} className='name' placeholder='ketikkan keterangan'/>
                                        <div className='flex gap-[4px]'>
                                            <button className='btn btn-sm btn-danger' onClick={_ => clearImage()}>Batal</button>
                                            <button className='btn btn-sm btn-primary' onClick={_ => saveImage()}>Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ModalManageProduct

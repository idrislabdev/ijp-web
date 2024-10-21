import Modal from 'rsuite/Modal';
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'

const ModalConfirm = (props: {
        isModalOpen:boolean, 
        setIsModalOpen: Dispatch<SetStateAction<boolean>>, 
        content:string, 
        onConfirm: () => void
    }) => {
    const { isModalOpen, setIsModalOpen, content, onConfirm} = props  

    return (
        <Modal size="xs" dialogClassName="my-modal" backdropClassName="my-modal-backdrop" backdrop="static" keyboard={false} open={isModalOpen} onClose={_ => setIsModalOpen(false)}>
            <Modal.Header>
                <Modal.Title>Konfirmasi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{content}</p>
            </Modal.Body>
            <Modal.Footer>
                <div className='flex gap-2 justify-end'>
                    <button className='btn btn-outline-primary' onClick={_ => setIsModalOpen(false)}>Tidak</button>
                    <button className='btn btn-primary' onClick={onConfirm}>Ya, Hapus Saja</button>
                </div>
            </Modal.Footer>
      </Modal>
  )
}

export default ModalConfirm
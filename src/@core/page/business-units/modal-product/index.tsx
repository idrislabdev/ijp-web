import { AddOutlineIcon } from "@/@core/my-icons";
import axiosInstance from "@/@core/utils/axios";
import moment from "moment";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Message, Modal, useToaster } from "rsuite";
import "@/styles/components/cards.css";

const ModalProduct = (props: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: any;
  lang: string;
}) => {
  const { isModalOpen, setIsModalOpen, product, lang } = props;
  const [products, setProducts] = useState([]);

  return (
    <Modal
      size="lg"
      className="modal-product view"
      backdropClassName="my-modal-backdrop"
      backdrop="static"
      keyboard={true}
      open={isModalOpen}
      onClose={(_) => setIsModalOpen(false)}
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        {product && (
          <div className="flex gap-[10px] mb-[10px]">
            <Image
              src={product.image_url}
              className="our-product-img"
              alt="unicol"
              width={350}
              height={350}
            />
            <div className="flex flex-col gap-[10px] w-[50%]">
              <h2>{product[lang].name}</h2>
              <hr />
              <h5>{product[lang].description}</h5>
              <p>{product[lang].full_description_1}</p>
              <p>{product[lang].full_description_2}</p>
              <p>{product[lang].full_description_3}</p>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalProduct;

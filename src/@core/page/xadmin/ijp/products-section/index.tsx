"use client";

import {
  AddOutlineIcon,
  CheckSquareIcon,
  TrashOutlineIcon,
} from "@/@core/my-icons";
import axiosInstance from "@/@core/utils/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Message, Modal, useToaster } from "rsuite";
import ModalManageProduct from "./modal-manage-products";
import "@/styles/components/cards.css";

const XadminIJPProductsSection = (props: { objData: any }) => {
  const { objData } = props;
  const [lang, setLang] = useState("id");
  const [title, setTitle] = useState(objData[lang].title);
  const [description, setDescription] = useState(objData[lang].description);
  const [products, setProducts] = useState(objData.products);
  const [productsOthers, setProductsOthers] = useState(objData.products_others);
  const [category, setCategory] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalOther, setOpenModalOther] = useState(false);

  const [fileData, setFileData] = useState([]);
  const [fileDataOther, setFileDataOther] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedProductOther, setSelectedProductOther] = useState(0);

  const toaster = useToaster();

  const message = (
    <Message showIcon type={"info"}>
      Data Section Berhasil Diupdate
    </Message>
  );

  const saveUpdate = async () => {
    let payload = new FormData();
    payload.append("lang", lang);
    payload.append("title", title);
    payload.append("description", description);
    payload.append("products", JSON.stringify(products));
    payload.append("products_others", JSON.stringify(productsOthers));

    if (fileData.length > 0) {
      fileData.forEach((item: any) => {
        payload.append(`file_${item.id + 1}`, item.files);
      });
    }

    if (fileDataOther.length > 0) {
      fileDataOther.forEach((item: any) => {
        payload.append(`file_other_${item.id + 1}`, item.files);
      });
    }

    const response = await axiosInstance.post(
      "/api/business-units-ijp/our-products",
      payload
    );
    toaster.push(message, { placement: "bottomEnd", duration: 5000 });
  };

  const setFile = (index: number) => {
    let src: any = document.getElementById(`file-upload-${index + 1}`);
    let files = src.files[0];

    const temp = [...products];
    temp[index].image_url = URL.createObjectURL(files);

    let obj = {
      id: index,
      files: files,
    };

    const tempFile: any = [...fileData];
    const check = tempFile.findIndex((x: any) => x.id === index);
    if (check >= 0) {
      tempFile[check].files = files;
    } else {
      tempFile.push(obj);
    }
    setFileData(tempFile);

    // if (index === 0)
    //     setFileData1(files)

    // if (index === 1)
    //     setFileData2(files)

    // if (index === 2)
    //     setFileData3(files)

    // if (index === 3)
    //     setFileData4(files)
  };

  const setFileOther = (index: number) => {
    let src: any = document.getElementById(`file-upload-other-${index + 1}`);
    let files = src.files[0];

    const temp = [...productsOthers];
    temp[index].image_url = URL.createObjectURL(files);

    let obj = {
      id: index,
      files: files,
    };

    const tempFile: any = [...fileDataOther];
    const check = tempFile.findIndex((x: any) => x.id === index);
    if (check >= 0) {
      tempFile[check].files = files;
    } else {
      tempFile.push(obj);
    }
    setFileDataOther(tempFile);
  };

  const setProductsName = (val: any, index: number) => {
    const temp = [...products];
    temp[index].name = val;
    setProducts(temp);
  };

  const setProductsOtherName = (val: any, index: number) => {
    const temp = [...productsOthers];
    temp[index].name = val;
    setProductsOthers(temp);
  };

  const setProductsDescription = (val: any, index: number) => {
    const temp = [...products];
    temp[index][lang].description = val;
    setProducts(temp);
  };

  const setProductsOtherDescription = (val: any, index: number) => {
    const temp = [...productsOthers];
    temp[index].description = val;
    setProductsOthers(temp);
  };

  const setProductsFullDescription = (
    val: any,
    object: string,
    index: number
  ) => {
    const temp = [...products];
    temp[index][lang][object] = val;
    setProducts(temp);
  };

  const setProductsOtherFullDescription = (
    val: any,
    object: string,
    index: number
  ) => {
    const temp = [...productsOthers];
    temp[index][object] = val;
    setProductsOthers(temp);
  };

  const manageProduct = (index: number) => {
    setOpenModal(true);
    setSelectedProduct(index);
  };

  const manageProductOther = (index: number) => {
    setOpenModalOther(true);
    setSelectedProductOther(index);
  };

  const addKategori = () => {
    const temp = [...products];
    let newKategori = JSON.parse(JSON.stringify(temp[0]));
    newKategori[lang].name = "nama";
    newKategori[lang].description = "deskripsi";
    temp.push(newKategori);
    setProducts(temp);
  };

  const addKategoriOthers = () => {
    const temp = [...productsOthers];
    let newKategori = JSON.parse(JSON.stringify(temp[0]));
    newKategori.name = "nama";
    newKategori.description = "deskripsi";
    temp.push(newKategori);
    setProductsOthers(temp);
  };

  const deleteProduct = (index: number) => {
    const temp = [...products];
    temp.splice(index, 1);
    setProducts(temp);
  };

  const deleteProductOther = (index: number) => {
    const temp = [...productsOthers];
    temp.splice(index, 1);
    setProductsOthers(temp);
  };

  useEffect(() => {
    setTitle(objData[lang].title);
    setDescription(objData[lang].description);
    setProducts(objData.products);
    setProductsOthers(objData.products_others);
  }, [objData, lang]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="tab-default">
        <ul>
          <li className={`${lang === "id" ? "active" : ""}`}>
            <a onClick={(_) => setLang("id")}>Indonesia</a>
          </li>
          <li className={`${lang === "en" ? "active" : ""}`}>
            <a onClick={(_) => setLang("en")}>Inggris</a>
          </li>
        </ul>
      </div>
      <div className="admin-ijp-products-section">
        <div className="products-container">
          <div className="products-title">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description"
            />
          </div>
          <div className="products-detail-container">
            <h5 className="text-center text-[22px]/[34px] font-semibold">
              Produk internal
            </h5>
            <div className="products-subcontainer">
              {products.map((item: any, index: number) => (
                <div className="our-product-wrapper" key={index}>
                  <div className="our-product-card">
                    <Image
                      src={item.image_url}
                      className="our-product-img"
                      alt="unicol"
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                    <div className="card-overlay">
                      <input
                        value={item.name}
                        onChange={(e) => setProductsName(e.target.value, index)}
                        className="description"
                      />
                      <input
                        value={item[lang].description}
                        onChange={(e) =>
                          setProductsDescription(e.target.value, index)
                        }
                        className="description"
                      />
                      <div className="change-picture">
                        <input
                          id={`file-upload-${index + 1}`}
                          accept=".jpg, .jpeg,.png"
                          type="file"
                          name="file"
                          className="hidden"
                          onChange={(_) => setFile(index)}
                        />
                        <label htmlFor={`file-upload-${index + 1}`}>
                          Ganti Foto
                        </label>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={(_) => manageProduct(index)}
                        >
                          Deskripsi Full
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(_) => deleteProduct(index)}
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="our-product-wrapper">
                <div className="our-product-card h-[155px] flex flex-col justify-center items-center cursor-pointer">
                  <button
                    className="btn btn-link"
                    onClick={() => addKategori()}
                  >
                    <AddOutlineIcon />
                    Kategori Produk
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="products-detail-container">
            <h5 className="text-center text-[22px]/[34px] font-semibold">
              Produk Lainnya
            </h5>
            <div className="products-subcontainer">
              {productsOthers.map((item: any, index: number) => (
                <div className="our-product-wrapper" key={index}>
                  <div className="our-product-card">
                    <Image
                      src={item.image_url}
                      className="our-product-img"
                      alt="unicol"
                      width={0}
                      height={0}
                      sizes="100%"
                    />
                    <div className="card-overlay">
                      <input
                        value={item[lang].name}
                        onChange={(e) =>
                          setProductsOtherName(e.target.value, index)
                        }
                        className="description"
                      />
                      <input
                        value={item[lang].description}
                        onChange={(e) =>
                          setProductsOtherDescription(e.target.value, index)
                        }
                        className="description"
                      />
                      <div className="change-picture">
                        <input
                          id={`file-upload-other-${index + 1}`}
                          accept=".jpg, .jpeg,.png"
                          type="file"
                          name="file"
                          className="hidden"
                          onChange={(_) => setFileOther(index)}
                        />
                        <label htmlFor={`file-upload-other-${index + 1}`}>
                          Ganti Foto
                        </label>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={(_) => manageProductOther(index)}
                        >
                          Deskripsi Full
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={(_) => deleteProductOther(index)}
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="our-product-wrapper">
                <div className="our-product-card h-[155px] flex flex-col justify-center items-center cursor-pointer">
                  <button
                    className="btn btn-link"
                    onClick={() => addKategoriOthers()}
                  >
                    <AddOutlineIcon />
                    Kategori Produk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary w-full" onClick={saveUpdate}>
        Simpan Perubahan
      </button>
      <Modal
        size="lg"
        className="modal-product"
        backdropClassName="my-modal-backdrop"
        backdrop="static"
        keyboard={false}
        open={openModal}
        onClose={(_) => setOpenModal(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="flex gap-[10px] mb-[10px]">
            <Image
              src={products[selectedProduct].image_url}
              className="our-product-img"
              alt="unicol"
              width={350}
              height={350}
            />
            <div className="flex flex-col gap-[10px] w-[50%]">
              <input
                value={products[selectedProduct].name}
                onChange={(e) =>
                  setProductsName(e.target.value, selectedProduct)
                }
                className="base"
              />
              <input
                value={products[selectedProduct][lang].description}
                onChange={(e) =>
                  setProductsDescription(e.target.value, selectedProduct)
                }
                className="base"
              />
              <textarea
                value={products[selectedProduct][lang].full_description_1}
                onChange={(e) =>
                  setProductsFullDescription(
                    e.target.value,
                    "full_description_1",
                    selectedProduct
                  )
                }
                className="base !h-[80px]"
              />
              <textarea
                value={products[selectedProduct][lang].full_description_2}
                onChange={(e) =>
                  setProductsFullDescription(
                    e.target.value,
                    "full_description_2",
                    selectedProduct
                  )
                }
                className="base !h-[80px]"
              />
              <textarea
                value={products[selectedProduct][lang].full_description_3}
                onChange={(e) =>
                  setProductsFullDescription(
                    e.target.value,
                    "full_description_3",
                    selectedProduct
                  )
                }
                className="base !h-[80px]"
              />
            </div>
          </div>
          <button
            className="btn btn-primary w-full"
            onClick={() => setOpenModal(false)}
          >
            SIMPAN
          </button>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        className="modal-product"
        backdropClassName="my-modal-backdrop"
        backdrop="static"
        keyboard={false}
        open={openModalOther}
        onClose={(_) => setOpenModalOther(false)}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="flex gap-[10px] mb-[10px]">
            <Image
              src={productsOthers[selectedProductOther].image_url}
              className="our-product-img"
              alt="unicol"
              width={350}
              height={350}
            />
            <div className="flex flex-col gap-[10px] w-[50%]">
              <input
                value={productsOthers[selectedProductOther].name}
                onChange={(e) =>
                  setProductsOtherName(e.target.value, selectedProductOther)
                }
                className="base"
              />
              <input
                value={productsOthers[selectedProductOther].description}
                onChange={(e) =>
                  setProductsOtherDescription(
                    e.target.value,
                    selectedProductOther
                  )
                }
                className="base"
              />
              <textarea
                value={productsOthers[selectedProductOther].full_description_1}
                onChange={(e) =>
                  setProductsOtherFullDescription(
                    e.target.value,
                    "full_description_1",
                    selectedProductOther
                  )
                }
                className="base !h-[80px]"
              />
              <textarea
                value={productsOthers[selectedProductOther].full_description_2}
                onChange={(e) =>
                  setProductsOtherFullDescription(
                    e.target.value,
                    "full_description_2",
                    selectedProductOther
                  )
                }
                className="base !h-[80px]"
              />
              <textarea
                value={productsOthers[selectedProductOther].full_description_3}
                onChange={(e) =>
                  setProductsOtherFullDescription(
                    e.target.value,
                    "full_description_3",
                    selectedProductOther
                  )
                }
                className="base !h-[80px]"
              />
            </div>
          </div>
          <button
            className="btn btn-primary w-full"
            onClick={() => setOpenModalOther(false)}
          >
            SIMPAN
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default XadminIJPProductsSection;

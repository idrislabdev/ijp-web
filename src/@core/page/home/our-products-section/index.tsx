"use client";

import axiosInstance from "@/@core/utils/axios";
import Image from "next/image";
import React from "react";

const HomeOurProductsSection = (props: { objLang: any; lang: string }) => {
  const { objLang, lang } = props;
  const downloadCatalog = async () => {
    const resp = await axiosInstance.get(`/catalogs/products-catalog.pdf`, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([resp.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `katalog.pdf`);
    document.body.appendChild(link);
    link.click();
  };
  return (
    <section className="home-our-products-section">
      <div className="our-products-container">
        <div className="our-products-title">
          <h1>{objLang[lang].title}</h1>
          <p>{objLang[lang].subtitle}</p>
          <a onClick={downloadCatalog}>{objLang[lang].button_text}</a>
        </div>
        <div className="our-products-subcontainer">
          <div className="our-product-wrapper">
            <div className="our-product-card">
              <Image
                src="/images/our-products/unicol.jpg"
                className="our-product-img"
                alt="unicol"
                width={330}
                height={330}
              />
              <div className="card-overlay">
                <h6>unicol</h6>
                <label>{objLang[lang].unicol}</label>
              </div>
            </div>
          </div>
          <div className="our-product-wrapper">
            <div className="our-product-card">
              <Image
                src="/images/our-products/sosweet-1.jpg"
                className="our-product-img"
                alt="unicol"
                width={330}
                height={330}
              />
              <div className="card-overlay">
                <h6>sosweet</h6>
                <label>{objLang[lang].sosweet}</label>
              </div>
            </div>
          </div>
          <div className="our-product-wrapper">
            <div className="our-product-card">
              <Image
                src="/images/our-products/uniwhite.png"
                className="our-product-img"
                alt="unicol"
                width={330}
                height={330}
              />
              <div className="card-overlay">
                <h6>uniwhite</h6>
                <label>{objLang[lang].uniwhite}</label>
              </div>
            </div>
          </div>
          <div className="our-product-wrapper">
            <div className="our-product-card">
              <Image
                src="/images/our-products/chemicals.jpg"
                className="our-product-img"
                alt="unicol"
                width={330}
                height={330}
              />
              <div className="card-overlay">
                <h6>other chemicals</h6>
                <label>{objLang[lang].other_chemicals}</label>
              </div>
            </div>
          </div>
          <div className="our-product-wrapper">
            <div className="our-product-card">
              <Image
                src="/images/our-products/inaglove-1.jpg"
                className="our-product-img"
                alt="unicol"
                width={330}
                height={330}
              />
              <div className="card-overlay">
                <h6>inaglove</h6>
                <label>{objLang[lang].inaglove}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurProductsSection;

import React from "react";
import "@/styles/components/footer.css";
import Image from "next/image";
import offices from "@/app/data/offices.json";

const Footer = (props: { lang: string }) => {
  const { lang } = props;
  return (
    <div className="footer sm:mobile-responsive">
      <div className="footer-primary">
        <div className="footer-main-info">
          <div className="image-logo-container">
            <Image
              src="/images/logoes/logo-new-ijp.png"
              alt="logo unicorp"
              width={128}
              height={36}
            />
          </div>
          <div className="main-address-container">
            <h5>{lang === "en" ? "Head Office" : "Kantor Pusat"}</h5>
            <p>{offices.find((x) => x.type == "main")?.address}</p>
            <p>
              {lang === "en" ? "No. Telp" : "No. Telp"}:
              <span>
                {offices.find((x) => x.type == "main")?.phones.join(", ")}
              </span>
            </p>
          </div>
          <div className="registered-by-container">
            <h5>
              {lang === "en"
                ? "Registered and Certified By"
                : "Terdaftar Dan Tersertifikasi Oleh"}
              :
            </h5>
            <div className="certifieds-subcontainer">
              <Image
                src="/images/institutions/halal-mui.png"
                className="logo-halal"
                alt="halal mui"
                width={0}
                height={0}
                sizes="100%"
              />
              <Image
                src="/images/institutions/bpom.png"
                className="logo-bpom"
                alt="mui"
                width={0}
                height={0}
                sizes="100%"
              />
            </div>
            <div className="certifieds-subcontainer">
              <Image
                src="/images/institutions/logo-iso.png"
                className="logo-iso"
                alt="iso bspji"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
        <div className="footer-address">
          {offices
            .filter((x) => x.type === "branch")
            .map((item: any, index: number) => (
              <div className="address-container" key={index}>
                <h5>{lang === "en" ? item.name_en : item.name}</h5>
                <div className="address-subcontainer">
                  <div className="detail-adress">
                    <h6>{lang === "en" ? "Address" : "Alamat"}:</h6>
                    <p>{item.address}</p>
                  </div>
                  <div className="detail-adress">
                    <h6>{lang === "en" ? "No. Telp" : "No. Telp"}:</h6>
                    {item.phones.map((phone: any, index2: number) => (
                      <p key={index2}>{phone}</p>
                    ))}
                  </div>
                  {item.faxs.length > 0 && (
                    <div className="detail-adress">
                      <h6>{lang === "en" ? "Fax Number" : "No. Fax"}:</h6>
                      {item.faxs.map((fax: any, index3: number) => (
                        <p key={index3}>{fax}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 - 2025 Indo Jaya Putra All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

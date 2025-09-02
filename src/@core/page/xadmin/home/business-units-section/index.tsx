"use client";

import axiosInstance from "@/@core/utils/axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Message, useToaster } from "rsuite";

const XadminBusinessUnitsSection = (props: { objData: any }) => {
  const { objData } = props;
  const [lang, setLang] = useState("id");
  const [title, setTitle] = useState(objData[lang].title);
  const [subtitle, setSubTitle] = useState(objData[lang].subtitle);
  const [units, setUnits] = useState(objData[lang].units);
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
    payload.append("subtitle", subtitle);
    payload.append("units", JSON.stringify(units));

    const response = await axiosInstance.post(
      "/api/home/business-units",
      payload
    );
    toaster.push(message, { placement: "bottomEnd", duration: 5000 });
  };

  useEffect(() => {
    setTitle(objData[lang].title);
    setSubTitle(objData[lang].subtitle);
    setUnits(objData[lang].units);
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
      <div className="admin-home-business-unit-section">
        <div className="business-unit-container">
          <div className="title-subcontainer w-full">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-center bg-transparent !text-white !w-full"
            />
            <textarea
              value={subtitle}
              onChange={(e) => setSubTitle(e.target.value)}
              className="text-center bg-transparent !text-white !w-full max-h-[100px] min-h-[100px]"
            />
          </div>
          <div className="business-unit-subcontainer">
            <div className="business-unit">
              <label>IJP</label>
              <div className="business-unit-desc w-full">
                <h5>INDO JAYA PUTRA</h5>
                <textarea
                  value={units[0].description}
                  onChange={(e) =>
                    setUnits([
                      ...units,
                      (units[0].description = e.target.value),
                    ])
                  }
                  className="text-center bg-transparent !text-white !w-full min-h-[130px] max-h-[130px]"
                />
              </div>
            </div>
            <div className="business-unit">
              <label>IJSA</label>
              <div className="business-unit-desc w-full">
                <h5>INDO JAYA SUKSES ABADI</h5>
                <textarea
                  value={units[1].description}
                  onChange={(e) =>
                    setUnits([
                      ...units,
                      (units[1].description = e.target.value),
                    ])
                  }
                  className="text-center bg-transparent !text-white !w-full min-h-[130px] max-h-[130px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-full btn btn-primary" onClick={saveUpdate}>
        Simpan Perubahan
      </button>
    </div>
  );
};

export default XadminBusinessUnitsSection;

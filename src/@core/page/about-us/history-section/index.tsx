import { TargetIcon } from '@/@core/my-icons'
import Image from 'next/image'
import React from 'react'

const AboutUsHistorySection = () => {
  return (
    <section className='about-us-history-section'>
        <div className='history-container'>
            <div className='title-container'>
                <h1>Sejarah UNICORP</h1>
                <p>
                    UNICORP dimulai dengan CV. INDO JAYA PUTRA (perdagangan bahan kimia makanan) yang didirikan pada tahun 2001, 
                    kemudian diikuti oleh CV. INDO JAYA SUKSES ABADI (pembuatan sarung tangan plastik) pada tahun 2018.
                </p>
            </div>
            <ul>
                <li>
                    <div className='icon-step'>
                        <TargetIcon />
                        <span>Tahun 2001</span>
                    </div>
                    <div className='desc-step'>
                        <h5>IJP (INDO JAYA PUTRA) Didirikan</h5>
                        <p>Awal mula perusahaan pertama adalah CV. INDO JAYA PUTRA (importir, distributor, produsen bahan kimia khususnya di industri makanan) yang berdiri pada tahun 2001.</p>
                    </div>
                </li>
                <li>
                    <div className='icon-step'>
                        <TargetIcon />
                        <span>Tahun 2018</span>
                    </div>
                    <div className='desc-step'>
                        <h5>IJSA (INDO JAYA SUKSES ABADI) Didirikan</h5>
                        <p>Kemudian disusul CV. Indo Jaya Sukes Abadi (produsen sarung tangan plastik) yang berdiri pada tahun 2018.</p>
                    </div>
                </li>
                <li>
                    <div className='icon-step'>
                        <TargetIcon />
                        <span>Tahun 2020</span>
                    </div>
                    <div className='desc-step'>
                        <h5>UNICORP Didirikan</h5>
                        <p>Dengan inovasi terbaru, Unicorp didirikan untuk membentuk grup bisnis yang terintegrasi dan mendukung semua perusahan cabang untuk berkembang lebih cepat.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default AboutUsHistorySection

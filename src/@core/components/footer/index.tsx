import React from 'react'
import '@/styles/components/footer.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='footer sm:mobile-responsive'>
        <div className='footer-primary'>
            <div className='footer-main-info'>
                <div className='image-logo-container'>
                    <Image src='/images/logoes/logo-unicorp-big.png' alt='logo unicorp' width={128} height={36}/>
                </div>
                <div className='main-address-container'>
                    <h5>CV Indo Jaya Putra</h5>
                    <p>Jl. Raya Sukolilo Mulia 76, Surabaya, Jawa Timur, Indonesia</p>
                    <p>No. Telp <span>+62 31 599 7100</span></p>
                </div>
                <div className='registered-by-container'>
                    <h5>Terdaftar Dan Tersertifikasi Oleh</h5>
                    <div className='certifieds-subcontainer'>
                        <Image src='/images/institutions/halal-mui.png' className='logo-halal' alt='halal mui' width={320} height={320}/>
                        <Image src='/images/institutions/bpom.png' className='logo-bpom' alt='mui' width={320} height={279}/>
                    </div>
                </div>
            </div>
            <div className='footer-address'>
                <div className='address-container'>
                    <h5>Pabrik &amp; Gudang</h5>
                    <div className='address-subcontainer'>
                        <div className='detail-adress'>
                            <h6>Alamat:</h6>
                            <p>Kepatihan Industri I no. 5 Desa Kepatihan Kec. Menganti Gresik 61174 Indonesia</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>No. Telp:</h6>
                            <p>+62 31 799 5982</p>
                            <p>+62 887 7938 837</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>Fax:</h6>
                            <p>+62 31 799 5982</p>
                        </div>
                    </div>
                </div>
                <div className='address-container'>
                    <h5>Kantor Cabang (Semarang)</h5>
                    <div className='address-subcontainer'>
                        <div className='detail-adress'>
                            <h6>Alamat:</h6>
                            <p>Kawasan Pergudangan Industri Candi Jl. Gatot Subroto X No. 1, Semarang 50181, Indonesia</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>No. Telp:</h6>
                            <p>+62 24 762 7376</p>
                            <p>+62 888 0247 3314</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>Fax:</h6>
                            <p>+62 24 762 7376</p>
                        </div>
                    </div>
                </div>
                <div className='address-container'>
                    <h5>Kantor Cabang (Jakarta)</h5>
                    <div className='address-subcontainer'>
                        <div className='detail-adress'>
                            <h6>Alamat:</h6>
                            <p>Pergudangan Kosambi Permai Blok JJ No. 25, Jl. Raya Prancis Kosambi - Dadap, Tangerang 15212, Indonesia</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>No. Telp:</h6>
                            <p>+62 21 2903 1478</p>
                            <p>+62 888 0973 0435</p>
                        </div>
                        <div className='detail-adress'>
                            <h6>Fax:</h6>
                            <p>+62 21 2903 1478</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>© 2021 - 2024 Indo Jaya Putra All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

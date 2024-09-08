import Image from 'next/image'
import React from 'react'

const BusinessUnitsProfileSection = () => {
  return (
    <section className='business-units-profile-section'>
        <div className='profile-container'>
            <div className='image-subcontainer'>
                <div className='top-subcontainer'>
                    <Image src='/images/galleries/gallery-1.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                </div>
                <div className='middle-subcontainer'>
                    <div className='experience-subcontainer'>
                        <label>20+</label>
                        <span>Tahun Pengalaman</span>
                    </div>
                </div>
                <div className='bottom-subcontainer'>
                    <div className='bottom-sub-image'>
                        <Image src='/images/galleries/gallery-2.jpeg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                    <div className='bottom-sub-image'>
                        <Image src='/images/galleries/gallery-6.jpg' alt='bapak sugik' width="0" height="0" sizes="100%" />
                    </div>
                </div>
            </div>
            <div className='desc-subcontainer'>
                <div className='desc-title'>
                    <h1>Profil Unit Bisnis (IJP)</h1>
                </div>
                <div className='desc-content'>
                    <p>
                        IJP dirikan di Surabaya tahun 2001, CV. INDO JAYA PUTRA, yang lebih dikenal sebagai IJP adalah 
                        perusahaan perdagangan bahan kimia makanan. Awalnya, IJP menjual pewarna makanan. 
                        Kemudian, seiring dengan berkembangnya waktu, Bapak Sugijanto, sebagai pemilik usaha memiliki ide untuk membuat pabrik 
                        pencampuran warna yang diberi nama UNICOL. Sebagai spesialis pencampuran warna, kami dapat memenuhi spesifikasi dan 
                        kuantiti sesuai kebutuhan pelanggan. IJP adalah perusahaan yang berorientasi pada kepuasan pelanggan. 
                        Selain itu, kami juga menjual bahan kimia lainnya, seperti Sodium Bicarbonate, Capsicum, Cuka, dll., 
                        dari dalam dan luar negeri seperti China, India, Taiwan, Norwegia dan negara lainnya.
                    </p>
                    <p>
                        Dengan bekerjasama dengan perusahaan kecil hingga besar, kini kami telah menjual lebih banyak bahan kimia 
                        untuk mencakup wilayah yang lebih luas di Indonesia, dengan membuka cabang di Semarang untuk pemasaran area 
                        Indonesia bagian Tengah dan cabang di Jakarta untuk pemasaran area Indonesia bagian Barat. 
                        Kami menyediakan gudang yang didesain khusus untuk bahan kimia, 
                        armada pengiriman dan sistem database online untuk memastikan setiap pelanggan mendapatkan pesanannya tepat waktu.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BusinessUnitsProfileSection

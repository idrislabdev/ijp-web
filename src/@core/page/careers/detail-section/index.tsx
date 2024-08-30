import React from 'react'

const CareersDetailSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='careers-detail-section'>
            <div className='detail-container'>
                <div className='summary-card'>
                    <div className='content-prolog'>
                        <h5>Tentang Pekerjaan</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industries standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                    <div className='content-responsibility'>
                        <h5>Jobdesk</h5>
                        <ul>
                            <li>Melayani customer walk in di outlet</li>
                            <li>Menjual sesuai target yang telah ditentukan</li>
                            <li>Menawarkan dan memberikan informasi produk secara detail dan jelas</li>
                            <li>Mencari infomasi dan data calon customer, termasuk ke media sosial</li>
                            <li>Ikut Serta dalam Event /Aktifitas lainnya, untuk meningkatkan Penjualan (Pameran & Event)</li>
                            <li>Menjalankan proses administrasi di Dealer</li>
                        </ul>
                    </div>
                    <div className='content-qualification'>
                        <h5>Syarat / kualifikasi</h5>
                        <ul>
                            <li>Usia 18-35 tahun</li>
                            <li>Pendidikan minimal SMA/SLTA</li>
                            <li>Memiliki pengalaman di bidang penjualan minimal 1 tahun</li>
                            <li>Freshgrad dipersilahkan melamar</li>
                            <li>Memiliki motivasi kerja yang tinggi, orientasi pada target, disiplin, jujur dan bertanggung jawab</li>
                            <li>Memiliki kemampuan komunikasi dan negosiasi yang bagus</li>
                            <li>Dapat bekerja secara mandiri maupun dalam Team</li>
                            <li>Menguasai Komputer MS Office</li>
                            <li>Domisili di Area dealer Yamaha SIP terdekat
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='form-card'>
                    <h5>Lamar Pekerjaan Ini</h5>
                    <div className='form-area'>
                        <div className='form'>
                            <label>Nama Lengkap</label>
                            <input />
                        </div>
                        <div className='form'>
                            <label>Email</label>
                            <input />
                        </div>
                        <div className='form'>
                            <label>Nomor Telepon</label>
                            <input />
                        </div>
                        <div className='form'>
                            <label>Alamat</label>
                            <textarea />
                        </div>
                        <div className='form'>
                            <label>Kota</label>
                            <input />
                        </div>
                        <div className='form'>
                            <label>Provinsi</label>
                            <select>
                                <option value="Jawa Timur">Jawa Timur</option>
                                <option value="Jawa Tengah">Jawa Tengah</option>
                                <option value="Jawa Barat">Jawa Barat</option>
                                <option value="Jakarta">Jakarta</option>
                            </select>
                        </div>
                        <div className='form'>
                            <label>Upload CV</label>
                            <input type='file'/>
                        </div>
                    </div>
                    <button>Kirim Lamaran</button>
                </div>
            </div>
        </section>
    )
}

export default CareersDetailSection

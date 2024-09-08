import React from 'react'

const AboutUsAreaSection = () => {
  return (
    <section className='about-us-area-section'>
        <div className='area-container'>
            <div className='title-subcontainer'>
                <h1>Area Perdagangan </h1>
                <h2>UNICORP</h2>
                <p>UNICORP mempunyai area perdangangan di seluruh Indonesia</p>
            </div>
            <div className='area-subcontainer'>
                <div className='detail-subcontainer'>
                    <h5>SURABAYA</h5>
                    <p>Menghandle pemasaran untuk Indonesia bagian Timur</p>
                </div>
                <div className='detail-subcontainer'>
                    <h5>SEMARANG</h5>
                    <p>Menghandle pemasaran untuk Indonesia bagian Tengah</p>
                </div>
                <div className='detail-subcontainer'>
                    <h5>JAKARTA</h5>
                    <p>Menghandle pemasaran untuk Indonesia bagian Barat</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUsAreaSection

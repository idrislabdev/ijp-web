import React from 'react'

const HomeBusinessUnitSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-business-unit-section'>
            <div className='business-unit-container'>
                <div className='title-subcontainer'>
                    <h1>Unit Bisnis UNICORP</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed imperdiet libero id nisi euismod, sed porta est consectetur. Sed imperdiet libero id nisi euismod
                    </p>
                </div>
                <div className='business-unit-subcontainer'>
                    <div className='business-unit'>
                        <label>IJP</label>
                        <div className='business-unit-desc'>
                            <h5>INDO JAYA PUTRA</h5>
                            <p>
                                IJP (INDO JAYA PUTRA) adalah sebuah perusahaan yang bergerak 
                                di bidang perdagangan bahan kimia, berdiri pada tahun 2001.
                            </p>
                        </div>
                    </div>
                    <div className='business-unit'>
                        <label>IJSA</label>
                        <div className='business-unit-desc'>
                            <h5>INDO JAYA SUKSES ABADI</h5>
                            <p>
                                IJSA (INDO JAYA SUKSES ABADI) adalah pabrik 
                                sarung tangan plastik (HDPE) yang berdiri pada tahun 2018.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HomeBusinessUnitSection

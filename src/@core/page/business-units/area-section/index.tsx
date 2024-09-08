import React from 'react'

const BusinessUnitsAreaSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='business-units-area-section'>
            <div className='area-container'>
                <div className='title-subcontainer'>
                    <h1>Area Pemasaran</h1>
                    <h2>INAGLOVE</h2>
                    <p>Area pemasaran ijsa / product inaglove meliputi seluruh Indonesia</p>
                </div>
            </div>
        </section>
  )
}

export default BusinessUnitsAreaSection

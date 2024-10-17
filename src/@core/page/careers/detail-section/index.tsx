import React from 'react'
import dataJobs from "@/app/data/jobs.json"
import axiosInstance from '@/@core/utils/axios'
import CareersDetailSectionForm from './form'

const CareersDetailSection = (props: {objLang:any, params:any}) => {
    const { objLang, params } = props
    const job:any = dataJobs.find((x) => x.id === params.id)

    return (
        <section className='careers-detail-section'>
            <div className='detail-container'>
                <div className='summary-card'>
                    <div className='content-prolog'>
                        <h5>Tentang Pekerjaan</h5>
                        <p>
                            {job.description}
                        </p>
                    </div>
                    <div className='content-responsibility'>
                        <h5>Jobdesk</h5>
                        <ul>
                            {job.jobdescs.map((item:any, index:number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='content-qualification'>
                        <h5>Syarat / kualifikasi</h5>
                        <ul>
                            {job.qualifications.map((item:any, index:number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <CareersDetailSectionForm job={job} />
            </div>
        </section>
    )
}

export default CareersDetailSection

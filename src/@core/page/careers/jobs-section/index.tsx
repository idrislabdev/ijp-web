"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import initiateJob from "@/app/data/jobs.json"
import offices from "@/app/data/offices.json"

const CareersJobsSection = (props: {lang:string, objLang: any}) => {
    const { lang, objLang } = props
    const jobs = initiateJob.filter((x:any) => x.status === 'Open');
    const [dataJobs, setDataJobs] = useState(jobs)
    const [selectPosition, setSelectPosition] = useState('Semua')
    const handleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | any) => {
        setSelectPosition(e.target.value)
        if (e.target.value === 'Semua') {
            setDataJobs(jobs)
        } else {
            setDataJobs(jobs.filter((x:any) => x.location === e.target.value))
        }
    }
    return (
        <section className='careers-jobs-section'>
            <div className='background-container'>
                <h5>{objLang[lang].title}</h5>
            </div>
            <div className='select-container'>
                <div className='card-select'>
                    <label>{objLang[lang].label}</label>
                    <select onChange={handleChange} value={selectPosition}>
                        <option value={'Semua'}>Semua</option>
                        {offices.map((item:any, index:number) => (
                            <option value={item.name} key={index}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='jobs-container'>
                {dataJobs.map((item:any, index:number) => (
                    <Link className='card-jobs' key={index} href={`/${lang}/careers/${item.id}`}>
                        <div className='card-body'>
                            <h5>{item.name}</h5>
                            <p>{item.location}</p>
                        </div>
                    </Link>
                ))

                }
            </div>
        </section>
  )
}

export default CareersJobsSection

import Link from 'next/link'
import React from 'react'

const CareersJobsSection = (props: {lang:string, objLang: any}) => {
    const { lang, objLang } = props
    const jobs = [
        { id: 1, name: 'Staff Accounting', place: 'Kantor Pusat' },
        { id: 2, name: 'Staff Accounting', place: 'Kantor Cabang Semarang' },
        { id: 3, name: 'Manager Area', place: 'Kantor Cabang Semarang' },
        { id: 4, name: 'Staf Administrasi', place: 'Kantor Cabang Jakarta' },
        { id: 5, name: 'Admin Gudang', place: 'Pabrik dan Gudang' },
        { id: 6, name: 'Admin Sales', place: 'Kantor Pusat' },
        { id: 7, name: 'Staff IT', place: 'Kantor Pusat' },
        { id: 8, name: 'Manager Keuangan', place: 'Kantor Pusat' },
    ]
    return (
        <section className='careers-jobs-section'>
            <div className='background-container'>
                <h5>Available Jobs</h5>
            </div>
            <div className='select-container'>
                <div className='card-select'>
                    <label>Lokasi Pekerjaan</label>
                    <select>
                        <option value="Kantor Pusat">Kantor Pusat</option>
                        <option value="Kantor Cabang (Semarang)">Kantor Cabang (Semarang)</option>
                        <option value="Kantor Cabang (Jakarta)">Kantor Cabang (Jakarta)</option>
                        <option value="Pabrik dan Gudang">Pabrik dan Gudang</option>
                    </select>
                </div>
            </div>
            <div className='jobs-container'>
                {jobs.map((item:{id:number, name: string, place:string}, index:number) => (
                    <Link className='card-jobs' key={index} href={`/${lang}/careers/detail-job`}>
                        <div className='card-body'>
                            <h5>{item.name}</h5>
                            <p>{item.place}</p>
                        </div>
                    </Link>
                ))

                }
            </div>
        </section>
  )
}

export default CareersJobsSection

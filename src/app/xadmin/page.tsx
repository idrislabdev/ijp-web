import React from 'react'
import MainSidebar from '@/@core/components/main-sidebar'
import '@/styles/xadmin.css'
import '@/styles/components/main-sidebar.css'

export default async function  XadminPage() {
  return (
    <main className='xadmin-page'>
      <MainSidebar />
      <section className='xadmin-section'>
        <div className='main-container'>
        
        </div>
      </section>
    </main>
  )
}


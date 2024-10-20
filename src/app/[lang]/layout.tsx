import MainHeader from '@/@core/components/main-header'
import React from 'react'
import '@/styles/components/main-header.css'
import Footer from '@/@core/components/footer'

const MainLayout = ({ children, params }: {children : React.ReactNode, params: any}) => {
    return (
        <>
            <MainHeader lang={params.lang}/>
            { children }
            <Footer />
        </>
    )
  }
  
  export default MainLayout

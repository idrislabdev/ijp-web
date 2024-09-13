import MainHeader from '@/@core/components/main-header'
import React from 'react'
import '@/styles/xadmin.css'
import '@/styles/components/main-sidebar.css'
import '@/styles/components/table.css'

const AdminLayout = ({ children, params }: {children : React.ReactNode, params: any}) => {
    return (
        <>
            { children }
        </>
    )
  }
  
  export default AdminLayout

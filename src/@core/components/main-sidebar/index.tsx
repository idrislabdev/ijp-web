import { AboutOutlineIcon, ArchieveOutlineIcon, BuildingOutlineIcon, UserListOutlineIcon, HomeIcon, HomeOutlineIcon, LogoutOutlineIcon, NewsOutlineIcon, OfficeOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon, UserOutlineIcon } from '@/@core/my-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSidebar = () => {
  return (
    <div className='main-sidebar'>
        <div className='header-area'>
            <div className='header-info'>
                <Image src='/images/logoes/dummy-logo.png' alt='logo unicorp' width={0} height={0} sizes='100%'/>
                <div className='info-detail'>
                    <label>IndoJaya Group</label>
                    <span>Company</span>
                </div>
            </div>
        </div>
        <div className='menu-area'>
            <span className='label'>Setting Halaman</span>
            <div className='list-menu'>
                <ul>
                    <li><Link href='/xadmin/home'><HomeOutlineIcon />Home</Link></li>
                    <li><Link href='/xadmin/about-us'><AboutOutlineIcon />Tentang Kami</Link></li>
                    <li><Link href='/xadmin/business-unit'><BuildingOutlineIcon />Unit Bisnis (IJP)</Link></li>
                    <li><Link href='/xadmin/business-unit'><BuildingOutlineIcon />Produk (IJP)</Link></li>
                    <li><Link href='/xadmin/business-unit'><BuildingOutlineIcon />Unit Bisnis (IJSA)</Link></li>
                    <li><Link href='/xadmin/news'><NewsOutlineIcon />News</Link></li>
                    <li><Link href='/xadmin/career'><ArchieveOutlineIcon />Karir</Link></li>
                    <li><Link href='/xadmin/contact-us'><PhoneOutlineIcon />Kontak Kami</Link></li>
                </ul>
            </div>
            <hr />
            <span className='label'>setting</span>
            <div className='list-menu'>
                <ul>
                    <li><Link href='/xadmin/home'><UserListOutlineIcon />Daftar User Admin</Link></li>
                    <li><Link href='/xadmin/home'><OfficeOutlineIcon />Kantor Cabang</Link></li>
                    <li><Link href='/xadmin/home'><SettingOutlineIcon />General</Link></li>
                    <li><Link href='/xadmin/home'><UserOutlineIcon />My User</Link></li>
                    <li><a href='#'><LogoutOutlineIcon />Logout</a></li>
                </ul>
            </div>
        </div>
        <div className='info-area'>
            <div className='user-info'>
                <Image src='/images/logoes/dummy-logo.png' alt='logo unicorp' width={0} height={0} sizes='100%'/>
                <div className='info-detail'>
                    <label>John Wilson</label>
                    <span>jonwilsdon.ijp@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSidebar

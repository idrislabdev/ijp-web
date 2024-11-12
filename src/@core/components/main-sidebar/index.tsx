"use client"

import { AboutOutlineIcon, ArchieveOutlineIcon, BuildingOutlineIcon, UserListOutlineIcon, HomeIcon, HomeOutlineIcon, LogoutOutlineIcon, NewsOutlineIcon, OfficeOutlineIcon, PhoneOutlineIcon, SettingOutlineIcon, UserOutlineIcon } from '@/@core/my-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import React from 'react'

const MainSidebar = () => {
  const pathname = usePathname ();
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
        </div>``
        <div className='menu-area'>
            <span className='label'>Setting Halaman</span>
            <div className='list-menu'>
                <ul>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'home' ? 'active' : ''}`}><Link href='/xadmin/home'><HomeOutlineIcon />Home</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'about-us'  ? 'active' : ''}`}><Link href='/xadmin/about-us'><AboutOutlineIcon />Tentang Kami</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'business-units-ijp'  ? 'active' : ''}`}><Link href='/xadmin/business-units-ijp'><BuildingOutlineIcon />Unit Bisnis (IJP)</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'business-units-ijsa'  ? 'active' : ''}`}><Link href='/xadmin/business-units-ijsa'><BuildingOutlineIcon />Unit Bisnis (IJSA)</Link></li>
                    {/* <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'news'  ? 'active' : ''}`}><Link href='/xadmin/news'><NewsOutlineIcon />News</Link></li> */}
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'careers'  ? 'active' : ''}`}><Link href='/xadmin/careers'><ArchieveOutlineIcon />Karir</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'contact-us'  ? 'active' : ''}`}><Link href='/xadmin/contact-us'><PhoneOutlineIcon />Kontak Kami</Link></li>
                </ul>
            </div>
            <hr />
            <span className='label'>data</span>
            <div className='list-menu'>
                <ul>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'users'  ? 'active' : ''}`}><Link href='/xadmin/users'><UserListOutlineIcon />User Admin</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'jobs'  ? 'active' : ''}`}><Link href='/xadmin/jobs'><UserListOutlineIcon />Jobs</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'applicants'  ? 'active' : ''}`}><Link href='/xadmin/applicants'><UserListOutlineIcon />Lamaran Masuk</Link></li>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'offices'  ? 'active' : ''}`}><Link href='/xadmin/offices'><OfficeOutlineIcon />Kantor &amp; Gudang</Link></li>
                    {/* <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'posting-news'  ? 'active' : ''}`}><Link href='/xadmin/posting-news'><UserListOutlineIcon />Posting Berita</Link></li> */}
                </ul>
            </div>
            <hr />
            <span className='label'>setting</span>
            <div className='list-menu'>
                <ul>
                    <li className={`${pathname.split("/")[1] === 'xadmin' && pathname.split("/")[2] == 'settings'  ? 'active' : ''}`}><Link href='/xadmin/settings'><SettingOutlineIcon />Pengaturan</Link></li>
                    <li><Link href='/xadmin/home'><UserOutlineIcon />My User</Link></li>
                    <li><Link href='/xadmin/logout'><LogoutOutlineIcon />Logout</Link></li>
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

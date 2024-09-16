"use client"
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { TimesIcon } from '@/@core/my-icons';
import Image from 'next/image';

const MainSidebarMenu = (props: { lang:string, show:boolean, setShow: Dispatch<SetStateAction<boolean>> }) => {
    const { lang, show, setShow } = props
    const router = useRouter();

    const toggleSubMenu = (id:string) => {
        const element = document.getElementById(id)
        const elementChevron = document.getElementById(id+'--chevron')

        if (element) {
            element.classList.toggle('!hidden')
        }
        if (elementChevron) {
            elementChevron.classList.toggle('transform');
            elementChevron.classList.toggle('rotate-180');
        }
    }

    const goToLink = (path:string) => {
        document.body.classList.remove('overflow-hidden')
        router.push(`/${lang}/${path}`)
    }

    const closeSidebar = () => {
        document.body.classList.remove('overflow-hidden')
        setShow(false)
    }

    const switchTheme = () => {
        var check = document.body.classList.contains('dark-theme')
        if (check) {
            localStorage.removeItem('mode');
        } else {
            localStorage.setItem('mode', 'dark-theme');
        }
        router.refresh();
        window.location.reload();
    }

    return (
        <>
            <div className={`main-sidebar-overlay ${!show ? '!hidden' : ''}`}></div>
            <div className={`main-sidebar-menu ${show ? 'show' : ''}`}>
                <div className='sidebar-menu-top'>
                    <div className='sidebar-header'>
                        <div className='sidebar-header-logo'>
                            <a onClick={_ => goToLink('')}>
                                <Image src='/images/logoes/logo-unicorp-big.png' alt='logo unicorp' width={128} height={36}/>
                            </a>
                        </div>
                        <div className='sidebar-header-action'>
                            <a onClick={_ => closeSidebar()}><TimesIcon color={'#838899'} /></a>
                        </div>
                    </div>
                    <div className='sidebar-list'>
                        <ul>
                        <li><a onClick={_ => goToLink('about-us')}>Tentang Kami</a></li>
                        <li>
                                <a className='flex justify-between items-center' onClick={_ => toggleSubMenu('submenu--emoney')}>
                                    <span>Unit Bisnis</span>
                                    <svg 
                                        id='submenu--emoney--chevron'
                                        className={`w-3 h-3`} 
                                        fill="none" strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        viewBox="0 0 24 24" 
                                        stroke="#000"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>
                                <ul id="submenu--emoney" className='sidebar-submenu !hidden'>
                                    <li><a onClick={_ => goToLink('business-units/ijp')}>IJP</a></li>
                                    <li><a onClick={_ => goToLink('staking')}>IJSA</a></li>
                                </ul>
                            </li>
                                <li><a onClick={_ => goToLink('news')}>News</a></li>
                                <li><a onClick={_ => goToLink('careers')}>Karir</a></li>
                                <li><a onClick={_ => goToLink('contact-us')}>Kontak Kami</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSidebarMenu

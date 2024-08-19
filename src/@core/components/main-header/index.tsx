"use client"

import { ChevronDownIcon, FacebookIcon, InstagramIcon, PhoneIcon, TwitterIcon } from '@/@core/my-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const MainHeader = (props: {lang:string}) => {
    const { lang } = props
    const [showFlags, setShowFlags] = useState(false);
    const pathname = usePathname()
    const router = useRouter();
    const switchLang = (langText:string) => {
        let paths = pathname.split("/")
        paths[1] = langText
        router.push(paths.join("/"))

    }
    return (
        <>
            <header className='main-header'>
                <div className='main-header-top'>
                    <div className='header-company-motto'>
                        <p>UNICORP | Grow Through Innovation</p>
                    </div>
                    <div className='header-company-contact'>
                        <div className='company-social-media'>
                            <ul>
                                <li><Link href='/'><FacebookIcon /></Link></li>
                                <li><Link href='/'><InstagramIcon /></Link></li>
                                <li><Link href='/'><TwitterIcon /></Link></li>
                            </ul>
                        </div>
                        <div className='company-phone-number'>
                            <p><span><PhoneIcon /></span>+62 31 599 7100</p>
                        </div>
                    </div>
                </div>
                <div className='main-header-bottom'>
                    <Image src='/images/logoes/logo-unicorp-big.png' alt='logo unicorp' width={128} height={36}/>
                    <div className='main-header-menu'>
                        <ul>
                            <li><Link href={`/${lang}/home`}>Home</Link></li>
                            <li><Link href={`/${lang}/tentang-kami`}>Tentang Kami</Link></li>
                            <li><Link href={`/${lang}/unit-bisnis`}>Unit Bisnis</Link></li>
                            <li><Link href={`/${lang}/blog`}>Blog</Link></li>
                            <li><Link href={`/${lang}/karir`}>Karir</Link></li>
                            <li><Link href={`/${lang}/kontak-kami`}>Kontak Kami</Link></li>
                        </ul>
                        <div className='flags-menu'>
                            <a className='flag-button' onClick={_ => setShowFlags(!showFlags)}>
                                <Image src={`/images/flags/${lang}.png`} alt='flag' width={'28'} height={'20'} />
                                <span className={`transition-all duration-300 ${showFlags ? 'rotate-180': ''}`}><ChevronDownIcon /></span>
                                
                            </a>
                            <ul className={`list-flags ${showFlags ? 'show': ''}`}>
                                <li>
                                    <a onClick={_ => switchLang('id')}>
                                        <Image src={`/images/flags/id.png`} alt='indonesian flags' width={'28'} height={'20'} />
                                    </a>
                                </li>
                                <li>
                                    <a onClick={_ => switchLang('en')}>
                                        <Image src={`/images/flags/en.png`} alt='english flags' width={'28'} height={'20'} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MainHeader

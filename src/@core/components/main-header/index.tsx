"use client"

import { BurgerIcon, ChevronDownIcon, FacebookIcon, InstagramIcon, PhoneIcon, TwitterIcon } from '@/@core/my-icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import MainSidebarMenu from './main-sidebar-menu';
import settings from "@/app/data/settings.json"

const MainHeader = (props: {lang:string}) => {
    const { lang } = props
    const [showFlags, setShowFlags] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const pathname = usePathname()
    const router = useRouter();
    const switchLang = (langText:string) => {
        let paths = pathname.split("/")
        paths[1] = langText
        router.push(paths.join("/"))

    }
    const facebookUrl:any = settings.find((x) => x.name === 'facebook')?.value
    const twitterUrl:any = settings.find((x) => x.name === 'twitter')?.value
    const instagramUrl:any = settings.find((x) => x.name === 'instagram')?.value
    const phone:any = settings.find((x) => x.name === 'phone')?.value
    const tagline:any = settings.find((x) => x.name === 'tagline')?.value

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        if ( scrollY >= 60) {
            document.getElementsByClassName("main-header-bottom")[0].classList.add('fixed', 'top-0');
        } else {
            if (document.getElementsByClassName("main-header-bottom")[0]) {
                document.getElementsByClassName("main-header-bottom")[0].classList.remove('fixed', 'top-0');
            }

        }

    }, []);

    const showMobileSidebar = () => {
        setShowSidebar(true)
        document.body.classList.add('overflow-hidden')
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
           window.removeEventListener("scroll", onScroll);
        }
    });

    return (
        <>
            <header className='main-header sm:mobile-responsive'>
                <div className='main-header-top'>
                    <div className='header-company-motto'>
                        <p>{tagline}</p>
                    </div>
                    <div className='header-company-contact'>
                        <div className='company-social-media'>
                            <ul>
                                <li><Link href={facebookUrl}><FacebookIcon /></Link></li>
                                <li><Link href={instagramUrl}><InstagramIcon /></Link></li>
                                <li><Link href={twitterUrl}><TwitterIcon /></Link></li>
                            </ul>
                        </div>
                        <div className='company-phone-number'>
                            <p><span><PhoneIcon /></span>{phone}</p>
                        </div>
                    </div>
                </div>
                <div className='main-header-bottom'>
                    <Image src='/images/logoes/logo-unicorp-big.png' alt='logo unicorp' width={128} height={36}/>
                    <a className='burger-menu' onClick={_ => showMobileSidebar()}><BurgerIcon color={'#000'} /></a>
                    <div className='main-header-menu'>
                        <ul>
                            <li><Link href={`/${lang}`}>Home</Link></li>
                            <li><Link href={`/${lang}/about-us`}>Tentang Kami</Link></li>
                            <li className='has-sub'>
                                <a>Unit Bisnis <ChevronDownIcon /></a>
                                <ul className='submenu'>
                                    <li><Link href={`/${lang}/business-units/ijp`}>IJP</Link></li>
                                    <li><Link href={`/${lang}/business-units/ijsa`}>IJSA</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link href={`/${lang}/news`}>News</Link></li> */}
                            <li><Link href={`/${lang}/careers`}>Karir</Link></li>
                            <li><Link href={`/${lang}/contact-us`}>Kontak Kami</Link></li>
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
            <MainSidebarMenu lang={lang} show={showSidebar} setShow={setShowSidebar}/>

        </>
    )
}

export default MainHeader

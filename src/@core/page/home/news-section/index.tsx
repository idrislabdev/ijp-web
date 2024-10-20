import Image from 'next/image'
import React from 'react'
import '@/styles/components/cards.css'

const HomeNewsSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    return (
        <section className='home-news-section'>
            <div className='home-news-container'>
                <div className='news-header'>
                    <div className='news-title'>
                        <h1>Berita Terkini</h1>
                        <p>Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non. Integer aliquet ullamcorper dolor, quis sollicitudin. Integer aliquet ullamcorper dolor, quis sollicitudin</p>
                    </div>
                    <a>Berita Lainnya</a>
                </div>
                <div className='news-subcontainer'>
                    <div className='card-news'>
                        <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%" />
                        <div className='card-body'>
                            <div className='text-date'>
                                <label>21 Agustus 2024</label>
                            </div>
                            <div className='text-title'>
                                <h5><a>Lorem ipsum dolor sit amet</a></h5>
                            </div>
                            <div className='text-content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , 
                                    consectetur adipiscing elit...
                                </p>
                            </div>
                            <div className='text-readmore'>
                                <a>Lebih Lengkap</a>
                            </div>
                        </div>
                    </div>
                    <div className='card-news'>
                        <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%"/>
                        <div className='card-body'>
                            <div className='text-date'>
                                <label>21 Agustus 2024</label>
                            </div>
                            <div className='text-title'>
                                <h5><a>Lorem ipsum dolor sit amet</a></h5>
                            </div>
                            <div className='text-content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , 
                                    consectetur adipiscing elit...
                                </p>
                            </div>
                            <div className='text-readmore'>
                                <a>Lebih Lengkap</a>
                            </div>
                        </div>
                    </div>
                    <div className='card-news'>
                        <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%"/>
                        <div className='card-body'>
                            <div className='text-date'>
                                <label>21 Agustus 2024</label>
                            </div>
                            <div className='text-title'>
                                <h5><a>Lorem ipsum dolor sit amet</a></h5>
                            </div>
                            <div className='text-content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , 
                                    consectetur adipiscing elit...
                                </p>
                            </div>
                            <div className='text-readmore'>
                                <a>Lebih Lengkap</a>
                            </div>
                        </div>
                    </div>
                    <div className='card-news'>
                        <Image src='/images/news/blog-big-2.jpg' alt='blog news image' width="0" height="0" sizes="100%"/>
                        <div className='card-body'>
                            <div className='text-date'>
                                <label>21 Agustus 2024</label>
                            </div>
                            <div className='text-title'>
                                <h5><a>Lorem ipsum dolor sit amet</a></h5>
                            </div>
                            <div className='text-content'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lorem , 
                                    consectetur adipiscing elit...
                                </p>
                            </div>
                            <div className='text-readmore'>
                                <a>Lebih Lengkap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeNewsSection

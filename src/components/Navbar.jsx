import { likeIcon, logo, starIcon, yandexEdaIcon } from '../assets/data'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

let langList = [
    {
        name: 'En',
        key: 'en',
    },
    {
        name: 'Ru',
        key: 'ru',
    },
    {
        name: 'Uz',
        key: 'uz',
    }
];


const Navbar = () => {

    const { t, i18n } = useTranslation('header');
    const [langOpen, setLangOpen] = useState(false);
    const currentLanguage = i18n.language;


    const nav_links = [
        {
            title: t('pizza'),
            link: 'pizza'
        },
        {
            title: t('pasta'),
            link: 'paste'
        },
        {
            title: t('soups'),
            link: 'soups'
        },
        {
            title: t('salads'),
            link: 'salad'
        },
        {
            title: t('drinks'),
            link: 'drink'
        },
        {
            title: t('promotions'),
            link: 'stock'
        },
        {
            title: t('contacts'),
            link: 'contact'
        },
    ];

    const { pathname } = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const cardLength = useSelector((store) => store.card.data.length);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header className={`${open ? 'bg-yellow' : 'bg-white'} sticky top-0 lg:-top-24 z-50`}>
            <div className="container py-8">
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-10 items-center'>
                        <Link to="/">
                            <img src={logo} alt="fibo logo" />
                        </Link>

                        <div className='space-y-1 hidden lg:inline-block'>
                            <p className='font-semibold text-lg'>{t('delivery')} <span className='text-yellow'>{t('moscow')}</span></p>
                            <div className='flex items-center space-x-2 font-bold'>
                                <img src={yandexEdaIcon} alt="yandex eda" />
                                <p>
                                    {t('yandex-food')}
                                    <span className='red-dot'></span>
                                    4.8
                                </p>
                                <img src={starIcon} alt="star" />
                                <p>
                                    {t('delivery-time')}
                                    <span className='red-dot'></span>
                                    {t('time-from')}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='h-10 inline-block lg:hidden'>
                            <div onClick={() => setLangOpen(!langOpen)} className={`bg-white w-[100px] flex items-end justify-center text-sm border border-gray rounded-2xl relative py-2 cursor-pointer overflow-hidden duration-200 transition-[height] ${langOpen ? 'h-[90px]' : 'h-10'}`}>
                                <svg className={`absolute top-2.5 left-3 duration-200 scale-90 ${langOpen ? 'rotate-180' : ''}`} width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 16.92 6ZM10 2.04c.83 1.2 1.48 2.53 1.91 3.96H8.09C8.52 4.57 9.17 3.24 10 2.04ZM2.26 12C2.1 11.36 2 10.69 2 10s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H2.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 3.08 14Zm2.95-8H3.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 6.03 6ZM10 17.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM12.34 12H7.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM14.36 12c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z" fill="#8C8C8C"></path></svg>
                                <svg className={`absolute top-2.5 right-3 duration-200 ${langOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M11.91 6.967 9 9.877l-2.91-2.91a.747.747 0 1 0-1.057 1.058l3.442 3.442a.747.747 0 0 0 1.058 0l3.442-3.442a.747.747 0 0 0 0-1.058.763.763 0 0 0-1.065 0Z" fill="#8C8C8C"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
                                <ul className='absolute top-[34px] space-y-1'>
                                    {langList.map((el, index) => (
                                        <li key={index} className={currentLanguage === el.key ? 'hidden' : 'block'} onClick={() => changeLanguage(el.key)}>{el.name}</li>
                                    ))}
                                </ul>

                                <span className='bg-white absolute top-2.5  -10 capitalize'>{currentLanguage}</span>
                            </div>
                        </div>

                        <div className='flex flex-row-reverse lg:flex-row items-center space-x-5'>


                            <button aria-label='menu toggle' onClick={toggleMenu} className="lg:hidden flex flex-col justify-center items-center z-50 p-0 ml-5">
                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                                </span>

                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`} >
                                </span>

                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                                </span>
                            </button>

                            <button className='light-btn hidden lg:block'>{t('request-call')}</button>
                            <Link to={`/card`} className='btn-yellow hidden md:block lg:hidden'>{t('card')} | {cardLength}</Link>

                            <a className='text-26 font-bold text-yellow hidden md:block' href="tel:+998939170731">998 93-917-07-31</a>
                        </div>
                    </div>


                </div>

                <div className='items-center justify-between mt-8 hidden lg:flex'>
                    <nav>
                        <ul className='flex items-center space-x-10 desktop-tab'>
                            {nav_links.map((i, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className='font-semibold' to={`/${i.link}`}>{i.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className='flex items-center space-x-3'>
                        <Link to={`/favourite`} className='btn-transparent flex items-center border border-gray rounded-14 space-x-2'>
                            <span>{t('favorites')}</span>
                            <img className='translate-y-1' src={likeIcon} alt="like" />
                        </Link>
                        <Link to={`/card`} className='btn-yellow'>{t('card')} | {cardLength}</Link>

                        <div className='h-10 hidden lg:inline-block'>
                            <div onClick={() => setLangOpen(!langOpen)} className={`bg-white w-[100px] flex items-end justify-center text-sm border border-gray rounded-2xl relative py-2 cursor-pointer overflow-hidden duration-200 transition-[height] ${langOpen ? 'h-[90px]' : 'h-10'}`}>
                                <svg className={`absolute top-2.5 left-3 duration-200 scale-90 ${langOpen ? 'rotate-180' : ''}`} width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 16.92 6ZM10 2.04c.83 1.2 1.48 2.53 1.91 3.96H8.09C8.52 4.57 9.17 3.24 10 2.04ZM2.26 12C2.1 11.36 2 10.69 2 10s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H2.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 3.08 14Zm2.95-8H3.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 6.03 6ZM10 17.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM12.34 12H7.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM14.36 12c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z" fill="#8C8C8C"></path></svg>
                                <svg className={`absolute top-2.5 right-3 duration-200 ${langOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path d="M11.91 6.967 9 9.877l-2.91-2.91a.747.747 0 1 0-1.057 1.058l3.442 3.442a.747.747 0 0 0 1.058 0l3.442-3.442a.747.747 0 0 0 0-1.058.763.763 0 0 0-1.065 0Z" fill="#8C8C8C"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
                                <ul className='absolute top-[34px] space-y-1'>
                                    {langList.map((el, index) => (
                                        <li key={index} className={currentLanguage === el.key ? 'hidden' : 'block'} onClick={() => changeLanguage(el.key)}>{el.name}</li>
                                    ))}
                                </ul>

                                <span className='bg-white absolute top-2.5  -10 capitalize'>{currentLanguage}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`py-10 text-center space-y-3 ${open ? 'block' : 'hidden'}`}>
                    <nav>
                        <ul className='flex items-center flex-col space-y-3 text-black text-sm'>
                            {nav_links.map((i, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink className='font-semibold' to={`/${i.link}`}>{i.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <button className='btn-transparent !text-black font-extrabold'>Войти</button>
                    <a className='text-lg font-bold text-black block' href="tel:+998939170731">998 93-917-07-31</a>
                    <Link to={`/card`} className='btn-yellow !bg-white inline-block'>{t('card')} | 1</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar
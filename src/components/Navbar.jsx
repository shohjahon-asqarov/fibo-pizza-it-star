import { likeIcon, logo, starIcon, yandexEdaIcon } from '../assets/data'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Navbar = () => {

    const nav_links = [
        {
            title: 'Пицца',
            link: 'pizza'
        },
        {
            title: 'Паста',
            link: 'paste'
        },
        {
            title: 'Супы',
            link: 'soups'
        },
        {
            title: 'Салаты',
            link: 'salad'
        },
        {
            title: 'Напитки',
            link: 'drink'
        },
        {
            title: 'Акции',
            link: 'stock'
        },
        {
            title: 'Контакты',
            link: 'contact'
        }
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


    return (
        <header className={`${open ? 'bg-yellow' : 'bg-white'} sticky top-0 lg:-top-24 z-50`}>
            <div className="container py-8">
                <div className='flex justify-between items-center'>
                    <div className='flex space-x-10 items-center'>
                        <Link to="/">
                            <img src={logo} alt="fibo logo" />
                        </Link>

                        <div className='space-y-1 hidden lg:inline-block'>
                            <p className='font-semibold text-lg'>Доставка пасты <span className='text-yellow'>Москва</span></p>
                            <div className='flex items-center space-x-2 font-bold'>
                                <img src={yandexEdaIcon} alt="yandex eda" />
                                <p>
                                    Яндекс еда
                                    <span className='red-dot'></span>
                                    4.8
                                </p>
                                <img src={starIcon} alt="star" />
                                <p>
                                    Время доставки
                                    <span className='red-dot'></span>
                                    от 31 мин
                                </p>
                            </div>
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

                        <button className='light-btn hidden lg:block'>Заказать звонок</button>
                        <Link to={`/card`} className='btn-yellow hidden md:block lg:hidden'>Корзина | {cardLength}</Link>

                        <a className='text-26 font-bold text-yellow hidden md:block' href="tel:+998939170731">998 93-917-07-31</a>
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
                            <span>Избранное</span>
                            <img className='translate-y-1' src={likeIcon} alt="like" />
                        </Link>
                        <Link to={`/card`} className='btn-yellow'>Корзина | {cardLength}</Link>
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
                    <Link to={`/card`} className='btn-yellow !bg-white inline-block'>Корзина | 1</Link>

                </div>
            </div>
        </header>
    )
}

export default Navbar
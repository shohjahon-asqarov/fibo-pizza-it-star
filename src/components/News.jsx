import React from 'react'
import { news_img } from '../assets/data'

const News = () => {

    const news_data = [
        {
            img: news_img,
            title: 'Карбонара',
            count: 'от 120 ₽'
        },
        {
            img: news_img,
            title: 'Карбонара',
            count: 'от 120 ₽'
        },
        {
            img: news_img,
            title: 'Карбонара',
            count: 'от 120 ₽'
        },
        {
            img: news_img,
            title: 'Карбонара',
            count: 'от 120 ₽'
        }
    ]

    return (
        <section>
            <div className="container pt-10">
                <h2 className='text-2xl font-bold'>Новинки</h2>

                <ul className='grid-4-list'>
                    {news_data.map((i, index) => {
                        return (
                            <li className='flex items-center space-x-4 shadow-category-cart rounded-xl p-3 px-4' key={index}>
                                <img className='w-70 h-70' src={i.img} alt={i.title} />
                                <div className='-space-y-1'>
                                    <h3 className='text-lg font-bold'>{i.title}</h3>
                                    <p className='font-extrabold text-yellow'>{i.count}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default News
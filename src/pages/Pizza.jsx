import React from 'react'
import { pizza_data } from '../assets/data'

const Pizza = () => {

    return (
        <section>
            <div className="container">
                <h2>Паста</h2>

                <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10 pb-20'>
                    {pizza_data.map(pizza => {
                        return (
                            <li className='p-4 hover:shadow-lg group cursor-pointer duration-300 border border-[#F3F3F7] rounded-14' key={pizza.id}>
                                <img className='w-64 mx-auto' src={pizza.img} alt={pizza.title} />
                                <div className='space-y-3'>
                                    <h3 >{pizza.title}</h3>
                                    <p className='text-13 font-medium text-cart-description'>{pizza.description}</p>

                                    <div className='flex justify-between items-center'>
                                        <p className='text-22 font-bold'>от {pizza.price} ₽</p>
                                        <button className='btn-yellow !py-1.5 !text-white duration-300 text-sm group-hover:!text-gray   '>В корзину</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Pizza
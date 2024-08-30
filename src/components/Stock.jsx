import React from 'react'
import { stock_img } from '../assets/data'

const Stock = () => {
    return (
        <section>
            <div className="container py-20">
                <h2 className='text-black text-44 text-center'>Наши <span className='text-yellow'>акции</span></h2>

                <div className='grid md:grid-cols-2 gap-3 md:gap-8 py-10'>
                    <img className='w-full h-full rounded-20' src={stock_img} alt="stock" />

                    <div className='grid grid-cols-2 gap-3 md:gap-8'>
                        <img className='rounded-20 h-full' src={stock_img} alt="stock" />
                        <img className='rounded-20 h-full' src={stock_img} alt="stock" />
                        <img className='rounded-20 h-full' src={stock_img} alt="stock" />
                        <img className='rounded-20 h-full' src={stock_img} alt="stock" />
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <a className='btn-yellow !text-white !rounded-full text-sm !px-8'>Все вкции</a>
                </div>
            </div>
        </section>
    )
}

export default Stock
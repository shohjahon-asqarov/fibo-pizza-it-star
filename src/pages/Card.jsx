import { closeIcon, emptyIcon, minusIcon, plusIcon } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, minusCount, updateCount } from '../store/slices/cardSlice';

const Card = () => {

    const cartData = useSelector((store) => store.card.data);

    const dispatch = useDispatch()

    return (
        <section>
            <div className="container">
                <div className='lg:w-5/6 mx-auto'>
                    <h2>Корзина</h2>
                    {cartData.length >= 1 ?
                        <ul className='mt-10'>
                            {cartData.map(i => {
                                return (
                                    <li className='py-8 border-t-2 border-light-gray' key={i.id}>
                                        <div className='flex justify-between items-center space-x-5'>
                                            <img src={i.img} alt={i.name} className='h-77 w-77 rounded-full' />
                                            <div className='flex justify-between items-center'>
                                                <div className='w-3/5 space-y-1 hidden lg:inline-block'>
                                                    <h3 className='text-xl text-black'>{i.title}</h3>
                                                    <p className='text-sm font-medium text-gray'>{i.description}</p>
                                                </div>
                                                <div className='flex space-x-8 items-center'>
                                                    <p className='text-2xl font-extrabold text-yellow hidden lg:inline-block'>{i.price * i.count} ₽</p>
                                                    <div className='bg-light-gray rounded-lg !text-gray flex items-center'>

                                                        <button onClick={() => dispatch(minusCount(i))} className='py-4 px-5'>
                                                            <img src={minusIcon} alt="minus count" />
                                                        </button>
                                                        <span className='text-lg font-bold'>{i.count}</span>
                                                        <button onClick={() => dispatch(updateCount(i))} className='py-4 px-5'>
                                                            <img src={plusIcon} alt="plus count" />
                                                        </button>
                                                    </div>

                                                    <button onClick={() => dispatch(deleteCard(i))}>
                                                        <img src={closeIcon} alt="close icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-full mt-5 space-y-1 lg:hidden'>
                                            <h3 className='text-xl text-black'>{i.title}</h3>
                                            <p className='text-sm font-medium text-gray'>{i.description}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        :
                        <div>
                            <img className='mx-auto' src={emptyIcon} alt="empty" />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Card
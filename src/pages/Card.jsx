import { closeIcon, emptyIcon, minusIcon, plusIcon } from '../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCard, getTotalPrice, minusCount, updateCount } from '../store/slices/cardSlice';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Card = () => {

    const cartData = useSelector((store) => store.card.data);

    const promocodes = [
        {
            code: 'IT-Start20',
            discount: 0.2
        },
        {
            code: 'IT-Start5',
            discount: 0.05
        },
        {
            code: 'IT-Start10',
            discount: 0.1
        },
    ];

    const [discountPrice, setDiscountPrice] = useState(0);
    const [available, setAvailable] = useState(false);
    const [finding, setFinding] = useState(false);



    const dispatch = useDispatch()

    const { t, i18n } = useTranslation('header')
    const currentLanguage = i18n.language;

    const totalPrice = useSelector(getTotalPrice);


    const writePromocode = (e) => {
        setFinding(true)
        let found = promocodes.find(i => i.code == e.target.value);
        if (found) {
            setAvailable(true)
            setDiscountPrice(discountPrice => discountPrice = (totalPrice - (found.discount * totalPrice)))
        }
        else {
            setAvailable(false)
        }
        setTimeout(() => {
            setFinding(false)
        }, 500)
    }

    return (
        <section>
            <div className="container">
                <div className='lg:w-5/6 mx-auto'>
                    <h2 data-aos="fade-up">{t('card')}</h2>
                    {cartData.length >= 1 ?
                        <div>
                            <ul className='mt-10'>
                                {cartData.map(i => {
                                    return (
                                        <li className='py-8 border-t-2 border-light-gray' key={i.id}>
                                            <div className='flex justify-between items-center space-x-5'>
                                                <img src={i.img} alt={i.title[currentLanguage]} className='h-77 w-77 rounded-full' />
                                                <div className='flex flex-grow justify-between items-center'>
                                                    <div className='w-3/5 space-y-1 hidden lg:inline-block'>
                                                        <h3 className='text-xl text-black'>{i.title[currentLanguage]}</h3>
                                                        <p className='text-sm font-medium text-gray'>{i.description[currentLanguage]}</p>
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
                                                <h3 className='text-xl text-black'>{i.title[currentLanguage]}</h3>
                                                <p className='text-sm font-medium text-gray'>{i.description[currentLanguage]}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='border-y border-light-gray py-8 px-5 flex items-end justify-center flex-col space-y-3'>
                                <div className='flex items-center border border-light-gray py-2.5 pr-5 rounded-14'>
                                    <input onKeyUp={(e) => writePromocode(e)} className='border-none outline-none' type="text" placeholder='Promocode' />
                                    <div className={`${finding ? 'opacity-100' : 'opacity-0'}`} role="status">
                                        <svg aria-hidden="true" class="w-8 h-8 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="transparent" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                </div>
                                <div className='flex items-center space-x-5'>
                                    <p className='text-xl font-bold'>All price:</p>

                                    <p className='text-yellow  text-2xl font-bold space-x-3'>
                                        <span className={`${available ? 'line-through' : ''}`}>{totalPrice}</span>
                                        {available && <span>{discountPrice}</span>} ₽</p>
                                </div>
                            </div>

                        </div>
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
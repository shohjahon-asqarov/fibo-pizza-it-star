import { useTranslation } from 'react-i18next'
import { stock_img } from '../assets/data'
import { Link } from 'react-router-dom'

const Stock = () => {
    const { t } = useTranslation('header')
    return (
        <section>
            <div className="container py-20">
                <h2 data-aos="fade-up" className='text-black text-44 text-center'>{t('our')} <span className='text-yellow lowercase'>{t('promotions')}</span></h2>

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
                    <Link to={`/stock`} className='btn-yellow !text-white !rounded-full text-sm !px-8'>{t('all_promotions')}</Link>
                </div>
            </div>
        </section>
    )
}

export default Stock
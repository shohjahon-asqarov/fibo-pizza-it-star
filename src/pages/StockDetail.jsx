import { Link, useParams } from 'react-router-dom'
import { stock_data } from '../assets/stock/stock';
import { arrowLeftIcon } from '../assets/data';
import { useTranslation } from 'react-i18next';

const StockDetail = () => {
    const { id } = useParams();
    const product = stock_data.find(i => i.id == id);

    const { t, i18n } = useTranslation('header');
    const currentLanguage = i18n.language;


    return (
        <section>
            <div className="container">
                <div className='space-y-3'>
                    <Link to={-1} className='light-btn inline-flex space-x-2 items-center'>
                        <img src={arrowLeftIcon} alt="prev" />
                        <span>Hазад</span>
                    </Link>
                    <img className='w-full' src={product.img} alt={product.title[currentLanguage]} />
                    <h3>{product.title[currentLanguage]}</h3>
                    <p>{product.description[currentLanguage]}</p>
                </div>
            </div>
        </section>
    )
}

export default StockDetail
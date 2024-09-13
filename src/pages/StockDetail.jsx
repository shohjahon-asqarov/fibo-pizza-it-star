import { Link, useParams } from 'react-router-dom'
import { stock_data } from '../assets/stock/stock';
import { arrowLeftIcon } from '../assets/data';

const StockDetail = () => {
    const { id } = useParams();
    const product = stock_data.find(i => i.id == id);


    return (
        <section>
            <div className="container">
                <div className='space-y-3'>
                    <Link to={-1} className='light-btn inline-flex space-x-2 items-center'>
                        <img src={arrowLeftIcon} alt="prev" />
                        <span>Hазад</span>
                    </Link>
                    <img className='w-full' src={product.img} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    )
}

export default StockDetail
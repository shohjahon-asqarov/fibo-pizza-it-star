import { soups } from '../assets/supi/soups'
import ProductCard from '../components/ProductCard';

const Soups = () => {
    return (
        <section>
            <div className="container">
                <h2>Супы</h2>

                <ul className='grid-4-list'>
                    {soups.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Soups
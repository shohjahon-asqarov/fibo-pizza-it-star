import { salads } from '../assets/salad/salads'
import ProductCard from '../components/ProductCard';

const Salads = () => {

    return (
        <section>
            <div className="container">
                <h2>Салаты</h2>

                <ul className='grid-4-list'>
                    {salads.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Salads
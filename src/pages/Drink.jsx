import { drinks } from '../assets/drinks/drinks'
import ProductCard from '../components/ProductCard';

const Drink = () => {

    return (
        <section>
            <div className="container">
                <h2>Напитки</h2>

                <ul className='grid-4-list'>
                    {drinks.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Drink
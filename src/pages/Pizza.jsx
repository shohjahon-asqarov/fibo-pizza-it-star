import { pizza_data } from '../assets/data'
import ProductCard from '../components/ProductCard';

const Pizza = () => {


    return (
        <section>
            <div className="container">
                <h2>Паста</h2>

                <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10 pb-20'>
                    {pizza_data.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Pizza
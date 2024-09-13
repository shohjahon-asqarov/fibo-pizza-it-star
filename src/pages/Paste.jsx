import { paste } from '../assets/paste/pasta'
import ProductCard from '../components/ProductCard';

const Paste = () => {


    return (
        <section>
            <div className="container">
                <h2>Паста</h2>

                <ul className='grid-4-list'>
                    {paste.map(pizza => {
                        return (
                            <ProductCard key={pizza.id} product={pizza} />
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}

export default Paste
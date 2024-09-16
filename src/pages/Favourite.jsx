import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import { emptyIcon } from "../assets/data"
import { useTranslation } from "react-i18next"

const Favourite = () => {
    const likeData = useSelector((store) => store.like.data)
    const { t } = useTranslation('header')

    return (
        <section>
            <div className="container">
                <h2 data-aos="fade-up">{t('favorites')}</h2>

                {likeData.length > 0 ?
                    <ul className='grid-4-list'>
                        {likeData.map(pizza => {
                            return (
                                <ProductCard key={pizza.id} product={pizza} />
                            )
                        })}
                    </ul>
                    : <div>
                        <img className='mx-auto' src={emptyIcon} alt="empty" />
                    </div>}
            </div>
        </section>
    )
}

export default Favourite
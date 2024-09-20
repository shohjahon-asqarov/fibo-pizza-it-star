import { useDispatch } from "react-redux";
import checkLike from "../functions/checkLike"
import { toggleLike } from "../store/slices/likeSlice";
import { likeFillIcon, likeIcon } from "../assets/data";
import { addCard } from "../store/slices/cardSlice";
import { toggleModal } from "../store/slices/modalSlice";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    console.log(currentLanguage);
    
    return (
        <li data-aos-duration="1000" data-aos="fade-up" className='p-4 relative hover:shadow-lg group cursor-pointer duration-300 border border-[#F3F3F7] rounded-14 flex flex-col' >
            <button onClick={() => dispatch(toggleLike(product))} className='absolute top-5 right-5'>
                <img src={checkLike(product.id) ? likeFillIcon : likeIcon} alt="like" />
            </button>
            <img onClick={() => dispatch(toggleModal(product))} className='w-64 mx-auto' src={product.img} alt={product.title[currentLanguage]} />
            <div className='space-y-3 flex-grow'>
                <h3 >{product.title[currentLanguage]}</h3>
                <p className='text-13 font-medium text-cart-description'>{product.description[currentLanguage]}</p>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <p className='text-22 font-bold'>от {product.price} ₽</p>
                <button
                    onClick={() => dispatch(addCard(product))}
                    className='btn-yellow !py-1.5 !text-white duration-300 text-sm group-hover:!text-gray   '>
                    В корзину
                </button>
            </div>
        </li>
    )
}

export default ProductCard
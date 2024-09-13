import { useDispatch } from "react-redux";
import checkLike from "../functions/checkLike"
import { toggleLike } from "../store/slices/likeSlice";
import { likeFillIcon, likeIcon } from "../assets/data";
import { addCard } from "../store/slices/cardSlice";

const ModalCard = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <li className='p-4 relative group cursor-pointer duration-300 rounded-14' >
            <button onClick={() => dispatch(toggleLike(product))} className='absolute top-5 right-5'>
                <img src={checkLike(product.id) ? likeFillIcon : likeIcon} alt="like" />
            </button>
            <img className='w-64 mx-auto' src={product.img} alt={product.title} />
            <div className='space-y-3'>
                <h3 >{product.title}</h3>
                <p className='text-13 font-medium text-cart-description'>{product.description}</p>

                <div className='flex justify-between items-center'>
                    <p className='text-22 font-bold'>от {product.price} ₽</p>
                    <button
                        onClick={() => dispatch(addCard(product))}
                        className='btn-yellow !py-1.5 !text-white duration-300 text-sm group-hover:!text-gray   '>В корзину</button>
                </div>
            </div>
        </li>
    )
}

export default ModalCard
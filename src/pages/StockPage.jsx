import { Link } from 'react-router-dom'
import { stock_data } from '../assets/stock/stock'

const StockPage = () => {
  return (
    <section>
      <div className="container">
        <h2 data-aos="fade-up">Акции</h2>

        <ul className='grid grid-cols-3 gap-5 py-10'>
          {stock_data.map((i) => {
            return (
              <li key={i.id} className='pb-5 border border-[#f3f3f7] cursor-pointer   hover:shadow-discount-cart duration-300 group rounded-14 mb-3'>
                <img className='mb-2' src={i.img} alt={i.title} />
                <div className='px-5  space-y-3'>
                  <h3 className='font-bold text-black text-xl'>{i.title}</h3>
                  <p className='font-medium text-[#797979] text-13'>{i.description}</p>
                  <Link to={`/stock/${i.id}`} className='btn-yellow inline-block !text-ms !text-delivery group-hover:!text-white duration-300'>Посмотреть</Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default StockPage

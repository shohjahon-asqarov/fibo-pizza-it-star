import { delivery_icon } from '../assets/data'

const Delivery = () => {
    const data = [
        {
            img: delivery_icon,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery_icon,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery_icon,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery_icon,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    ];

    return (
        <section className='bg-light-gray py-20'>
            <div className="container">
                <h2 className='text-yellow text-center mb-5'>Оплата и доставка</h2>
                <ul className='grid-4-list !gap-y-14'>
                    {data.map((i, index) => {
                        return (
                            <li className='bg-white rounded-14 px-5 pb-5 relative pt-9 flex justify-center ' key={index}>
                                <div className='w-77 h-77 rounded-full flex items-center justify-center mx-auto bg-white absolute -top-1/2'>
                                    <img src={i.img} alt={i.title} />
                                </div>
                                <p className='text-sm font-bold text-center text-delivery'>{i.title}</p>
                            </li>
                        )
                    })}
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0148105380226!2d69.59864317555004!3d40.849598629181266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2dd0a7182d4b%3A0x4cbfcb1de9db07fc!2siTech!5e0!3m2!1suz!2s!4v1724665012350!5m2!1suz!2s" className='w-full h-80 mt-8 rounded-14' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Delivery
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Scrollbars } from 'react-custom-scrollbars';

const Myorders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user.email])

    return (
        <div className='grid grid-cols-1 gap-6 w-3/4 h-screen px-5 mx-auto my-10  py-10 bg-gray-400 overflow-x-auto'>

            {

                orders.map((o, index) =>

                    <div className='flex justify-around items-center border-b-2 '>

                        <h1>{index}</h1>
                        <img className='w-20 h-20 rounded-full drop-shadow-lg' src={o.product.img} alt="" />
                        <h1 className='font-bold text-left'>{o.product.model}</h1>
                        <h1 className='font-bold text-left'>${o.product.price}</h1>
                        <small className='bg-yellow-500 px-3 py-2 font-bold rounded-xl'>{o.status}</small>
                    </div>

                )
            }

        </div>
    );
};

export default Myorders;
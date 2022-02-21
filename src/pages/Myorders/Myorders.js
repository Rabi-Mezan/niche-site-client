import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import cogoToast from 'cogo-toast';

const Myorders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://speeddo.herokuapp.com/myorders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email, control])


    // cancel oreder
    const handleCancel = id => {
        const procedd = window.confirm('Are you sure to cancel the order??')
        if (procedd) {
            fetch(`https://speeddo.herokuapp.com/myorders/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        cogoToast.success('Order Cancel Successfully!!');
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })

        }

    }


    return (
        <div className='grid grid-cols-1 gap-4 text-white w-full h-screen px-5 mx-auto   py-10 bg-red-800 over'>

            {

                orders.map((o, index) =>

                    <div className='flex justify-around items-center border-b-2 '>

                        <h1>{index}</h1>
                        <img className='w-20 h-20 rounded-full drop-shadow-lg' src={o.product.img} alt="" />
                        <h1 className='font-bold text-left'>{o.product.model}</h1>
                        <h1 className='font-bold text-left'>${o.product.price}</h1>
                        <small className='text-black  font-black rounded-xl'>{o.status}</small>
                        <button onClick={() => handleCancel(o._id)} className='bg-black px-3 py-2 text-white  hover:font-italic '>Cancel</button>
                    </div>

                )
            }

        </div>
    );
};

export default Myorders;
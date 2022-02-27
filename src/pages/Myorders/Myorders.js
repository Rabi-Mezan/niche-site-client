import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import cogoToast from 'cogo-toast';
import { Scrollbars } from 'react-custom-scrollbars';
import { useHistory } from 'react-router-dom';

const Myorders = () => {
    const { user, isloading, setIsLoading } = useAuth()
    const [orders, setOrders] = useState([])
    const [control, setControl] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://speeddo.herokuapp.com/myorders/${user?.email}`,
            {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    history.push('/login')
                }
            })
            .then(data => {
                setOrders(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
        return () => { };
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


    if (isloading)
        return (
            <div class="flex justify-center items-center h-screen">
                <div class="spinner-grow inline-block w-20 h-20  rounded-full opacity-0" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    return (

        <div className='grid grid-cols-1 gap-4 text-white  px-5 mx-auto   py-10 bg-red-800   min-h-screen '>



            <Scrollbars  >

                {

                    orders.map((o, index) =>

                        <div className='lg:flex lg:justify-around lg:items-center text-left  my-3  shadow-lg py-1'>


                            <h1 className='hidden md:block'>{index}</h1>
                            <img className='w-20 h-20 rounded-full drop-shadow-lg' src={o.product.img} alt="" />
                            <h1 className='font-bold text-left'>{o.product.model}</h1>

                            <h1 className='font-bold text-left'>${o.product.price}</h1>
                            <small className='text-black  font-black rounded-xl'>{o.status}</small>
                            <button onClick={() => handleCancel(o._id)} className='bg-black px-3 py-2 mx-5 lg:mx-0 text-white  hover:font-italic '>Cancel</button>
                        </div>

                    )
                }

            </Scrollbars>

        </div >

    );
};

export default Myorders;
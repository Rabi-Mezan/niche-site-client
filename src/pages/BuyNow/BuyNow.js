import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bg1 from '../../img/testi.jpg'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import cogoToast from 'cogo-toast';

const BuyNow = () => {

    const { id } = useParams()
    const { isloading, setIsLoading, user } = useAuth()
    const [alert, setAlert] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.product = details
        data.status = 'pending'
        fetch('https://speeddo.herokuapp.com/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    cogoToast.success('Your Order Placed Successfully !!');
                }
            })
        reset()
    }

    const [details, setDetails] = useState({})

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://speeddo.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isloading)
        return (
            <div class="flex justify-center items-center h-screen">
                <div class="spinner-grow inline-block w-20 h-20  rounded-full opacity-0" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )

    return (
        <div
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundAttachment: 'Fixed',
                height: '100vh',
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}


            className='w-full mx-auto lg:p-5 min-h-screen '>


            <div className=''>
                <div className='flex flex-col  bg-transparent justify-center items-center lg:w-2/3  px-5'>

                    <form className='w-full flex flex-col mt-2 lg:p-5 lg:text-lg text-xs' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Customer Name :</label>
                            <input placeholder='Name' type='text' className='border w-2/3 h-12 mb-4 rounded shadow p-1' value={user?.displayName}   {...register("name", { required: true, maxLength: 20 })} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Customer Email  :</label>
                            <input placeholder='Email' type='email' readOnly className='border w-2/3 h-12 mb-4 rounded shadow p-1' value={user?.email}   {...register("email", { required: true, maxLength: 20 })} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Customer Address:</label>
                            <input placeholder='Address' type='text' className='border w-2/3 h-12 mb-4 rounded shadow p-1'    {...register("address", { required: true })} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Customer Mobile:</label>
                            <input placeholder='Mobile' type='number' className='border w-2/3 h-12 mb-4 rounded shadow p-1'    {...register("number", { required: true })} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Bike Model  :</label>
                            <input placeholder='model' type='text' readOnly className='border w-2/3 h-12 mb-4 rounded shadow p-1' value={details.model}  {...register("Model", { required: true })} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <label className='text-white'>Payment Method  :</label>
                            <select className='border w-2/3 h-12 mb-4 rounded shadow p-1' {...register("paymethod")}>
                                <option value="Cash On Delivery">Cash On Delivery</option>
                                <option value="Bkash">Bkash</option>
                                <option value="Visa">Visa</option>
                                <option selected value="Stripe">Stripe</option>
                            </select>
                        </div>

                        <hr className='my-3' />

                        <div className='w-full  lg:flex justify-between my-5 '>
                            <h1 className='lg:text-4xl text-2xl font-bold text-red-600'>TOTAL : ${details.price}</h1>
                            <input className='lg:w-1/3 w-1/2 bg-red-500  hover:bg-red-700 cursor-pointer h-10 text-white text-md font-bold rounded shadow' value='Confirm Order' type="submit" />
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BuyNow;
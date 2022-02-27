import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Wishlist = () => {
    const { user, setIsLoading } = useAuth()
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://lit-dawn-51201.herokuapp.com/mywishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setWishlist(data)

                console.log(data);
            })
    }, [user?.email])





    return (
        <div className='w-full bg-red-800 flex justify-center flex-col lg:p-10'>
            <h1 className='text-4xl font-bold text-white text-left uppercase my-5 '>My speeddo Wishlist</h1>
            <div className='lg:flex justify-center gap-8   '>
                {
                    wishlist.map(item =>

                        <div className='lg:w-1/2 flex flex-col justify-center items-center bg-black px-3 py-5 rounded my-2'>
                            <img className='w-40 h-32 ' src={item.bike.img} alt="" />
                            <h1 className='text-white text-xl my-2'>{item.bike.model}</h1>
                            <button className='bg-red-700 justify-start text-center text-white rounded-lg shadow px-6 py-2 flex items-start'>Remove</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Wishlist;
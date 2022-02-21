import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Wishlist = () => {
    const { user, isloading, setIsLoading } = useAuth()
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/mywishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setWishlist(data)

                console.log(data);
            })
    }, [user?.email])

    useEffect(() => {
        fetch()

    }, [])




    return (
        <div className='w-full'>
            <h1>My Wishlist</h1>
            <div className='grid grid-cols-4 gap-4 p-10 '>
                {
                    wishlist.map(item =>

                        <div className='w-1/2 flex flex-col justify-center items-start bg-black px-3 py-2'>
                            <img className='w-40 h-32 ' src={item.bike.img} alt="" />
                            <h1 className='text-white'>{item.bike.model}</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Wishlist;
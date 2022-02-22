import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import heart from '../../../img/heartred.png'
import "./Featured.css"
import cogoToast from 'cogo-toast';

const Featured = () => {
    const [bike, setBike] = useState([])
    const { user } = useAuth()
    useEffect(() => {


        fetch('https://speeddo.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBike(data))

    }, [])

    const handleAddToWishlist = b => {

        let wish = { email: user.email, bike: b }
        fetch('https://speeddo.herokuapp.com/wishlist',
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(wish)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    cogoToast.success('Added To Your Wishlist !!');
                }
            })

    }


    return (
        <div className='bg-red-900 min-h-screen '>
            <h1 className='text-black py-10  text-3xl font-bold'>SEE ALL OF <br />
                <span className='text-black lg:text-5xl font-bold'>
                    OUR FEATURED BIKES</span></h1>

            <div className='grid lg:grid-cols-3 gap-5 m-10'>


                {
                    bike.slice(0, 4).map(b =>
                        <div class="flex flex-col items-center justify-center w-full mx-auto shadow-lg">
                            <div class="w-full h-60 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
                                backgroundImage: `url(${b.img}`
                            }}>


                                {
                                    user?.email && <div onClick={() => handleAddToWishlist(b)} className='tooltip'>
                                        <img className='w-14 h-14 fill-white' src={heart} alt="" />
                                        <span class="tooltiptext">Add To Wishlist</span>
                                    </div>
                                }

                            </div>

                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center lg:text-xl text-gray-800 uppercase dark:text-white">{b.model}</h3>

                                <div class="flex items-center justify-between px-2 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">${b.price}</span>
                                    <Link to={`/buynow/${b._id}`}>
                                        <button class="px-2 py-1 text-xs lg:font-semibold  text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Buy Now</button>
                                    </Link>
                                    <Link to={`/details/${b._id}`}>
                                        <button class="px-2 py-1 text-xs lg:font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>

            <Link to='/store'>
                <button className='bg-black text-white font-bold text-xl px-10 py-5 lg:my-28 my-10 lg:w-80 hover:bg-transparent hover:border-l hover:border-r hover:border-black overflow-hidden rounded '>Visit Store </button>
            </Link>
        </div>
    );
};

export default Featured;
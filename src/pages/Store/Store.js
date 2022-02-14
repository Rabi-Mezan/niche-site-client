import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Store = () => {
    const [bike, setBike] = useState([])
    useEffect(() => {


        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBike(data))

    }, [])

    return (
        <div className='bg-red-900 min-h-screen '>
            <h1 className='text-black py-20  text-3xl font-bold'>SEE ALL OF <br />
                <span className='text-black lg:text-5xl font-bold'>
                    OUR FEATURED BIKES</span></h1>

            <div className='grid lg:grid-cols-3 gap-10 m-10 pb-20'>


                {
                    bike.map(b =>
                        <div class="flex flex-col items-center justify-center w-full mx-auto shadow-lg">
                            <div class="w-full h-60 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
                                backgroundImage: `url(${b.img}`
                            }}></div>

                            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{b.model}</h3>

                                <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span class="font-bold text-gray-800 dark:text-gray-200">{b.price}</span>
                                    <Link to={`/buynow/${b._id}`}>
                                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Buy Now</button>
                                    </Link>
                                    <Link to={`/details/${b._id}`}>
                                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default Store;
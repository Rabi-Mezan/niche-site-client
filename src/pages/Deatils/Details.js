import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://speeddo.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className='bg-black'>
            <div className='lg:flex lg:p-28'>
                <img className='lg:h-80 lg:w-1/2 lg:mb-0  mb-5' src={details.img} alt="" />

                <div className=' justify-center items-center px-5'>
                    <h1 className='text-red-700 font-bold text-4xl uppercase mb-10'>{details.model}</h1>
                    <div className='flex justify-around text-white'>
                        <p>Country : {details.country}</p>
                        <p>Model: {details.company}</p>
                        <p className='text-2xl font-bold text-red-800'>Price: ${details.price}</p>
                    </div>
                    <hr className='my-8' />
                    <p className='text-white'>{details.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Details;
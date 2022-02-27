import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://lit-dawn-51201.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className='bg-black'>
            <div className='lg:flex lg:p-28'>
                <img className='lg:h-80 lg:w-1/2 lg:mb-0  mb-5' src={details.img} alt="" />

                <div className=' justify-center text-left items-center px-8'>
                    <h1 className='text-red-700 font-bold lg:text-4xl  text-2xl  uppercase mb-10'>{details.model}</h1>
                    <div className='flex  justify-between items-center text-white'>
                        <p>Country : {details.country}</p>
                        <p>Model: {details.company}</p>
                        <p className='lg:text-2xl font-bold text-red-800'>Price: ${details.price}</p>
                    </div>
                    <hr className='my-8' />
                    <p className='text-white text-left'>{details.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Details;
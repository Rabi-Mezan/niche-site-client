import React from 'react';
import bg from '../../../img/testi.jpg'

const Testimoni = () => {
    return (
        <div

            className='h-80 w-100 relative '>
            <div className='absolute'>
                <img src={bg} alt="" />
            </div>

            <div className='absolute  items-center justify-center top-20'>
                <img className='mx-auto h-40 w-40 rounded-full border border-white p-5' src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
                <p className='text-gray-200 w-1/2 mx-auto text-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem architecto quae autem ex, dignissimos praesentium eius, voluptates minus, ipsam eum soluta? Nihil odit, hic veniam laborum corrupti reiciendis totam tenetur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem architecto quae autem ex, dignissimos praesentium eius, voluptates minus, ipsam eum soluta? Nihil odit, hic veniam laborum corrupti reiciendis totam tenetur.</p>
                <h1 className='my-5 uppercase text-3xl font-bold text-gray-300'>Racer Maria</h1>
            </div>
        </div>
    );
};

export default Testimoni;
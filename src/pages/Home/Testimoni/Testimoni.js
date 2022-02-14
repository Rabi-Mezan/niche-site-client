import React from 'react';
import bg from '../../../img/testi.jpg'

const Testimoni = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'Fixed',
                height: '90vh',
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className='  w-100 relative flex justify-center items-center '>
            <div className=''>

            </div>

            <div className='absolute  items-center justify-center lg:top-20'>
                <img className='mx-auto lg:h-40 lg:w-40 h-28 w-28 rounded-full border border-white lg:p-2' src="https://images.unsplash.com/photo-1504909595448-91378747b0cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <p className='text-gray-200 lg:w-1/2 mx-auto text-xs lg:text-sm mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem architecto quae autem ex, dignissimos praesentium eius, voluptates minus, ipsam eum soluta? Nihil odit, hic veniam laborum corrupti reiciendis totam tenetur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem architecto quae autem ex, dignissimos praesentium eius, voluptates minus, ipsam eum soluta? Nihil odit, hic veniam laborum corrupti reiciendis totam tenetur.</p>
                <h1 className='my-5 uppercase text-3xl font-bold text-gray-300'>Racer Marine</h1>
            </div>
        </div>
    );
};

export default Testimoni;
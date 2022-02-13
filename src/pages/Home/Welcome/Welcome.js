import React from 'react';

const Welcome = () => {
    return (
        <div className='py-32  bg-black container-fluid px-2'>
            <h1 className='text-white text-3xl lg:text-3xl font-bold'>WELCOME TO <br />
                <span className='text-white lg:text-5xl font-bold'>
                    SPEEDDO BIKE STORE</span></h1>

            <div className='lg:flex lg:mt-32 p-2 lg:justify-center items-start gap-4'>
                <img className='p-6 lg:w-2/4' src="http://demo.posthemes.com/pos_aero/img/cms/01_home--1_01.png" alt="" />

                <div className='text-left w-auto px-2'>
                    <p className='text-gray-300 text-2xl font-bold' >MEET OUR</p>
                    <h1 className='lg:text-6xl mt-3 text-red-700 font-black '>BIKE CLUB SINCE 1892</h1>
                    <small className='text-xs font-light text-gray-300 tracking-widest mb-5'>CUSTUME AND CLUB</small>
                    <p className='mt-3 text-xs lg:text-md text-gray-300 lg:leading-7'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                        <br /> <br />
                        Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                    <img className='mt-10' src="http://demo.posthemes.com/pos_aero/img/cms/signature.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
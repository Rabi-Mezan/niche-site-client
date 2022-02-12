import React from 'react';

const Welcome = () => {
    return (
        <div style={{ backgroundColor: '' }} className='py-20 bg-black'>
            <h1 className='text-white  text-3xl font-bold'>WELCOME TO <br />
                <span className='text-white text-5xl font-bold'>
                    SPEEDDO BIKE STORE</span></h1>

            <div className='flex mt-32 p-10 justify-center items-start gap-10'>
                <img src="http://demo.posthemes.com/pos_aero/img/cms/01_home--1_01.png" alt="" />

                <div className='text-left'>
                    <p className='text-gray-300 text-2xl' >MEET OUR</p>
                    <h1 className='text-6xl mt-3 text-red-700 font-black '>BIKE CLUB SINCE 1892</h1>
                    <small className='text-sm font-light text-gray-300 tracking-widest mb-5'>CUSTUME AND CLUB</small>
                    <p className='mt-3 text-gray-300 leading-9'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                        <br /> <br />
                        Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                    <img className='mt-10' src="http://demo.posthemes.com/pos_aero/img/cms/signature.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
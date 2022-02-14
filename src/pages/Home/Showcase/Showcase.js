
import React from 'react';





const Showcase = () => {


    return (
        <div className='py-20 bg-black container-fluid'>
            <h1 className='text-white  text-3xl font-bold'>SEE ALL OF <br />
                <span className='text-white lg:text-5xl font-bold'>
                    OUR EVENT SHOWCASE</span></h1>


            <div className=' lg:flex justify-center gap-5 lg:mt-28  items-center p-5 '>

                <div className='mt-32 overflow-hidden bg-no-repeat bg-cover max-w-sm border-2 border-red-700'>
                    <img className=' shadow-lg hover:scale-105 transition duration-300 ease-in-out  ' src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/mobile/miy_riding_jacket.jpg" alt="" />

                </div>
                <div className='overflow-hidden border-2 border-red-700 bg-no-repeat bg-cover max-w-sm'>
                    <img className='hover:scale-110 transition duration-300 ease-in-out' src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/classic-350/podcast/homepage_podcast.jpg" alt="" />
                </div>
                <div className='lg:mt-32 border-2 border-red-700 overflow-hidden bg-no-repeat bg-cover max-w-sm'>
                    <img className='hover:scale-110 transition duration-300 ease-in-out overflow-hidden' src="https://www.royalenfield.com/content/dam/royal-enfield/india/accessories/banner/campaign/slip_on_silencer.jpg" alt="" />
                </div>
            </div>

            <button className='bg-red-700 hover:bg-transparent hover:border-l hover:border-r text-white font-bold text-xl px-10 py-5 mt-28 lg:w-80 '>Know More </button>
        </div>
    );
};

export default Showcase;
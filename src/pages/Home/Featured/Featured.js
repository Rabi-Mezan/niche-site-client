import React from 'react';

const Featured = () => {
    return (
        <div className='bg-red-600 min-h-screen '>
            <h1 className='text-black py-10  text-3xl font-bold'>SEE ALL OF <br />
                <span className='text-black lg:text-5xl font-bold'>
                    OUR FEATURED BIKES</span></h1>

            <div className='grid lg:grid-cols-3 gap-5 m-10'>
                <div class="flex flex-col items-center justify-center w-full mx-auto shadow-xl">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1584942881428-8751d2d67a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdG9yY3ljbGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60)" }}></div>

                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Yamaha Mate Black</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$1300</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1594882105842-3392b9a6beac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60)" }}></div>

                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Yamaha Mate Black</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$1300</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full mx-auto">
                    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1580789821619-a7e5323910eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60)" }}></div>

                    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Yamaha Mate Black</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">$1300</span>
                            <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <button className='bg-black text-white font-bold text-xl px-10 py-5 lg:my-28 my-10 lg:w-80 '>Visit Store </button>
        </div>
    );
};

export default Featured;
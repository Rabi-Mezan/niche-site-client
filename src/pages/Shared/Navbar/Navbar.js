import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../img/sppeed.png'


const Navbar = () => {
    return (
        <div>

            <nav className="relative flex flex-col  items-center justify-between px-2 py-3 lg:h-60 bg-black ">
                <div id='logo' className='flex '>
                    <img className='w-28 h-24  fill-white' src={logo} alt="" />
                    <h1 className='text-red-600 text-6xl font-bold  my-8'>SPEEDDO</h1>
                </div>

                <div className="w-3/4 px-4 mb-5 mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-full nav-menu relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <Link to='/' className="text-md menu font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                            Home
                        </Link>
                        <Link to='/' className="text-md menu font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                            Store
                        </Link>
                        <Link to='/' className="text-md menu font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                            About
                        </Link>

                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">

                        <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                            <div className="flex">
                                <span className="font-normal leading-snug flex text-center white-space-no-wrap border-2 border-solid border-red-600 rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-gray-400 border-r-0 placeholder-white">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                            <input type="text" className="px-2 py-1 h-8 border-2 border-solid border-red-600   rounded-full text-sm leading-snug text-red-700 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 " placeholder="Search teal" />
                        </div>

                        <Link to='/' className=''>
                            <button className='w-20 rounded h-8 text-center font-bold bg-red-700 text-white'>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../img/sppeed.png'
import cart from '../../../img/cart.png'


const Navbar = () => {
    return (
        <div>

            <nav className="relative flex flex-col  items-center justify-center px-2 py-3 lg:h-60 bg-black ">
                <div id='logo' className='flex '>
                    <img className='w-32 h-24 -mr-8  fill-white' src={logo} alt="" />
                    <h1 className='text-red-600 text-6xl font-bold  my-8'>SPEEDDO</h1>
                </div>

                <div className="w-3/4 px-4 mb-5 mx-auto flex flex-wrap items-center justify-center mt-10">
                    <div className="w-full nav-menu relative flex justify-end lg:w-auto  px-4 lg:static lg:block lg:justify-start">
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
                    <div className="lg:flex flex-grow items-center justify-end" id="example-navbar-warning">



                        <Link to='/' className=''>
                            <button className='w-28  h-8 text-center font-bold bg-red-700 text-white mx-10'>
                                Login
                            </button>
                        </Link>
                        <Link className='' to='/'>
                            <img src={cart} alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
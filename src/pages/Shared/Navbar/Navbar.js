import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../img/sppeed.png'
import cart from '../../../img/cart.png'
import useFirebase from '../../../hooks/useFirebase';


const Navbar = () => {
    const { user, logout } = useFirebase()

    const handleGoogleSignIn = () => {

    }

    return (
        <div>

            <nav className="relative lg:flex flex-col  items-center lg:justify-start justify-center px-2 py-3 lg:h-60 bg-black ">
                <div id='logo' className='flex  justify-center'>
                    <img className='lg:w-32 w-20 h-14 lg:h-20 lg:-mr-8  -mr-5 fill-white' src={logo} alt="" />
                    <h1 className='text-red-600 lg:text-6xl text-4xl font-bold  my-8 '>SPEEDDO</h1>
                </div>

                <div className="lg:w-3/4 px-4 mb-5 mx-auto lg:flex flex-wrap items-center justify-center lg:mt-10">
                    <div className="w-full  relative lg:flex justify-end lg:w-auto  px-4  lg:justify-start">
                        <Link to='/' className="text-md menu font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap uppercase text-white" >
                            Home
                        </Link>
                        <Link to='/' className="text-md menu font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap uppercase text-white" >
                            Store
                        </Link>
                        <Link to='/about' className="text-md menu font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap uppercase text-white" >
                            About
                        </Link>

                    </div>
                    <div className="lg:flex flex-grow items-center justify-end" id="example-navbar-warning ">



                        {
                            user?.email ?

                                <button onClick={logout} className='w-28  h-8 text-center font-bold bg-red-700 text-white mx-10'>
                                    Logout
                                </button>



                                : <Link to='/login' className=''>
                                    <button className='w-28  h-8 text-center font-bold bg-red-700 text-white mx-10'>
                                        Login
                                    </button>
                                </Link>
                        }
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
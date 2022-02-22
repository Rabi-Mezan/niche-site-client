import React, { useState } from 'react';
import bg1 from '../../img/testi.jpg'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googlesignin, setUser, setIsLoading, login, saveUser } = useAuth()
    const location = useLocation();
    const history = useHistory()
    // const [logindata, setLoginData] = useState({})


    const redirectUrl = location?.state?.from || '/home'

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        handleLogin(data.email, data.password)
        reset()
    }

    const handleLogin = (email, password) => {
        login(email, password)
            .then((userCredential) => {
                setIsLoading(true)
                history.push(redirectUrl)

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));

    }


    const handleGoogleSignIn = () => {
        googlesignin()
            .then((result) => {
                setIsLoading(true)
                const user = result.user
                setUser(user)
                history.push(redirectUrl)
            })
            .catch(error => {

            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundAttachment: 'Fixed',
                height: '100vh',
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',

            }}
            className='lg:min-h-screen relative lg:flex lg:justify-end lg:p-10 p-2'>
            <div className='flex flex-col bg-black backdrop-opacity-10 justify-center items-center lg:w-2/4 w-full h-full  p-5'>
                <h1 className='text-3xl font-bold text-gray-200 mb-5'>LOGIN HERE</h1>
                <form className='lg:w-2/3 flex flex-col my-5' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='EMAIL' type='email' required className='border w-full h-10 mb-4 rounded shadow p-1'  {...register("email", { required: true, maxLength: 20 })} />
                    <input type='password' placeholder='PASSWORD' className='border w-full h-10 mb-4 rounded shadow p-1' {...register("password")} />

                    <input className='w-full bg-red-700 h-10 text-white text-xl font-bold rounded shadow' value='LOGIN' type="submit" />
                </form>
                <hr className='bg-white  my-5 w-full' />
                <div className='w-2/3'>
                    <h4 className='text-white'>New Here ?

                        <Link className='ml-2 font-bold text-blue-500' to='/register'>
                            Please Register
                        </Link>
                    </h4>
                    <small className='text-white '>Or</small>
                    <br />
                    <button onClick={handleGoogleSignIn} className='w-full bg-white p-3 text-xs lg:text-sm mt-2 shadow-lg'>

                        SIGN IN USING GOOGLE</button>
                </div>
            </div>


        </div>
    );
};

export default Login;
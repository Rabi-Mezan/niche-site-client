import React from 'react';
import bg1 from '../../img/Loginbg.png'
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Login = () => {
    const { googlesignin } = useFirebase()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset()
    }


    return (
        <div
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundAttachment: 'Fixed',
                height: '100vh',
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className='h-screen relative lg:flex justify-end p-10'>
            <div className='flex flex-col bg-black justify-center items-center lg:w-1/3  p-5'>
                <h1 className='text-3xl font-bold text-gray-200 mb-5'>LOGIN HERE</h1>
                <form className='w-2/3 flex flex-col my-5' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='EMAIL' type='email' required className='border w-full h-10 mb-4 rounded shadow p-1'  {...register("email", { required: true, maxLength: 20 })} />
                    <input placeholder='PASSWORD' className='border w-full h-10 mb-4 rounded shadow p-1' {...register("password")} />

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
                    <button onClick={googlesignin} className='w-full bg-white p-3 text-xs lg:text-sm mt-2'>

                        SIGN IN USING GOOGLE</button>
                </div>
            </div>


        </div>
    );
};

export default Login;
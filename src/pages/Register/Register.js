import React from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../img/testi.jpg'
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { googlesignin, registerUser } = useFirebase()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        registerUser(data.name, data.email, data.password)
        // reset()
    }
    return (

        <div
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundAttachment: 'Fixed',
                height: '110vh',
                width: '100vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            className='min-h-screen relative lg:flex justify-end lg:p-10 p-2'>
            <div className='flex flex-col bg-transparent justify-center items-start lg:w-2/4 w-full h-full  p-5'>
                <h1 className='text-3xl font-bold text-gray-200 mb-5'>REGISTER HERE</h1>
                <form className='lg:w-2/3 w-full flex flex-col my-3' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='NAME' type='text' required className='border w-full h-10 mb-4 rounded shadow p-1'  {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='EMAIL' type='email' required className='border w-full h-10 mb-4 rounded shadow p-1'  {...register("email", { required: true, maxLength: 20 })} />
                    <input type='password' placeholder='PASSWORD' className='border w-full h-10 mb-4 rounded shadow p-1' {...register("password")} />

                    <input className='w-full bg-red-700 h-10 text-white text-xl font-bold rounded shadow' value='REGISTER' type="submit" />
                </form>
                <hr className='bg-white  my-5 w-full' />
                <div className='lg:w-2/3 w-full' >
                    <h4 className='text-white'>Registered ?

                        <Link className='ml-2 font-bold text-blue-500' to="/login">
                            Login Here
                        </Link>
                    </h4>
                    <small className='text-white my-2'>Or</small>
                    <br />
                    <button onClick={googlesignin} className='w-full bg-white p-3 text-md  mt-2 shadow-lg'>

                        SIGN IN USING GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
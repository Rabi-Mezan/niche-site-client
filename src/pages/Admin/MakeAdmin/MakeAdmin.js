import React from 'react';
import { useForm } from 'react-hook-form';
import bg1 from '../../../img/testi.jpg'

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        reset()
    }


    return (
        <div>
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
                <div className='flex flex-col bg-transparent shadow-lg justify-center items-start lg:w-2/4 w-full h-full  p-5'>
                    <h1 className='text-3xl font-bold text-gray-200 mb-5 '>Add New Admin</h1>
                    <form className='lg:w-2/3 w-full flex flex-col my-5' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='NEW ADMIN EMAIL' type='email' required className='border w-full h-10 mb-4 rounded shadow p-1'  {...register("email", { required: true, maxLength: 20 })} />
                        <input type='password' placeholder='ASSIGN PASSWORD' className='border w-full h-10 mb-4 rounded shadow p-1' {...register("password")} />

                        <input className='w-full bg-red-700 h-10 text-white text-xl font-bold cursor-pointer rounded shadow' type="submit" />
                    </form>
                    <hr className='bg-white  my-5 w-full' />

                </div>


            </div>
        </div>
    );
};

export default MakeAdmin;
import React from 'react';

const Login = () => {
    return (
        <div className='md:w-1/3 w-3/4 text-center border border-red-600 border-2 mx-auto p-24'>
            <h2 className='text-4xl mb-7 font-serif'>This is Login</h2>
            <div className='md:w-96 mx-auto'>
            <div className='flex flex-col gap-4 mb-4'>
               <input type="email" name="email" id="" placeholder='Your email'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
               <input type="password" name="password" id="" placeholder='Your Password'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
            </div>
             <div className='flex flex-col gap-2 items-center'>
               <button className='btn w-24'>Google</button>
               <button className='btn w-24'>Github</button>
             </div>
            </div>        
        </div>
    );
};

export default Login;
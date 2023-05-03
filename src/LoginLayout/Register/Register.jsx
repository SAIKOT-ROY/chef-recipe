import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {


  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target
    const email = form.email.value
    const password = form.password.value

    console.log(email, password);
  }
    return (
        <div className='md:w-1/3 w-3/4 text-center border
         border-blue-900 border-2 mx-auto p-24 bg-gradient-to-r from-cyan-500 to-blue-500 mt-20'>
            <h2 className='text-4xl mb-7 font-serif'>This is Register</h2>
            <form onSubmit={handleRegister} className='md:w-96 mx-auto'>
            <div className='flex flex-col gap-4 mb-4'>
               <input type="text" name="name" id="" placeholder='Your Name'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
               <input type="email" name="email" id="" placeholder='Your email'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
               <input type="password" name="password" id="" placeholder='Your Password'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
               <input type="text" name="Photo" id="" placeholder='Photo URL'
                className=' border-y-gray-950 border h-12 p-3 rounded-lg'/>
            </div>
             <div className='flex flex-col gap-2 items-center'>
               <button className='btn w-24'>Register</button>
             </div>
             <p>Already Have a account ?  
                  <Link 
                className='underline decoration-white text-white font-bold' to="/login">
                   Login</Link></p>
            </form>        
        </div>
    );
};

export default Register;
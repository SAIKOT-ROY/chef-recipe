import React from 'react';

const FoodFeature = ({food}) => {
    return (
        <div className='border'>
           <div className=' h-60'>
           <div className='flex justify-center items-center'>
           <img className='w-72 h-52' src={food.image} alt="" />
           </div>
           <div>
           <p className='text-black text-center font-serif text-3xl'>{food.name}</p>
           </div>
           </div>
        </div>
    );
};

export default FoodFeature;
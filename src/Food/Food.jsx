import React, { useEffect, useState } from 'react';
import FoodFeature from './FoodFeature';

const Food = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("https://assignment-ten-server-saikot-roy.vercel.app/food")
          .then((res) => res.json())
          .then((data) => setFoods(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <div className='bg-white mt-24 p-12 w-2/3 mx-auto'>
            <div className='flex flex-col md:flex-row text-center md:justify-center md:items-center'>
            <h1 className='font-bold text-black mb-4 text-4xl'>Amazing Food section</h1>
            <img className='w-28' src="https://i.ibb.co/cxtB8rq/hat.jpg" alt="" />
            </div>
            <div className='grid md:grid-cols-2 w-2/4 mx-auto gap-7'>
            {
                foods.map((food) => <FoodFeature 
                key={food.id}
                food={food}
                ></FoodFeature>)
            }
            </div>
            <div className='text-black text-center mt-5 text-2xl font-semibold'>
              <p>
                These are some of our 5 star dishes that are made by our chefs
              </p>
            </div>
        </div>
    );
};

export default Food;
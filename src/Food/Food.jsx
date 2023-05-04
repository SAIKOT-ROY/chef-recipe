import React, { useEffect, useState } from 'react';
import FoodFeature from './FoodFeature';

const Food = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/food")
          .then((res) => res.json())
          .then((data) => setFoods(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <div className='bg-white mt-24 p-12 w-2/3 mx-auto'>
            <h1 className='font-bold text-black text-center mb-4 text-4xl'>Amazing Food section</h1>
            <div className='grid grid-cols-2 w-2/4 mx-auto gap-7'>
            {
                foods.map((food) => <FoodFeature 
                key={food.id}
                food={food}
                ></FoodFeature>)
            }
            </div>
        </div>
    );
};

export default Food;
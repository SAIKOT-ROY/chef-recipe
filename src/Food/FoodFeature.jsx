import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const FoodFeature = ({ food }) => {
  return (
    <div className="border">
      <div className="">
        <div className="flex justify-center items-center">
          <img
            className="w-full md:w-72 h-32 md:h-52"
            src={food.image}
            alt=""
          />
        </div>
        <p className="text-black text-center font-serif text-3xl">
          {food.name}
        </p>
        <div className="flex ms-2">
        <div>
            <p className="text-black">Rating  :</p>
        </div>
        <div className="ms-2 flex w-10 text-black">
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
        </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FoodFeature;

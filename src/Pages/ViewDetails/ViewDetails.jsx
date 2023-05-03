import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BeakerIcon, StarIcon } from '@heroicons/react/24/solid'



const ViewDetails = () => {
  const { id } = useParams();
  const chefData = useLoaderData();
  const {recipes, rating, chef, bio, likes, years_of_experience, image_url} = chefData

  return (
    <div className="">
      <div className="mx-auto w-3/4 bg-base-100 shadow-xl mb-20">
        <div className="flex justify-center items-center bg-cyan-600 p-9">
        <figure className="px-10 rounded-md">
          <img
            src={image_url}
            alt="Shoes"
            className="rounded-xl mask mask-circle w-60 h-56"
          />
        </figure>
        </div>
        <div className="card-body items-center text-center bg-slate-800 border border-slate-300">
          <h2 className="card-title">{chef}</h2>
          <p>
            Chefs biodata : <span>{bio}</span>
          </p>
          <p>
            Likes : <span>{likes}</span>
          </p>
          <p>
            Experience : <span>{years_of_experience}</span>
          </p>
          <p>
            Recipes : <span>{recipes.length}</span>
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-3/4 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl border border-white bg-zinc-800 p-5">
          <figure className="mask mask-squircle">
            <img
              className="h-60"
              src={recipes[0].img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {recipes[0].name}
            </h2>
            <p><span className="font-bold text-lg">Recipe Description : </span><br />
             {recipes[0].description}</p>
            <p>Rating : {rating}</p>
          </div>
          <div className="ps-8">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ul className="ps-8 list-disc">
                <li>{recipes[0].ingredients[0]}</li>
                <li>{recipes[0].ingredients[1]}</li>
                <li>{recipes[0].ingredients[2]}</li>
                <li>{recipes[0].ingredients[3]}</li>
                <li>{recipes[0].ingredients[4]}</li>
            </ul>
          </div>
          <button className="btn btn-warning"><StarIcon className="w-4" /></button>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border border-white bg-slate-800 p-5">
          <figure className="mask mask-squircle">
            <img
              className="h-60"
              src={recipes[1].img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {recipes[1].name}
            </h2>
            <p><span className="font-bold text-lg">Recipe Description : </span><br />
             {recipes[1].description}</p>
            <p>Rating : {rating}</p>
          </div>
          <div className="ps-8">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ul className="ps-8 list-disc">
                <li>{recipes[1].ingredients[0]}</li>
                <li>{recipes[1].ingredients[1]}</li>
                <li>{recipes[1].ingredients[2]}</li>
                <li>{recipes[1].ingredients[3]}</li>
                <li>{recipes[1].ingredients[4]}</li>
            </ul>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border border-white bg-gray-700 p-5">
          <figure className="mask mask-squircle">
            <img
              className="h-60"
              src={recipes[2].img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {recipes[2].name}
            </h2>
            <p><span className="font-bold text-lg">Recipe Description : </span><br />
             {recipes[2].description}</p>
            <p>Rating : {rating}</p>
          </div>
          <div className="ps-8">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ul className="ps-8 list-disc">
                <li>{recipes[2].ingredients[0]}</li>
                <li>{recipes[2].ingredients[1]}</li>
                <li>{recipes[2].ingredients[2]}</li>
                <li>{recipes[2].ingredients[3]}</li>
                <li>{recipes[2].ingredients[4]}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

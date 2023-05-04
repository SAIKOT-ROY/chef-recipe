import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefsBio = ({ chef }) => {
  return (
    <div>
      <div className="card card-compact md:w-96 w-auto shadow-xl bg-white">
        <figure>
          <div className="md:h-96 border">
            {/* <img loading="lazy" className="md:h-full" src={chef.image_url} alt="chef" /> */}
            <LazyLoadImage className="md:h-full" src={chef.image_url} effect="blur" />
            {/* <LazyLoad
              height={762}
              width={400}
              threshold={0.95}
              onContentVisible={() => {
                console.log("loaded!");
              }}
            >
              <img src={chef.image_url} />
            </LazyLoad> */}
          </div>
        </figure>
        <div className="card-body">
          <h2 className="font-bold card-title text-white">{chef.chef}</h2>
          <div>
            <h2 className="text-xl font-semibold text-black">Recipes:</h2>
            <ul className="text-black">
              <li>{chef?.recipes[0]?.name}</li>
              <li>{chef?.recipes[1]?.name}</li>
              <li>{chef?.recipes[2]?.name}</li>
            </ul>
          </div>
          <div>
            <p className="text-black">
              Years Of Experince : {chef.years_of_experience}
            </p>
            <p className="text-black">Likes : {chef.likes}</p>
            <p className="text-black">
              If a dog chews shoes whose shoes does he choose?
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link
              className="btn bg-gradient-to-r from-sky-500 to-indigo-500"
              to={`/details/${chef.id}`}
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsBio;

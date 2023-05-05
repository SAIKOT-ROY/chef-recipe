import React from "react";
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";




const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-48 rounded-lg">
      <img src="../../../assets/404/000-404.png" alt="" srcset="" />
    </div>
     <div className="flex justify-center items-center mt-4">
        <Link to="/" className="btn bg-cyan-800"><span className="mr-2">GO HOME </span><ArrowLeftIcon className="w-4" /></Link>
     </div>
    </div>
  );
};

export default ErrorPage;

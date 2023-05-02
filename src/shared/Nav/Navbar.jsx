import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-28 border px-5 rounded-xl m-5">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Hakata Ramen</a>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

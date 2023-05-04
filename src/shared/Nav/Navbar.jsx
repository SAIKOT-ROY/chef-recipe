import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {logOut, user} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
     .then()
     .catch(error => console.log(error))
  }

  return (
    <div className="mb-28 border px-5 rounded-xl md:m-5">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Hakata Ramen</a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 dropdown">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/blog">Blog</Link>
          {user && <img className="w-9 h-9 rounded-full" src="https://i.ibb.co/rHM5mh0/Chef-Shota.jpg" />}

          {user ? (
            <button onClick={handleLogOut}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

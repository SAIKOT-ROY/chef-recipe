import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [tooltip, setTooltip] = useState(false);

console.log(tooltip)

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const tooltipOne = () => {
    setTooltip(true);
  };

  const tooltipTwo = () => {
    setTooltip(false);
  };

// This is navbar section 

  return (
    <div className="mb-28 border px-5 rounded-xl md:m-5">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl mb-4 md:mb-0">Ichiraku Ramen</a>
        </div>
        <div className="flex mt-10 md:mt-0 flex-row md:flex-row md:flex-row gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-fuchsia-400" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) => (isActive ? "text-fuchsia-400" : "")}
          >
            Register
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "text-fuchsia-400" : "")}
          >
            Blog
          </NavLink>
          <div className="relative">
            {user && (
              <img
                className="w-9 h-9 rounded-full tooltip"
                src={user?.photoURL}
                onMouseOver={tooltipOne}
                onMouseOut={tooltipTwo}
              />
            )}
          </div>
          <p className="absolute ml-44 mb-11">
            {tooltip == true ? <span>{user?.displayName}</span> : ""}
          </p>
          {user ? (
            <button onClick={handleLogOut}>Logout</button>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) => (isActive ? "text-fuchsia-400" : "")}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {logIn} = useContext(AuthContext);


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
      })
      .catch(error => {
        const errorMessage = error.message
        console.log(errorMessage);
      })
    
  };
  return (
    <div
      className="md:w-1/3 w-3/4 text-center border
         border-blue-900 border-2 mx-auto p-24 bg-gradient-to-r from-cyan-500 to-blue-500 mt-20"
    >
      <h2 className="text-4xl mb-7 font-serif">This is Login</h2>
      <form onSubmit={handleLogin} className="md:w-96 mx-auto">
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your email"
            className=" border-y-gray-950 border h-12 p-3 rounded-lg"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            className=" border-y-gray-950 border h-12 p-3 rounded-lg"
          />
        </div>
        <div className="mb-5">
          <button className="btn">LogIn</button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button
            className="btn w-36 
              bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
          >
            Google
          </button>
          <button
            className="btn w-36
               bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800"
          >
            Github
          </button>
        </div>
      </form>
      <p>
        Don't Have a account ?{" "}
        <Link
          className="underline decoration-white text-white font-bold"
          to="/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;

import React from "react";

const Discont = () => {
  return (
    <div className="w-2/4 mx-auto">
      <div className="relative">
        <img className="rounded-2xl h-[23rem]" src="https://i.ibb.co/92LsWy0/tna.jpg" alt="" />
      </div>
      <div className="absolute w-1/4 md:w-full md:left-[636px] mt-[-14rem]">
        <p className="mb-4 text-xl md:text-4xl font-bold">Join Our Member
        <br /> And Get Discount To 35%</p>
        <div className="absolute">
          <input
            className="relative bg-white w-20 md:w-96 h-12 rounded-2xl"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <button className="btn text-white bg-cyan-600 absolute md:left-[19rem] rounded-2xl">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discont;

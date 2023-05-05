import React from "react";

const Carasoul = () => {


  return (
    <div className="mb-16">
      <div className="carousel w-full relative">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img
            src="https://i.ibb.co/rw6Tzy6/Buldak-Ramen-SQ-500x375.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img src="https://i.ibb.co/NxNwS9y/download.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96">
          <img src="https://i.ibb.co/cyNwsrQ/kaarage.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="md:ml-48 text-4xl text-white absolute top-96 md:top-64">
        <p className="font-bold shadow mb-2">Chekout Our food</p>
        <button className="btn text-white bg-orange-600">Chekout</button>
      </div>
    </div>
  );
};

export default Carasoul;

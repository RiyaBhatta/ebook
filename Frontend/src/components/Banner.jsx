import React from "react";
import OIP from "../../public/OIP.jpeg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
         <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hello, Pick your Favourite{" "}
            <span className="text-pink-400"> Books Here !!!!</span>{" "}
          </h1>
          <p className="text-xl">
            Discover a world of stories at our online bookstore, where every
            page turns into an adventure. Browse thousands of titles across
            genres, from timeless classics to the latest bestsellers. Enjoy fast
            delivery, great deals, and a cozy reading experience from the
            comfort of your home.
          </p>
          <input type="text" placeholder="Type your email here" className="input" />
        </div>
        <button className="btn mt-5 btn-secondary">Register</button>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-32 md:ml-15 order-1">
        <img src={OIP} className="w-120 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;

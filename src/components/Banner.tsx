import React from "react";
import "./Banner.css";
import Shimazaki from "../images/pexels-sora-shimazaki-5938440 1.png";
function Banner() {
  return (
    <section>
      <div className="flex">
        <div className=" p-56 bg-[#A2B3BF] z-20 w-full flex flex-col justify-between items-center">
          <div className="content">
            <h4 className="mb-2">Welcome to Beautyness!!!</h4>
            <h1 className="mb-6">Beauty is power a smile is its sword.</h1>
            <p className="mb-8">
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </p>
            <button>make resertvation</button>
          </div>
        </div>
        <div className="w-full back  relative bg-[#1E2C30]">
          <div className="border-8 w-[561px] z-10 h-[663px] left-[-21px] top-[135px] overflow-hidden absolute border-white"></div>
          <img
            className="absolute top-[190px] z-30 left-[-78px]"
            src={Shimazaki}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
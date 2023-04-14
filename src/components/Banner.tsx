import React from "react";
import "./Banner.css";
import Shimazaki from "../images/pexels-sora-shimazaki-5938440 1.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">
      <div className="flex">
        <div className=" py-[235px] pl-[360px] bg-[#A2B3BF] z-20 w-full flex flex-col justify-between ">
          <div className="content">
            <h4 className="mb-2">Welcome to Beautyness!!!</h4>
            <h1 className="mb-6">Beauty is power a smile is its sword.</h1>
            <p className="mb-8">
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </p>
            <Link to="/appointment">
              <button className="button p-0 block text-sm mt-8 !important">
                make a reservation
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full back  relative bg-[#1E2C30]">
          <div className="border-8 w-[561px] z-10 h-[663px] left-[-21px] top-1/2 -translate-y-1/2 overflow-hidden absolute border-white"></div>
          <img
            className="absolute top-1/2 -translate-y-1/2 z-30 left-[-78px]"
            src={Shimazaki}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;

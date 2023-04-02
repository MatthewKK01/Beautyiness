import React from "react";
import "./Services.css";
import bgCenter from "../images/bg-center.png";
import cucumber from "../images/Photo.jpg";
import faceMask from "../images/faceMask.jpg";

function Services() {
  return (
    <section className="services relative m-auto w-[1198px] flex flex-col items-center">
      <img
        src={bgCenter}
        alt=""
        className="absolute top-1/2 left-1/2 bg-[#134236] -z-10 translate-x-[-50%]"
      />
      <h4 className="mb-2">our services</h4>
      <h1 className=" w-[659px] text-center text-[45px] mb-[50px]">
        We are Experienced in making you very Beautiful
      </h1>
      <article className="grid grid-cols-2 grid-rows-2 gap-0">
        <img src={cucumber} alt="" />
        <div>sad</div>
        <div>dzetkisad</div>
        <img src={faceMask} alt="" />
      </article>
    </section>
  );
}

export default Services;

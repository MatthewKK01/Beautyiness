import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import ServicesComponent from "./ServicesComponent";

interface IProps {
  leftPhoto: string;
  bgCenter: string;
  rightPhoto: string;
}

function Services({ leftPhoto, bgCenter, rightPhoto }: IProps) {
  return (
    <section className="services relative py-[145px] m-auto w-[1198px] flex flex-col items-center">
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
        <img src={leftPhoto} alt="" />
        <div className="pt-7 pl-16">
          <ServicesComponent service={"face mask"} cost={48} />
          <ServicesComponent service={"full body massage"} cost={54} />
          <ServicesComponent service={"geothermal spa"} cost={54} />
          <ServicesComponent service={"sauna relax"} cost={73} />
          <Link to="/appointment">
            <button className="border-2 mt-9 border-smalt-blue-500 px-8 py-6 text-sm font-extrabold uppercase leading-4 tracking-widest">
              get an apointment
            </button>
          </Link>
        </div>
        <div className="pt-32 pr-16">
          <ServicesComponent service={"face mask"} cost={48} />
          <ServicesComponent service={"full body massage"} cost={54} />
          <ServicesComponent service={"geothermal spa"} cost={54} />
          <ServicesComponent service={"sauna relax"} cost={73} />
          <Link to="/appointment">
            <button className="border-2 mt-9 border-smalt-blue-500 px-8 py-6 text-sm font-extrabold uppercase leading-4 tracking-widest">
              get an apointment
            </button>
          </Link>
        </div>
        <img src={rightPhoto} alt="" />
      </article>
    </section>
  );
}

export default Services;

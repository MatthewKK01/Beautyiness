import React from "react";

import Banner from "../components/Banner";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Appointment from "../components/Appointment";
import Stories from "../components/Stories";
import "../components/Services.css";
import cucumber from "../images/Photo.jpg";
import faceMask from "../images/faceMask.jpg";
import ServicesComponent from "../components/ServicesComponent";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <section className="services relative m-auto py-[145px] w-[1198px] flex flex-col items-center">
        <div className="bgCenter absolute top-1/2 -z-10"></div>
        <h4 className="mb-2">our services</h4>
        <h1 className=" w-[659px] text-center text-[45px] mb-[50px]">
          We are Experienced in making you very Beautiful
        </h1>
        <article className="grid grid-cols-2 grid-rows-2 gap-0">
          <img src={cucumber} alt="" />
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
          <img src={faceMask} alt="" />
        </article>
      </section>
      <Testimonials />
      <Benefits />
      <Appointment />
      <Stories />
    </div>
  );
}

export default Home;

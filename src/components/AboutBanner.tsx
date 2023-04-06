import React from "react";
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <section className="aboutBanner py-[117px] px-[636px]">
      <div>
        <h4 className=" text-white text-center mb-2">short story about us</h4>
        <h1 className="text-white text-[55px]">
          The big story behind, our <br /> beautyness center
        </h1>
        <button className="block m-auto mt-8">make reservation</button>
      </div>
    </section>
  );
}

export default AboutBanner;

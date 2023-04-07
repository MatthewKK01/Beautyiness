import React from "react";
import "./AboutBanner.css";
import Button from "./Button";
import { Link } from "react-router-dom";
function AboutBanner() {
  return (
    <section className="aboutBanner py-[117px] px-[636px]">
      <div>
        <h4 className=" text-white text-center mb-2">short story about us</h4>
        <h1 className="text-white text-[55px]">
          The big story behind, our <br /> beautyness center
        </h1>
        <Link to="/appointment">
          <Button text={"make resetvation"} />
        </Link>
      </div>
    </section>
  );
}

export default AboutBanner;

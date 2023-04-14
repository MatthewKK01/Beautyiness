import React from "react";
import "./AboutBanner.css";
import Button from "./Button";

import { Link } from "react-router-dom";

interface IProps {
  title: String;
  content: String;
}

function AboutBanner({ title, content }: IProps) {
  return (
    <section className="aboutBanner py-[117px] px-[636px]">
      <div>
        <h4 className=" text-white text-center mb-2">{title}</h4>
        <h1 className="text-white text-[55px]">{content}</h1>
        <Link to="/appointment">
          <Button text={"make resetvation"} />
        </Link>
      </div>
    </section>
  );
}

export default AboutBanner;

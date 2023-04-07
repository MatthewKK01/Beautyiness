import React from "react";
import "./ShareUs.css";
import candles from "../images/santlebi.png";
import aveji from "../images/aveji.png";
import qvebi from "../images/qvebi.png";
import Button from "./Button";
import { Link } from "react-router-dom";
function ShareUs() {
  return (
    <section className="max-w-[1200px] py-[129px]   m-auto">
      <div className="grid grid-cols-2 mb-16">
        <article>
          <h4 className="text-left mb-2">Share Us</h4>
          <h1 className="text-left mb-8">Follow us on Instagram</h1>
          <p className="w-10/12 mt-6 mb-14">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words many desktop publishing
            packages.
          </p>
          <img src={candles} alt="" />
        </article>
        <div className="shareUs flex flex-col  gap-y-12">
          <img src={aveji} alt="" />
          <img src={qvebi} alt="" />
        </div>
      </div>
      <Link to="/contact">
        <Button text={"Contact Us"} />
      </Link>
    </section>
  );
}

export default ShareUs;

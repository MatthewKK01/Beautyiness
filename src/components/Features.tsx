import React from "react";
import "./Features.css";
import spa from "../images/spa.png";
import hair from "../images/hair.jpg";
import feet from "../images/feet.jpg";
import { Link } from "react-router-dom";
function Features() {
  return (
    <section className=" features px-[360px] py-[151px]">
      <div className="container grid grid-cols-3 m-auto gap-28">
        <div>
          <img className="featuresImage" src={spa} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <Link to="/services">
            <button className="readMore">Read More</button>
          </Link>
        </div>
        <div>
          <img className="featuresImage" src={hair} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <Link to="/services">
            <button className="readMore">Read More</button>
          </Link>
        </div>
        <div>
          <img className="featuresImage" src={feet} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <Link to="/services">
            <button className="readMore">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Features;

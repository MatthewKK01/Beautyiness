import React from "react";
import "./Features.css";
import spa from "../images/spa.png";
import hair from "../images/hair.jpg";
import feet from "../images/feet.jpg";
function Features() {
  return (
    <section className="px-[360px] py-[151px]">
      <div className="container grid grid-cols-3 m-auto gap-28">
        <div>
          <img src={spa} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img src={hair} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img src={feet} alt="" />
          <h1>Spa & Massage</h1>
          <p>
            If you are going to use a passage offer Lorem Ipsum, you need to be
            sure hidden in the middle of text.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Features;

import React from "react";
import "./Stories.css";
import rocks from "../images/rocks.png";
import qali from "../images/qali.png";
import meoreQali from "../images/meoreQali.png";

function Stories() {
  return (
    <section className="stories px-[360px] py-[148px]">
      <h4 className="text-center">Oor blog</h4>
      <h1 className="capitalize mb-10 mt-1">latest updates</h1>
      <article className="grid grid-cols-3 gap-11">
        <div className="w-[370px]">
          <img src={rocks} alt="" />

          <div className="bg-[#EDF5F7] py-7 px-7">
            <div className="flex items-center gap-3 mb-2">
              <h4>11TH AUGUST 2021</h4>
              <div className="border-2 border-[#272D32] h-0  w-5"></div>
              <h4>BY PETER BERGSON</h4>
            </div>
            <h2 className="mb-4">
              The energy efficiency of the hydrotherapy or swim
            </h2>
            <p className="m-0 w-80">
              The point of using Lorem Ipsum hiter that using making it look
              like others readable will get end.
            </p>
          </div>
        </div>
        <div className="w-[370px]">
          <img src={qali} alt="" />

          <div className="bg-[#EDF5F7] py-7 px-7">
            <div className="flex items-center gap-3 mb-2">
              <h4>11TH AUGUST 2021</h4>
              <div className="border-2 border-[#272D32] h-0  w-5"></div>
              <h4>BY PETER BERGSON</h4>
            </div>
            <h2 className="mb-4">Tips to improve your body via cleansing</h2>
            <p className="m-0 w-80">
              The point of using Lorem Ipsum hiter that using making it look
              like others readable will get end.
            </p>
          </div>
        </div>
        <div className="w-[370px]">
          <img src={meoreQali} alt="" />

          <div className="bg-[#EDF5F7] py-7 px-7">
            <div className="flex items-center gap-3 mb-2">
              <h4>11TH AUGUST 2021</h4>
              <div className="border-2 border-[#272D32] h-0 w-5"></div>
              <h4>BY PETER BERGSON</h4>
            </div>
            <h2 className="mb-4">Experience the beauty at our beauty spa</h2>
            <p className="m-0 w-80">
              The point of using Lorem Ipsum hiter that using making it look
              like others readable will get end.
            </p>
          </div>
        </div>
      </article>
      <button className="uppercase m-auto block mt-[60px]">
        view more stories
      </button>
    </section>
  );
}

export default Stories;

import React from "react";
import AboutBanner from "../components/AboutBanner";
import ServicesSection from "../components/ServicesSection";

import bgCenter from "../images/bg-center.png";
import cucumber from "../images/Photo.jpg";
import faceMask from "../images/faceMask.jpg";
import tmebi from "../images/tmebi.jpg";
import kvebi from "../images/kvebi.jpg";
import ServicesComponent from "../components/ServicesComponent";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <AboutBanner
        title={"Our Services"}
        content={"Well Experience Beauty at your Service"}
      />
      <ServicesSection
        leftPhoto={cucumber}
        bgCenter={bgCenter}
        rightPhoto={faceMask}
      />
      <article className="grid grid-cols-2 relative grid-rows-2 pb-32 gap-0 w-[1200px] m-auto">
        <img
          src={bgCenter}
          alt=""
          className="absolute top-1/2 left-1/2 bg-[#134236] -z-10 translate-x-[-50%] translate-y-[-50%]"
        />
        <img src={tmebi} alt="" />
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
        <img src={kvebi} alt="" />
      </article>
      <section className=" py-[131px] flex flex-col items-center justify-center bg-[#EBF3F5]">
        <div className="w-[1200px] m-auto">
          <h4 className="text-center">flat discount</h4>
          <h1 className="text-center mb-[14px] mt-[9px]">
            Claim upto 50% offer <br /> on the most popular services...
          </h1>
          <p className="text-center m-0">
            Our Retreat is not meant to be an occasional treat, but rather a
            part of your <br /> routine that restores balance to your daily
            life.
          </p>
          <div className="flex mt-9  justify-center">
            <div className="bg-white flex flex-col  border border-[#95BFCB] justify-center px-10 py-4">
              <div className=" flex mb-[18px] gap-x-5">
                <svg
                  className="mt-2"
                  width="30"
                  height="7"
                  viewBox="0 0 30 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="3.5" r="3" fill="#5C8692" />
                  <circle cx="15" cy="3.5" r="3" fill="#5C8692" />
                  <circle cx="3" cy="3.5" r="3" fill="#5C8692" />
                </svg>
                <span>
                  <strong className="font-extrabold ">MAIL US</strong> : <br />
                  info@beautyness.com
                </span>
              </div>
              <div className="flex gap-x-5">
                <svg
                  className="mt-2"
                  width="30"
                  height="7"
                  viewBox="0 0 30 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="3.5" r="3" fill="#5C8692" />
                  <circle cx="15" cy="3.5" r="3" fill="#5C8692" />
                  <circle cx="3" cy="3.5" r="3" fill="#5C8692" />
                </svg>
                <span>
                  <strong className="font-extrabold ">CALL US</strong> : <br />{" "}
                  (+22) 123 4568 009
                </span>
              </div>
            </div>
            <div className="bg-ebony-clay-500 px-8 py-3 text-center">
              <span className=" text-white flex items-center justify-center gap-[6px] mb-[6px]">
                <svg
                  width="5"
                  height="2"
                  viewBox="0 0 5 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="1" x2="5" y2="1" stroke="white" />
                </svg>
                <span className="flat flex flex-row ">get flat</span>
                <svg
                  width="5"
                  height="2"
                  viewBox="0 0 5 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="1" x2="5" y2="1" stroke="white" />
                </svg>
              </span>
              <svg
                className="mb-2"
                width="97"
                height="50"
                viewBox="0 0 99 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9248 49.25C13.5632 49.25 11.3423 48.7625 9.26234 47.7875C7.20401 46.8125 5.42734 45.4583 3.93234 43.725C2.43734 41.9917 1.36484 39.9767 0.714844 37.68L9.22984 35.405C9.51151 36.51 10.0098 37.4633 10.7248 38.265C11.4615 39.0667 12.3065 39.695 13.2598 40.15C14.2348 40.5833 15.2315 40.8 16.2498 40.8C17.5932 40.8 18.8173 40.475 19.9223 39.825C21.049 39.175 21.9373 38.2975 22.5873 37.1925C23.259 36.0875 23.5948 34.8633 23.5948 33.52C23.5948 32.1767 23.259 30.9525 22.5873 29.8475C21.9373 28.7425 21.049 27.865 19.9223 27.215C18.8173 26.565 17.5932 26.24 16.2498 26.24C14.6032 26.24 13.2598 26.5217 12.2198 27.085C11.1798 27.6267 10.3998 28.1467 9.87984 28.645L2.40484 26.37L3.83484 1.475H29.3798V9.73H8.70984L11.8298 6.805L10.8548 22.86L9.35984 21.04C10.5298 20.0867 11.8623 19.3933 13.3573 18.96C14.8523 18.5267 16.2498 18.31 17.5498 18.31C20.4965 18.31 23.0857 18.9708 25.3173 20.2925C27.5707 21.5925 29.3257 23.3908 30.5823 25.6875C31.8607 27.9625 32.4998 30.5733 32.4998 33.52C32.4998 36.4667 31.7307 39.1317 30.1923 41.515C28.654 43.8767 26.6282 45.7617 24.1148 47.17C21.6015 48.5567 18.8715 49.25 15.9248 49.25Z"
                  fill="white"
                />
                <path
                  d="M54.3962 49.25C50.9295 49.25 47.8962 48.5242 45.2962 47.0725C42.6962 45.6208 40.6704 43.595 39.2187 40.995C37.767 38.395 37.0412 35.3617 37.0412 31.895V17.855C37.0412 14.3883 37.767 11.355 39.2187 8.755C40.6704 6.155 42.6962 4.12916 45.2962 2.6775C47.8962 1.22583 50.9295 0.5 54.3962 0.5C57.8629 0.5 60.8962 1.22583 63.4962 2.6775C66.0962 4.12916 68.122 6.155 69.5737 8.755C71.0254 11.355 71.7512 14.3883 71.7512 17.855V31.895C71.7512 35.3617 71.0254 38.395 69.5737 40.995C68.122 43.595 66.0962 45.6208 63.4962 47.0725C60.8962 48.5242 57.8629 49.25 54.3962 49.25ZM54.3962 40.865C55.9562 40.865 57.3645 40.4967 58.6212 39.76C59.8779 39.0233 60.8745 38.0267 61.6112 36.77C62.3479 35.5133 62.7162 34.105 62.7162 32.545V17.14C62.7162 15.58 62.3479 14.1717 61.6112 12.915C60.8745 11.6583 59.8779 10.6617 58.6212 9.925C57.3645 9.18833 55.9562 8.82 54.3962 8.82C52.8362 8.82 51.4279 9.18833 50.1712 9.925C48.9145 10.6617 47.9179 11.6583 47.1812 12.915C46.4445 14.1717 46.0762 15.58 46.0762 17.14V32.545C46.0762 34.105 46.4445 35.5133 47.1812 36.77C47.9179 38.0267 48.9145 39.0233 50.1712 39.76C51.4279 40.4967 52.8362 40.865 54.3962 40.865Z"
                  fill="white"
                />
                <path
                  d="M77.24 48.275L75.74 46.775L95.885 26.675L97.385 28.16L77.24 48.275ZM92.885 48.725C91.895 48.725 90.99 48.485 90.17 48.005C89.36 47.515 88.71 46.865 88.22 46.055C87.73 45.235 87.485 44.325 87.485 43.325C87.485 42.345 87.735 41.445 88.235 40.625C88.735 39.805 89.395 39.15 90.215 38.66C91.035 38.17 91.925 37.925 92.885 37.925C93.875 37.925 94.78 38.17 95.6 38.66C96.42 39.14 97.07 39.79 97.55 40.61C98.04 41.42 98.285 42.325 98.285 43.325C98.285 44.325 98.04 45.235 97.55 46.055C97.07 46.865 96.42 47.515 95.6 48.005C94.78 48.485 93.875 48.725 92.885 48.725ZM92.885 46.73C93.495 46.73 94.06 46.575 94.58 46.265C95.1 45.955 95.515 45.545 95.825 45.035C96.135 44.515 96.29 43.945 96.29 43.325C96.29 42.705 96.135 42.14 95.825 41.63C95.515 41.11 95.1 40.695 94.58 40.385C94.06 40.075 93.495 39.92 92.885 39.92C92.265 39.92 91.695 40.075 91.175 40.385C90.665 40.695 90.25 41.11 89.93 41.63C89.62 42.14 89.465 42.705 89.465 43.325C89.465 43.945 89.62 44.515 89.93 45.035C90.25 45.545 90.665 45.955 91.175 46.265C91.695 46.575 92.265 46.73 92.885 46.73ZM80.24 37.025C79.25 37.025 78.345 36.785 77.525 36.305C76.705 35.815 76.05 35.165 75.56 34.355C75.08 33.535 74.84 32.625 74.84 31.625C74.84 30.645 75.09 29.745 75.59 28.925C76.09 28.105 76.75 27.45 77.57 26.96C78.39 26.47 79.28 26.225 80.24 26.225C81.23 26.225 82.13 26.47 82.94 26.96C83.76 27.44 84.415 28.09 84.905 28.91C85.395 29.72 85.64 30.625 85.64 31.625C85.64 32.625 85.395 33.535 84.905 34.355C84.415 35.165 83.76 35.815 82.94 36.305C82.13 36.785 81.23 37.025 80.24 37.025ZM80.24 35.03C80.86 35.03 81.425 34.875 81.935 34.565C82.455 34.255 82.87 33.845 83.18 33.335C83.49 32.815 83.645 32.245 83.645 31.625C83.645 31.005 83.49 30.44 83.18 29.93C82.87 29.41 82.455 28.995 81.935 28.685C81.425 28.375 80.86 28.22 80.24 28.22C79.62 28.22 79.05 28.375 78.53 28.685C78.02 28.995 77.61 29.41 77.3 29.93C76.99 30.44 76.835 31.005 76.835 31.625C76.835 32.245 76.99 32.815 77.3 33.335C77.61 33.845 78.02 34.255 78.53 34.565C79.05 34.875 79.62 35.03 80.24 35.03Z"
                  fill="white"
                />
              </svg>
              <span className="discount text-center ">Discount</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

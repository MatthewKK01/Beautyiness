import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

function Error404() {
  return (
    <section className="error px-[685px] py-[333px] flex flex-col justify-center items-center">
      <svg
        width="381"
        height="162"
        viewBox="0 0 381 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2_587)">
          <path
            d="M64.6938 148V125.6H2.09375V100.2L47.4938 4H78.6938L33.2938 100.2H64.6938V64.2H92.2938V100.2H105.094V125.6H92.2938V148H64.6938Z"
            fill="#7A9CA5"
          />
          <path
            d="M186.541 151C175.874 151 166.541 148.767 158.541 144.3C150.541 139.833 144.307 133.6 139.841 125.6C135.374 117.6 133.141 108.267 133.141 97.6V54.4C133.141 43.7333 135.374 34.4 139.841 26.4C144.307 18.4 150.541 12.1667 158.541 7.69999C166.541 3.23333 175.874 1 186.541 1C197.207 1 206.541 3.23333 214.541 7.69999C222.541 12.1667 228.774 18.4 233.241 26.4C237.707 34.4 239.941 43.7333 239.941 54.4V97.6C239.941 108.267 237.707 117.6 233.241 125.6C228.774 133.6 222.541 139.833 214.541 144.3C206.541 148.767 197.207 151 186.541 151ZM186.541 125.2C191.341 125.2 195.674 124.067 199.541 121.8C203.407 119.533 206.474 116.467 208.741 112.6C211.007 108.733 212.141 104.4 212.141 99.6V52.2C212.141 47.4 211.007 43.0667 208.741 39.2C206.474 35.3333 203.407 32.2667 199.541 30C195.674 27.7333 191.341 26.6 186.541 26.6C181.741 26.6 177.407 27.7333 173.541 30C169.674 32.2667 166.607 35.3333 164.341 39.2C162.074 43.0667 160.941 47.4 160.941 52.2V99.6C160.941 104.4 162.074 108.733 164.341 112.6C166.607 116.467 169.674 119.533 173.541 121.8C177.407 124.067 181.741 125.2 186.541 125.2Z"
            fill="#7A9CA5"
          />
          <path
            d="M330.506 148V125.6H267.906V100.2L313.306 4H344.506L299.106 100.2H330.506V64.2H358.106V100.2H370.906V125.6H358.106V148H330.506Z"
            fill="#7A9CA5"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_587"
            x="0.09375"
            y="0"
            width="380.812"
            height="162"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="5" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_587"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_587"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <h1 className="capitalize text-[40px] mt-10">Page Not Found !!!</h1>
      <p className="mt-4 mb-10 text-center text-[105%]">
        The page you are looking for doesn't exist. Please try searching for
        some other page, or return to the website's homepage to find what you're
        looking for.
      </p>
      <Link to="/">
        <button className="py-6 px-16 uppercase bg-smalt-blue-500 text-white font-extrabold text-sm">
          Back To Home
        </button>
      </Link>
    </section>
  );
}

export default Error404;

import React from "react";

interface IProps {
  service: String;
  cost: number;
}

function ServicesComponent({ service, cost }: IProps) {
  return (
    <div className="border-b border-[#9BB7BF] pb-5 flex flex-col justify-center items-start">
      <h2
        style={{ fontFamily: "Playfair Display" }}
        className="font-bold text-[22px] capitalize mb-1"
      >
        {service} ...................................{" "}
        <span className="font-normal text-lg lowercase"> from </span>
        <span
          style={{ fontFamily: "Playfair Display" }}
          className="font-normal text-[22px]"
        >
          ${cost.toFixed(2)}
        </span>
      </h2>
      <p className="m-0">
        The versions have evolved over the sometimes by accident.
      </p>
    </div>
  );
}

export default ServicesComponent;

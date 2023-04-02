import React from "react";
import "./Testimonials.css";
import james from "../images/james.jpg";
import lisa from "../images/lisa.png";
import icon from "../images/Icon.png";

function Testimonials() {
  return (
    <section className="testimonials py-36 bg-[#EDF5F7]">
      <div className="max-w-[1200px] m-auto flex flex-col items-center">
        <h4 className="">Testimonials</h4>
        <h1>What our Customers says...</h1>
        <div className="testimonials flex flex-row gap-9">
          <div className="1 ">
            <p>
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>
            <div className="user px-12 py-7 flex flex-row justify-between items-center bg-[#1E2C30]">
              <img
                src={james}
                className="border-2 border-solid border-white"
                alt=""
              />
              <div className="flex flex-col">
                <svg
                  width="81"
                  height="18"
                  viewBox="0 0 81 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.6351 7.13663L74.7273 6.71813L72.8092 2.24963L70.8912 6.72488L65.9834 7.13663L69.7103 10.3294L68.5909 15.0746L72.8092 12.5569L77.0276 15.0746L75.915 10.3294L79.6351 7.13663ZM72.8092 11.2946V5.01713L73.9765 7.74413L76.9662 8.00063L74.7 9.94463L75.3826 12.8336L72.8092 11.2946Z"
                    fill="white"
                  />
                  <g clip-path="url(#clip0_2_2935)">
                    <path
                      d="M8.19108 12.5569L12.4094 15.0746L11.29 10.3294L15.0169 7.13663L10.1091 6.72488L8.19108 2.24963L6.27302 6.72488L1.36523 7.13663L5.09214 10.3294L3.97271 15.0746L8.19108 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip1_2_2935)">
                    <path
                      d="M24.5729 12.5569L28.7913 15.0746L27.6718 10.3294L31.3988 7.13663L26.491 6.72488L24.5729 2.24963L22.6549 6.72488L17.7471 7.13663L21.474 10.3294L20.3545 15.0746L24.5729 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip2_2_2935)">
                    <path
                      d="M40.9547 12.5569L45.1731 15.0746L44.0537 10.3294L47.7806 7.13663L42.8728 6.72488L40.9547 2.24963L39.0367 6.72488L34.1289 7.13663L37.8558 10.3294L36.7364 15.0746L40.9547 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip3_2_2935)">
                    <path
                      d="M56.4274 12.5569L60.6458 15.0746L59.5263 10.3294L63.2532 7.13663L58.3455 6.72488L56.4274 2.24963L54.5093 6.72488L49.6016 7.13663L53.3285 10.3294L52.209 15.0746L56.4274 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(0 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip1_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(16.3818 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip2_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(32.7637 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip3_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(48.2363 0.900024)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="text-xl text-white capitalize">
                  james williams
                </h3>
                <span className="text-sm text-white capitalize">
                  united states
                </span>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="2">
            <p>
              “ It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>
            <div className="user px-12 py-7 flex flex-row justify-between items-center bg-[#1E2C30]">
              <img
                src={lisa}
                className="border-2 border-solid border-white"
                alt=""
              />
              <div className="flex flex-col">
                <svg
                  width="81"
                  height="18"
                  viewBox="0 0 81 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.6351 7.13663L74.7273 6.71813L72.8092 2.24963L70.8912 6.72488L65.9834 7.13663L69.7103 10.3294L68.5909 15.0746L72.8092 12.5569L77.0276 15.0746L75.915 10.3294L79.6351 7.13663ZM72.8092 11.2946V5.01713L73.9765 7.74413L76.9662 8.00063L74.7 9.94463L75.3826 12.8336L72.8092 11.2946Z"
                    fill="white"
                  />
                  <g clip-path="url(#clip0_2_2935)">
                    <path
                      d="M8.19108 12.5569L12.4094 15.0746L11.29 10.3294L15.0169 7.13663L10.1091 6.72488L8.19108 2.24963L6.27302 6.72488L1.36523 7.13663L5.09214 10.3294L3.97271 15.0746L8.19108 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip1_2_2935)">
                    <path
                      d="M24.5729 12.5569L28.7913 15.0746L27.6718 10.3294L31.3988 7.13663L26.491 6.72488L24.5729 2.24963L22.6549 6.72488L17.7471 7.13663L21.474 10.3294L20.3545 15.0746L24.5729 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip2_2_2935)">
                    <path
                      d="M40.9547 12.5569L45.1731 15.0746L44.0537 10.3294L47.7806 7.13663L42.8728 6.72488L40.9547 2.24963L39.0367 6.72488L34.1289 7.13663L37.8558 10.3294L36.7364 15.0746L40.9547 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <g clip-path="url(#clip3_2_2935)">
                    <path
                      d="M56.4274 12.5569L60.6458 15.0746L59.5263 10.3294L63.2532 7.13663L58.3455 6.72488L56.4274 2.24963L54.5093 6.72488L49.6016 7.13663L53.3285 10.3294L52.209 15.0746L56.4274 12.5569Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(0 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip1_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(16.3818 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip2_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(32.7637 0.900024)"
                      />
                    </clipPath>
                    <clipPath id="clip3_2_2935">
                      <rect
                        width="16.382"
                        height="16.2"
                        fill="white"
                        transform="translate(48.2363 0.900024)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className="text-xl text-white capitalize">Lieo Jessica</h3>
                <span className="text-sm text-white capitalize">
                  United kingdom
                </span>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

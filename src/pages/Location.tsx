import React from "react";
import AboutBanner from "../components/AboutBanner";
import tables from "../images/tables.jpg";
import desk from "../images/desk.jpg";
import spa from "../images/spa.jpg";

function Location() {
  return (
    <>
      <AboutBanner title={"Where are here!"} content={"Our Locations"} />
      <section className="w-[1200px] m-auto py-32 flex flex-col gap-28">
        <article className="flex justify-center items-center gap-28 ">
          <div className="divbg relative">
            <div className="back absolute right-0 top-0"></div>
            <img
              src={tables}
              className="absolute bottom-0 shadow-lg left-0"
              alt=""
            />
          </div>
          <div>
            <h4 className="mb-2">Columbia</h4>
            <h1 className="text-left w-[435px] mb-12">Washington D.C</h1>

            <div className="grid grid-rows-3 gap-8">
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M28.1252 45.0837V30.5003H36.8752V45.0837M19.3752 26.1253L32.5002 15.917L45.6252 26.1253V42.167C45.6252 42.9405 45.318 43.6824 44.771 44.2294C44.224 44.7764 43.4821 45.0837 42.7086 45.0837H22.2919C21.5184 45.0837 20.7765 44.7764 20.2295 44.2294C19.6825 43.6824 19.3752 42.9405 19.3752 42.167V26.1253Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    visit us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    NO.09a, Downtown, SAN DIEAGO, USA
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M47.0842 24.2497C47.0842 22.6455 45.7717 21.333 44.1675 21.333H20.8341C19.23 21.333 17.9175 22.6455 17.9175 24.2497M47.0842 24.2497V41.7497C47.0842 43.3538 45.7717 44.6663 44.1675 44.6663H20.8341C19.23 44.6663 17.9175 43.3538 17.9175 41.7497V24.2497M47.0842 24.2497L32.5008 34.4583L17.9175 24.2497"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    drop us:
                  </h1>
                  <p className="text-base m-0 text-black uppercase">
                    support@beautyness.com
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M35.8125 24.75C37.0335 24.9882 38.1555 25.5853 39.0351 26.4649C39.9147 27.3445 40.5118 28.4666 40.75 29.6875L35.8125 24.75ZM35.8125 19.75C38.3491 20.0318 40.7145 21.1677 42.5203 22.9713C44.3262 24.7748 45.4651 27.1388 45.75 29.675L35.8125 19.75ZM44.5 39.65V43.4C44.5015 43.7481 44.4301 44.0927 44.2907 44.4117C44.1512 44.7307 43.9467 45.017 43.6901 45.2523C43.4336 45.4877 43.1308 45.6669 42.801 45.7784C42.4712 45.8899 42.1218 45.9313 41.775 45.9C37.9286 45.4821 34.2338 44.1677 30.9875 42.0625C27.9673 40.1433 25.4067 37.5827 23.4875 34.5625C21.375 31.3015 20.0603 27.5887 19.65 23.725C19.6188 23.3793 19.6599 23.031 19.7707 22.702C19.8814 22.3731 20.0595 22.0709 20.2935 21.8145C20.5275 21.5582 20.8123 21.3534 21.1298 21.2132C21.4473 21.0729 21.7905 21.0003 22.1375 21H25.8875C26.4942 20.994 27.0823 21.2088 27.5422 21.6044C28.0022 22 28.3026 22.5493 28.3875 23.15C28.5458 24.3501 28.8394 25.5284 29.2625 26.6625C29.4307 27.1099 29.4671 27.5961 29.3674 28.0636C29.2677 28.5311 29.0361 28.9601 28.7 29.3L27.1125 30.8875C28.892 34.0169 31.4831 36.6081 34.6125 38.3875L36.2 36.8C36.5399 36.4639 36.969 36.2323 37.4364 36.1326C37.9039 36.0329 38.3901 36.0693 38.8375 36.2375C39.9716 36.6607 41.15 36.9542 42.35 37.1125C42.9572 37.1982 43.5118 37.504 43.9082 37.9719C44.3046 38.4397 44.5152 39.037 44.5 39.65Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    call us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    Call: 1-800-123-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="flex flex-row-reverse justify-center items-center gap-28 ">
          <div className="divbg relative">
            <div className="back absolute right-0 top-0"></div>
            <img
              src={desk}
              className="absolute bottom-0 shadow-lg left-0"
              alt=""
            />
          </div>
          <div>
            <h4 className="mb-2">San Francisco</h4>
            <h1 className="text-left w-[435px] mb-12">New York</h1>

            <div className="grid grid-rows-3 gap-8">
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M28.1252 45.0837V30.5003H36.8752V45.0837M19.3752 26.1253L32.5002 15.917L45.6252 26.1253V42.167C45.6252 42.9405 45.318 43.6824 44.771 44.2294C44.224 44.7764 43.4821 45.0837 42.7086 45.0837H22.2919C21.5184 45.0837 20.7765 44.7764 20.2295 44.2294C19.6825 43.6824 19.3752 42.9405 19.3752 42.167V26.1253Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    visit us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    NO.09a, Downtown, SAN DIEAGO, USA
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M47.0842 24.2497C47.0842 22.6455 45.7717 21.333 44.1675 21.333H20.8341C19.23 21.333 17.9175 22.6455 17.9175 24.2497M47.0842 24.2497V41.7497C47.0842 43.3538 45.7717 44.6663 44.1675 44.6663H20.8341C19.23 44.6663 17.9175 43.3538 17.9175 41.7497V24.2497M47.0842 24.2497L32.5008 34.4583L17.9175 24.2497"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    drop us:
                  </h1>
                  <p className="text-base m-0 text-black uppercase">
                    support@beautyness.com
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M35.8125 24.75C37.0335 24.9882 38.1555 25.5853 39.0351 26.4649C39.9147 27.3445 40.5118 28.4666 40.75 29.6875L35.8125 24.75ZM35.8125 19.75C38.3491 20.0318 40.7145 21.1677 42.5203 22.9713C44.3262 24.7748 45.4651 27.1388 45.75 29.675L35.8125 19.75ZM44.5 39.65V43.4C44.5015 43.7481 44.4301 44.0927 44.2907 44.4117C44.1512 44.7307 43.9467 45.017 43.6901 45.2523C43.4336 45.4877 43.1308 45.6669 42.801 45.7784C42.4712 45.8899 42.1218 45.9313 41.775 45.9C37.9286 45.4821 34.2338 44.1677 30.9875 42.0625C27.9673 40.1433 25.4067 37.5827 23.4875 34.5625C21.375 31.3015 20.0603 27.5887 19.65 23.725C19.6188 23.3793 19.6599 23.031 19.7707 22.702C19.8814 22.3731 20.0595 22.0709 20.2935 21.8145C20.5275 21.5582 20.8123 21.3534 21.1298 21.2132C21.4473 21.0729 21.7905 21.0003 22.1375 21H25.8875C26.4942 20.994 27.0823 21.2088 27.5422 21.6044C28.0022 22 28.3026 22.5493 28.3875 23.15C28.5458 24.3501 28.8394 25.5284 29.2625 26.6625C29.4307 27.1099 29.4671 27.5961 29.3674 28.0636C29.2677 28.5311 29.0361 28.9601 28.7 29.3L27.1125 30.8875C28.892 34.0169 31.4831 36.6081 34.6125 38.3875L36.2 36.8C36.5399 36.4639 36.969 36.2323 37.4364 36.1326C37.9039 36.0329 38.3901 36.0693 38.8375 36.2375C39.9716 36.6607 41.15 36.9542 42.35 37.1125C42.9572 37.1982 43.5118 37.504 43.9082 37.9719C44.3046 38.4397 44.5152 39.037 44.5 39.65Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    call us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    Call: 1-800-123-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="flex justify-center items-center gap-28 ">
          <div className="divbg relative">
            <div className="back absolute right-0 top-0"></div>
            <img
              src={spa}
              className="absolute bottom-0 shadow-lg left-0"
              alt=""
            />
          </div>
          <div>
            <h4 className="mb-2">France</h4>
            <h1 className="text-left w-[435px] mb-12">Paris</h1>

            <div className="grid grid-rows-3 gap-8">
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M28.1252 45.0837V30.5003H36.8752V45.0837M19.3752 26.1253L32.5002 15.917L45.6252 26.1253V42.167C45.6252 42.9405 45.318 43.6824 44.771 44.2294C44.224 44.7764 43.4821 45.0837 42.7086 45.0837H22.2919C21.5184 45.0837 20.7765 44.7764 20.2295 44.2294C19.6825 43.6824 19.3752 42.9405 19.3752 42.167V26.1253Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    visit us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    NO.09a, Downtown, SAN DIEAGO, USA
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M47.0842 24.2497C47.0842 22.6455 45.7717 21.333 44.1675 21.333H20.8341C19.23 21.333 17.9175 22.6455 17.9175 24.2497M47.0842 24.2497V41.7497C47.0842 43.3538 45.7717 44.6663 44.1675 44.6663H20.8341C19.23 44.6663 17.9175 43.3538 17.9175 41.7497V24.2497M47.0842 24.2497L32.5008 34.4583L17.9175 24.2497"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    drop us:
                  </h1>
                  <p className="text-base m-0 text-black uppercase">
                    support@beautyness.com
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.00024"
                    y="1"
                    width="63"
                    height="63"
                    stroke="#7A9CA5"
                    stroke-width="2"
                  />
                  <path
                    d="M35.8125 24.75C37.0335 24.9882 38.1555 25.5853 39.0351 26.4649C39.9147 27.3445 40.5118 28.4666 40.75 29.6875L35.8125 24.75ZM35.8125 19.75C38.3491 20.0318 40.7145 21.1677 42.5203 22.9713C44.3262 24.7748 45.4651 27.1388 45.75 29.675L35.8125 19.75ZM44.5 39.65V43.4C44.5015 43.7481 44.4301 44.0927 44.2907 44.4117C44.1512 44.7307 43.9467 45.017 43.6901 45.2523C43.4336 45.4877 43.1308 45.6669 42.801 45.7784C42.4712 45.8899 42.1218 45.9313 41.775 45.9C37.9286 45.4821 34.2338 44.1677 30.9875 42.0625C27.9673 40.1433 25.4067 37.5827 23.4875 34.5625C21.375 31.3015 20.0603 27.5887 19.65 23.725C19.6188 23.3793 19.6599 23.031 19.7707 22.702C19.8814 22.3731 20.0595 22.0709 20.2935 21.8145C20.5275 21.5582 20.8123 21.3534 21.1298 21.2132C21.4473 21.0729 21.7905 21.0003 22.1375 21H25.8875C26.4942 20.994 27.0823 21.2088 27.5422 21.6044C28.0022 22 28.3026 22.5493 28.3875 23.15C28.5458 24.3501 28.8394 25.5284 29.2625 26.6625C29.4307 27.1099 29.4671 27.5961 29.3674 28.0636C29.2677 28.5311 29.0361 28.9601 28.7 29.3L27.1125 30.8875C28.892 34.0169 31.4831 36.6081 34.6125 38.3875L36.2 36.8C36.5399 36.4639 36.969 36.2323 37.4364 36.1326C37.9039 36.0329 38.3901 36.0693 38.8375 36.2375C39.9716 36.6607 41.15 36.9542 42.35 37.1125C42.9572 37.1982 43.5118 37.504 43.9082 37.9719C44.3046 38.4397 44.5152 39.037 44.5 39.65Z"
                    stroke="#7A9CA5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>
                  <h1 className="text-2xl text-left mb-2 capitalize">
                    call us:
                  </h1>
                  <p className="text-base m-0 text-black">
                    Call: 1-800-123-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Location;

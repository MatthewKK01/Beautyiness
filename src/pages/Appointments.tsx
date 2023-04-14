import React from "react";
import AboutBanner from "../components/AboutBanner";

import shelves from "../images/shelves.jpg";

function Appointments() {
  return (
    <section>
      <AboutBanner
        title={"get in touch with us"}
        content={"We Are Ready To Assist You In 24x7"}
      />
      <article className="justify-center items-center gap-28 pt-36 pb-28 w-[1200px] flex m-auto">
        <div className="divbg relative">
          <div className="backbg absolute right-0 top-0"></div>
          <img
            src={shelves}
            className="absolute bottom-0 shadow-lg left-0"
            alt=""
          />
        </div>
        <div>
          <h4 className="mb-2">Get in Touch!</h4>
          <h1 className="text-left w-[435px]">
            We are here to help you always...
          </h1>
          <p className="w-[535px] mt-6 mb-11">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to many
            desktop publishing packages.
          </p>
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
                <h1 className="text-2xl text-left mb-2 capitalize">drop us:</h1>
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
                <h1 className="text-2xl text-left mb-2 capitalize">call us:</h1>
                <p className="text-base m-0 text-black">Call: 1-800-123-9999</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section className="bg-[#EBF3F5] py-32">
        <div className="w-[1200px] m-auto flex flex-col items-center justify-center">
          <h4 className="text-center">SCHEDULE YOUR PRESENCE</h4>
          <h1 className="text-center">Make an Appointment</h1>
          <p className="mt-5 mb-16 text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the <br /> majority have suffered alteration in some form.
          </p>

          <form className="form w-[1010px] bg-white p-24 flex flex-col items-center gap-y-4">
            <div className="flex flex-row relative w-full  items-center">
              <input
                placeholder="Name"
                className="py-[18px] w-full px-[54px]"
                type="text"
              />
              <svg
                className="absolute left-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row relative w-full  items-center">
              <input
                placeholder="Email"
                className="py-[18px] w-full px-[54px]"
                type="email"
              />
              <svg
                className="absolute left-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row relative w-full  items-center">
              <input
                placeholder="Phone"
                className="py-[18px] w-full px-[54px]"
                type="number"
              />
              <svg
                className="absolute left-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row relative w-full  items-center">
              <input
                placeholder="Services you need"
                className="py-[18px] w-full px-[54px]"
                type="text"
              />
              <svg
                className="absolute left-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-row relative w-full">
              <textarea
                className="h-[136px] py-[18px] w-full resize-none px-[54px]"
                name=""
                id=""
                cols={30}
                rows={20}
                placeholder="Any note for us"
              ></textarea>
              <svg
                className="absolute left-4 top-[21px]"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.042 3.83398H4.33366C3.82533 3.83398 3.33782 4.03592 2.97837 4.39536C2.61893 4.75481 2.41699 5.24232 2.41699 5.75065V19.1673C2.41699 19.6756 2.61893 20.1632 2.97837 20.5226C3.33782 20.882 3.82533 21.084 4.33366 21.084H17.7503C18.2587 21.084 18.7462 20.882 19.1056 20.5226C19.4651 20.1632 19.667 19.6756 19.667 19.1673V12.459"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.2295 2.39621C18.6107 2.01496 19.1278 1.80078 19.667 1.80078C20.2062 1.80078 20.7232 2.01496 21.1045 2.39621C21.4857 2.77746 21.6999 3.29455 21.6999 3.83371C21.6999 4.37288 21.4857 4.88996 21.1045 5.27121L12.0003 14.3754L8.16699 15.3337L9.12533 11.5004L18.2295 2.39621Z"
                  stroke="#5C8692"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <button className=" bg-smalt-blue-500 w-full text-white uppercase font-bold flex flex-row items-center justify-center gap-3 py-[23px] px-[109px]">
              Get an appointment
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default Appointments;

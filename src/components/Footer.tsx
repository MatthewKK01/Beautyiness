import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ebony-clay-500">
      <div className="py-16 w-[1200px] m-auto">
        <div className="beauty flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="33"
                cy="32.5"
                r="30"
                stroke="#5C8692"
                stroke-width="5"
              />
              <path
                d="M49.2812 23.999C49.5285 26.5686 48.5984 29.1452 46.6956 31.1621L35.307 43.2689L19.6204 44.7787L18.3001 31.061L29.7087 18.9686C31.6115 16.9516 34.3313 15.6597 37.2696 15.3769L47.5468 15.6229L49.2812 23.999Z"
                stroke="#5C8692"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M39.8941 23.6367L10.3486 53.1822"
                stroke="#5C8692"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41.8641 35.4551H28.0762"
                stroke="#5C8692"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M39.8943 23.6367H26.1064"
                stroke="#5C8692"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="capitalize text-white font-bold text-[40px] text-left">
              beautyness
            </h1>
          </div>
          <div>
            <nav>
              <ul className="flex gap-2">
                <li className="w-[55px] h-[55px] border-2 border-smalt-blue-500 flex justify-center items-center">
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.68359 10.375L10.1758 7.14062H7.04688V5.03125C7.04688 4.11719 7.46875 3.27344 8.875 3.27344H10.3164V0.496094C10.3164 0.496094 9.01562 0.25 7.78516 0.25C5.21875 0.25 3.53125 1.83203 3.53125 4.64453V7.14062H0.648438V10.375H3.53125V18.25H7.04688V10.375H9.68359Z"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="w-[55px] h-[55px] border-2 border-smalt-blue-500 flex justify-center items-center">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="w-[55px] h-[55px] border-2 border-smalt-blue-500 flex justify-center items-center">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                      fill="white"
                    />
                  </svg>
                </li>
                <li className="w-[55px] h-[55px] border-2 border-smalt-blue-500 flex justify-center items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z"
                      fill="white"
                    />
                  </svg>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="w-full border border-white my-[52px] opacity-10"></div>
        <article className="cnt">
          <nav className="flex gap-32 justify-between">
            <ul className="text-white font-bold text-2xl capitalize ">
              explore
              <Link to={"/"}>
                <li className="mt-5">Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About Us</li>{" "}
              </Link>
              <Link to={"/services"}>
                <li>Services</li>
              </Link>
              <Link to={"/appointment"}>
                <li>Appointments</li>
              </Link>
              <Link to={"/blog"}>
                {" "}
                <li>Blog</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact Us</li>
              </Link>
            </ul>
            <ul className="text-white font-bold text-2xl capitalize ">
              keep in touch
              <li className="mt-5 flex">
                <span className="font-bold mr-[14px]">Address :</span> 24A
                Kingston St, Los Vegas <br /> NC 28202, USA.
              </li>
              <li>
                <span className="font-bold mr-[47px]">Mail :</span>{" "}
                support@doctors.com
              </li>
              <li>
                <span className="font-bold mr-[29px]">Phone :</span> (+22) 123 -
                4567 - 900
              </li>
            </ul>
            <ul className="text-white font-bold text-2xl capitalize">
              Working Hours
              <li className="mt-5">Mon to Fri: 7am - 6pm</li>
              <li>Sat: 9am - 7pm</li>
              <li>Sun: 9am - 6pm</li>
            </ul>
          </nav>
        </article>
      </div>
      <article className="copyright bg-[#111E22] text-white text-center p-5 font-normal text-lg">
        <span>&copy;</span> Copyright 2023. Drafted by Mate Kavelashvili.
      </article>
    </footer>
  );
}

export default Footer;

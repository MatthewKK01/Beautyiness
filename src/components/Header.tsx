import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <header className="px-14 py-9 flex justify-between items-center">
        <div className="logo flex flex-row items-center gap-11">
          <div className="flex flex-row items-center justify-between">
            <svg
              className="mr-3"
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16.5"
                cy="17"
                r="15.25"
                stroke="#7A9CA5"
                strokeWidth="2.5"
              />
              <path
                d="M24.766 12.6842C24.8916 13.9888 24.4194 15.2969 23.4533 16.3209L17.6715 22.4674L9.70748 23.2339L9.03718 16.2696L14.8292 10.1303C15.7953 9.10633 17.1761 8.45041 18.6679 8.30683L23.8855 8.43175L24.766 12.6842Z"
                stroke="#7A9CA5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12.5L5 27.5"
                stroke="#7A9CA5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 18.5H14"
                stroke="#7A9CA5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12.5H13"
                stroke="#7A9CA5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="beautyness">Beautyness</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <svg
              className="mr-3"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95L13.9381 5ZM13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94L13.9381 1ZM20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66195 17.3147 5.61345 15.2662 4.07812 12.85C2.3881 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4147 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z"
                stroke="#7A9CA5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="phonenumber">Call Us - (+22) 123 456 7890</span>
          </div>
        </div>
        <nav className="flex flex-row items-center">
          <ul className="flex flex-row gap-8 mr-8">
            <li>Home</li>
            <li>Pages</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div className="social flex items-center gap-[30px] mx-8">
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.60645 9.5L9.04395 6.625H6.2627V4.75C6.2627 3.9375 6.6377 3.1875 7.8877 3.1875H9.16895V0.71875C9.16895 0.71875 8.0127 0.5 6.91895 0.5C4.6377 0.5 3.1377 1.90625 3.1377 4.40625V6.625H0.575195V9.5H3.1377V16.5H6.2627V9.5H8.60645Z"
                fill="#141414"
              />
            </svg>
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2314 3.25C15.8564 2.78125 16.4189 2.21875 16.8564 1.5625C16.2939 1.8125 15.6377 2 14.9814 2.0625C15.6689 1.65625 16.1689 1.03125 16.4189 0.25C15.7939 0.625 15.0752 0.90625 14.3564 1.0625C13.7314 0.40625 12.8877 0.03125 11.9502 0.03125C10.1377 0.03125 8.66895 1.5 8.66895 3.3125C8.66895 3.5625 8.7002 3.8125 8.7627 4.0625C6.04395 3.90625 3.60645 2.59375 1.98145 0.625C1.7002 1.09375 1.54395 1.65625 1.54395 2.28125C1.54395 3.40625 2.10645 4.40625 3.0127 5C2.48145 4.96875 1.9502 4.84375 1.5127 4.59375V4.625C1.5127 6.21875 2.6377 7.53125 4.1377 7.84375C3.8877 7.90625 3.5752 7.96875 3.29395 7.96875C3.0752 7.96875 2.8877 7.9375 2.66895 7.90625C3.0752 9.21875 4.29395 10.1562 5.73145 10.1875C4.60645 11.0625 3.2002 11.5938 1.66895 11.5938C1.3877 11.5938 1.1377 11.5625 0.887695 11.5312C2.3252 12.4688 4.04395 13 5.91895 13C11.9502 13 15.2314 8.03125 15.2314 3.6875C15.2314 3.53125 15.2314 3.40625 15.2314 3.25Z"
                fill="#141414"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.0127 14.5V5.15625H1.10645V14.5H4.0127ZM2.54395 3.90625C3.48145 3.90625 4.23145 3.125 4.23145 2.1875C4.23145 1.28125 3.48145 0.53125 2.54395 0.53125C1.6377 0.53125 0.887695 1.28125 0.887695 2.1875C0.887695 3.125 1.6377 3.90625 2.54395 3.90625ZM14.8564 14.5H14.8877V9.375C14.8877 6.875 14.3252 4.9375 11.3877 4.9375C9.98145 4.9375 9.04395 5.71875 8.6377 6.4375H8.60645V5.15625H5.8252V14.5H8.73145V9.875C8.73145 8.65625 8.9502 7.5 10.4502 7.5C11.9502 7.5 11.9814 8.875 11.9814 9.96875V14.5H14.8564Z"
                fill="#141414"
              />
            </svg>
          </div>
          <button className="ml-8 bg-[#7A9CA5] text-white uppercase font-bold flex flex-row items-center justify-center gap-3 py-4 px-8">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8877 3H3.3877C2.55927 3 1.8877 3.67157 1.8877 4.5V15C1.8877 15.8284 2.55927 16.5 3.3877 16.5H13.8877C14.7161 16.5 15.3877 15.8284 15.3877 15V4.5C15.3877 3.67157 14.7161 3 13.8877 3Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6377 1.5V4.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.6377 1.5V4.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.8877 7.5H15.3877"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Reservation
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;

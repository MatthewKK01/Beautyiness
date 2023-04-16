import React from "react";
import face from "../images/face.png";
import anete from "../images/pexels-anete-lusina-5240817 2.png";
import kaci from "../images/export.png";
import "../components/blogBanner.css";
function Blog() {
  return (
    <section>
      <header className="blogBanner pt-[130px] pb-[472px] m-auto ">
        <div>
          <h4 className=" text-white text-center mb-2">
            By Jessica Smith / Beauty & Wellness
          </h4>
          <h1 className="text-white text-[55px]">
            Certified Health Professionals & <br /> Community Medicine
          </h1>
        </div>
      </header>
      <article className="grid grid-cols-2 w-[1200px]  -mt-56 mb-32 mx-auto">
        <img className="col-span-2 mb-12 shadow-lg" src={face} alt="" />
        <div>
          <div className="bg-[#EFFCFF] outline outline-4 outline-[#7A9CA5] w-[409px] p-[39px]">
            <div className="flex gap-6">
              <img src={kaci} alt="" />
              <div>
                <h1 className="text-xl text-left">Author - Chris Jericho</h1>
                <p className="text-base m-0">Chairman & Director</p>
                <span className="bg-[#7A9CA5] uppercase px-3 text-white font-bold mt-3">
                  {" "}
                  beauty health{" "}
                </span>
              </div>
            </div>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet tend tools
              that generator on the Internet.
            </p>
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-left capitalize">share us on:</h1>
              <nav>
                <ul className="flex gap-2">
                  <li className="w-[45px] h-[45px] border-2 border-smalt-blue-500 flex justify-center items-center">
                    <svg
                      width="11"
                      height="19"
                      viewBox="0 0 11 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.68359 10.375L10.1758 7.14062H7.04688V5.03125C7.04688 4.11719 7.46875 3.27344 8.875 3.27344H10.3164V0.496094C10.3164 0.496094 9.01562 0.25 7.78516 0.25C5.21875 0.25 3.53125 1.83203 3.53125 4.64453V7.14062H0.648438V10.375H3.53125V18.25H7.04688V10.375H9.68359Z"
                        fill="#141414"
                      />
                    </svg>
                  </li>
                  <li className="w-[45px] h-[45px] border-2 border-smalt-blue-500 flex justify-center items-center">
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                        fill="#141414"
                      />
                    </svg>
                  </li>
                  <li className="w-[45px] h-[45px] border-2 border-smalt-blue-500 flex justify-center items-center">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                        fill="#141414"
                      />
                    </svg>
                  </li>
                  <li className="w-[45px] h-[45px] border-2 border-smalt-blue-500  flex justify-center items-center">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 4.60742C6.125 4.60742 4.23242 6.53711 4.23242 8.875C4.23242 11.25 6.125 13.1426 8.5 13.1426C10.8379 13.1426 12.7676 11.25 12.7676 8.875C12.7676 6.53711 10.8379 4.60742 8.5 4.60742ZM8.5 11.6582C6.97852 11.6582 5.7168 10.4336 5.7168 8.875C5.7168 7.35352 6.94141 6.12891 8.5 6.12891C10.0215 6.12891 11.2461 7.35352 11.2461 8.875C11.2461 10.4336 10.0215 11.6582 8.5 11.6582ZM13.918 4.45898C13.918 3.90234 13.4727 3.45703 12.916 3.45703C12.3594 3.45703 11.9141 3.90234 11.9141 4.45898C11.9141 5.01562 12.3594 5.46094 12.916 5.46094C13.4727 5.46094 13.918 5.01562 13.918 4.45898ZM16.7383 5.46094C16.6641 4.125 16.3672 2.9375 15.4023 1.97266C14.4375 1.00781 13.25 0.710938 11.9141 0.636719C10.541 0.5625 6.42188 0.5625 5.04883 0.636719C3.71289 0.710938 2.5625 1.00781 1.56055 1.97266C0.595703 2.9375 0.298828 4.125 0.224609 5.46094C0.150391 6.83398 0.150391 10.9531 0.224609 12.3262C0.298828 13.6621 0.595703 14.8125 1.56055 15.8145C2.5625 16.7793 3.71289 17.0762 5.04883 17.1504C6.42188 17.2246 10.541 17.2246 11.9141 17.1504C13.25 17.0762 14.4375 16.7793 15.4023 15.8145C16.3672 14.8125 16.6641 13.6621 16.7383 12.3262C16.8125 10.9531 16.8125 6.83398 16.7383 5.46094ZM14.957 13.7734C14.6973 14.5156 14.1035 15.0723 13.3984 15.3691C12.2852 15.8145 9.6875 15.7031 8.5 15.7031C7.27539 15.7031 4.67773 15.8145 3.60156 15.3691C2.85938 15.0723 2.30273 14.5156 2.00586 13.7734C1.56055 12.6973 1.67188 10.0996 1.67188 8.875C1.67188 7.6875 1.56055 5.08984 2.00586 3.97656C2.30273 3.27148 2.85938 2.71484 3.60156 2.41797C4.67773 1.97266 7.27539 2.08398 8.5 2.08398C9.6875 2.08398 12.2852 1.97266 13.3984 2.41797C14.1035 2.67773 14.6602 3.27148 14.957 3.97656C15.4023 5.08984 15.291 7.6875 15.291 8.875C15.291 10.0996 15.4023 12.6973 14.957 13.7734Z"
                        fill="#141414"
                      />
                    </svg>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="inf">
          <p>
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>
          <h1 className="text-[45px]">Take a look to our collections</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing.
          </p>

          <p className="">
            &bull;Health Care is committed to the pillars of academic health
            care
          </p>
          <p>
            &bull; We will strengthen local health care and improve delivery
            system
          </p>
          <p>
            &bull; Providing optimal multidisciplinary health care and
            developing
          </p>
          <figure className="mb-12">
            <img src={anete} className="shadow-lg" alt="" />
            <figcaption className="font-normal text-lg text-[#555555] text-center mt-3">
              Face Massage - Skin Care
            </figcaption>
          </figure>
          <h1 className="text-3xl text-left">
            Feel Like Home With Best Beauty Tips
          </h1>
          <p>
            It was popularised in the 1960s with the release of Letraset
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="flex mb-10">
            <div className=" w-7  bg-[#7A9CA5]"></div>
            <div className="bg-[#EFFCFF] py-9 px-11 w-[665px]">
              <p className="m-0">
                “Crowdsource term sheet freemium beta stealth responsive web
                design niche market rock star channels. Supply chain market
                graphical user interface assets.”
              </p>
            </div>
          </div>
          <p className="m-0 mb-7">
            1. Your wellness goals and the areas of preference, then unwind with
            a customized.
          </p>
          <p className="m-0 mb-7">
            2. Discover better health & wellness by using our beautician ratings
            & reviews to make your choice.
          </p>
          <p className="m-0 mb-7">
            3. Professionals team is trained to provide you with the care and
            support you need during this difficult time.
          </p>
          <p className="m-0 mb-7">
            4. We will fax the requested records directly to the Qualified
            Beautician.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Blog;

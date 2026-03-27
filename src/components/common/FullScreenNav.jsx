import Nav1 from "../../assets/images/nav_1.png";
import Nav2 from "../../assets/images/nav_2.jpg";
import Nav3 from "../../assets/images/nav_3.jpg";
import Nav4 from "../../assets/images/nav_4.gif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useContext } from "react";
import { ApplicationContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import IndiaTime from "./IndiaTime";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenNavRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useContext(ApplicationContext);

  const tl = gsap.timeline();
  function gsapAnimation() {
    tl.from(".menu-stair", {
      // delay: 0.5,
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });



    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.25,
      },
    });

    tl.from(".navLink", {
      opacity: 0,
    });
  }

  useGSAP(
    function () {
      if (isNavbarOpen) {
        gsap.to(".full-screen-nav", {
          display: "block",
        });
        gsapAnimation();
      } else {
        gsap.to(".full-screen-nav", {
          display: "none",
        });
      }
    },
    [isNavbarOpen],
  );

  return (
    <>
      {/* stairs loading */}

      <div
        ref={fullScreenNavRef}
        id="full-screen-nav"
        className="full-screen-nav h-screen w-full absolute top-0 z-9999  font-[font-lausanne-300] overflow-hidden"
      >
        <div  className="flex items-center justify-center h-screen w-full fixed -z-50">
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
        </div>

        <div
          ref={fullNavLinkRef}
          className="overflow-hidden h-screen w-full z-99999"
        >
          {/* top section */}
          <div className="navLink flex justify-between items-start p-2">
            <div className="w-32 relative">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>

            <div
              onClick={() => setIsNavbarOpen(false)}
              className="w-32 h-32 relative cursor-pointer hover:*:bg-[#D3FD50]"
            >
              <div className="w-[0.2vw]  h-44 -rotate-45 origin-top absolute bg-white " />
              <div className="w-[0.2vw]  h-44 right-0 rotate-45 origin-top absolute bg-white" />
            </div>
          </div>

          <div
            id="all-menu"
            className="flex items-center justify-center flex-col"
          >
            <div className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative">
              <a
                href="https://github.com/TheGauravsahu?tab=repositories"
                target="_blank"
              >
                <h1 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center">
                  WORK
                </h1>
                <div className="moveLink absolute top-0 flex items-center  bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      SEE EVERYTHING
                    </h2>
                    <img
                      src={Nav2}
                      alt="see_everything"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      SEE EVERYTHING
                    </h2>
                    <img
                      src={Nav1}
                      alt="see_everything"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative">
              <Link to="/about">
                <h1 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center">
                  ABOUT
                </h1>
                <div className="moveLink absolute top-0 flex items-center  bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      KNOW ME
                    </h2>
                    <img
                      src={Nav1}
                      alt="know_me"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      KNOW ME
                    </h2>
                    <img
                      src={Nav1}
                      alt="know_me"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative">
              <h1 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center">
                CONTACT
              </h1>
              <div className="moveLink absolute top-0 flex items-center  bg-[#D3FD50] text-black">
                <div className="moveX flex items-center">
                  <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                    SEE EVERYTHING
                  </h2>
                  <img
                    src={Nav4}
                    alt="see_everything"
                    className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                    SEE EVERYTHING
                  </h2>
                  <img
                    src={Nav4}
                    alt="see_everything"
                    className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative">
              <h1 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center">
                BLOG
              </h1>
              <div className="moveLink absolute top-0 flex items-center  bg-[#D3FD50] text-black">
                <div className="moveX flex items-center">
                  <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                    READ ARTICLE
                  </h2>
                  <img
                    src={Nav3}
                    alt="read_article"
                    className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                  />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                    READ ARTICLE
                  </h2>
                  <img
                    src={Nav3}
                    alt="read_article"
                    className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between items-center mt-[12vw]  text-white px-2 absolute z-20 bottom-0">
            <IndiaTime />
            <div className="flex items-center gap-8  *:hover:text-[#D3FD50]">
              <a target="_blank" href="https://github.com/TheGauravsahu">
                GITHUB
              </a>
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/gallary">GALLARY</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;

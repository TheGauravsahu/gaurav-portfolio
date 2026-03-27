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
import logo_white from "../../assets/logo/white.png";

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
        <div className="flex items-center justify-center h-screen w-full fixed -z-50">
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
          <div className="menu-stair w-1/5 h-full bg-black" />
        </div>

        <div
          ref={fullNavLinkRef}
          className="overflow-hidden h-screen w-full z-99999 "
        >
          {/* top section */}
          <div className="navLink flex justify-between items-start p-2">
            <div className="text-white relative">
             <h2 className="text-[7vw] font-[font-lausanne-300]">GS</h2>
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
            className="flex items-center justify-center flex-col mt-[30vw] md:mt-0"
          >
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative"
            >
              <a
                href="https://github.com/TheGauravsahu?tab=repositories"
                target="_blank"
              >
                <h1 className="font-[font-lausanne-500] text-[16vw] leading-[16vw] t md:text-[8vw] md:leading-[8vw] text-center">
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

            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative"
            >
              <Link to="/about">
                <h1 className="font-[font-lausanne-500] leading-[16vw] text-[16vw] md:text-[8vw] md:leading-[8vw] text-center">
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

            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative"
            >
              <Link to="/gallary">
                <h1 className="font-[font-lausanne-500]  leading-[16vw] text-[16vw] md:text-[8vw] md:leading-[8vw] text-center">
                  GALLARY
                </h1>
                <div className="moveLink absolute top-0 flex items-center  bg-[#D3FD50] text-black">
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      SEE IMAGES
                    </h2>
                    <img
                      src={Nav4}
                      alt="see_images"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-[font-lausanne-500] text-[8vw] leading-[8vw] text-center whitespace-nowrap">
                      SEE IMAGES
                    </h2>
                    <img
                      src={Nav4}
                      alt="see_images"
                      className="rounded-full h-[6vw] w-62 shrink-0 object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full  border-gray-400 cursor-pointer relative"
            >
              <a href="https://gauravblogs.vercel.app/" target="_blank">
                <h1 className="font-[font-lausanne-500] leading-[16vw]  text-[16vw] md:text-[8vw] md:leading-[8vw] text-center">
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
              </a>
            </div>
          </div>

          <div className="navLink  flex w-full justify-between items-center mt-[12vw]  text-white px-2 absolute z-20 bottom-0">
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

import Nav1 from "../../assets/images/nav_1.png";
import Nav2 from "../../assets/images/nav_2.jpg";
import Nav3 from "../../assets/images/nav_3.jpg";
import Nav4 from "../../assets/images/nav_4.gif";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useContext } from "react";
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
      <div
        ref={fullScreenNavRef}
        id="full-screen-nav"
        className="full-screen-nav h-screen w-full hidden fixed inset-0 z-[9999] font-sans overflow-hidden"
      >
        <div className="h-screen w-full fixed inset-0">
          <div className="h-full w-full flex">
            <div className="menu-stair w-1/5 h-full bg-[#080414] border-r border-white/5" />
            <div className="menu-stair w-1/5 h-full bg-[#080414] border-r border-white/5" />
            <div className="menu-stair w-1/5 h-full bg-[#080414] border-r border-white/5" />
            <div className="menu-stair w-1/5 h-full bg-[#080414] border-r border-white/5" />
            <div className="menu-stair w-1/5 h-full bg-[#080414]" />
          </div>
        </div>

        <div
          ref={fullNavLinkRef}
          className="overflow-hidden h-screen w-full relative z-10 flex flex-col justify-between p-6 md:p-12"
        >
          {/* top section */}
          <div className="navLink flex justify-between items-center w-full">
            <div className="text-white">
              <span className="font-display font-black text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-blue">
                GS
              </span>
            </div>

            <button
              onClick={() => setIsNavbarOpen(false)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:text-neon-violet hover:border-neon-violet hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-300 cursor-pointer"
              aria-label="Close Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            id="all-menu"
            className="flex items-center justify-center flex-col w-full my-auto overflow-hidden"
          >
            {/* Link 1 */}
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full border-white/10 cursor-pointer relative py-4 md:py-6 overflow-hidden group"
            >
              <a
                href="https://github.com/TheGauravsahu?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h1 className="font-display font-extrabold text-[12vw] leading-none md:text-[6vw] text-center tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                  WORK
                </h1>
                <div className="moveLink absolute inset-0 flex items-center bg-gradient-to-r from-neon-violet to-neon-blue text-white">
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      SEE EVERYTHING • SEE EVERYTHING •
                    </h2>
                    <img
                      src={Nav2}
                      alt="see_everything"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      SEE EVERYTHING • SEE EVERYTHING •
                    </h2>
                    <img
                      src={Nav1}
                      alt="see_everything"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Link 2 */}
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full border-white/10 cursor-pointer relative py-4 md:py-6 overflow-hidden group"
            >
              <Link to="/about" className="block">
                <h1 className="font-display font-extrabold text-[12vw] leading-none md:text-[6vw] text-center tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                  ABOUT
                </h1>
                <div className="moveLink absolute inset-0 flex items-center bg-gradient-to-r from-neon-violet to-neon-blue text-white">
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      KNOW ME • KNOW ME •
                    </h2>
                    <img
                      src={Nav1}
                      alt="know_me"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      KNOW ME • KNOW ME •
                    </h2>
                    <img
                      src={Nav1}
                      alt="know_me"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Link 3 (Lab) */}
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full border-white/10 cursor-pointer relative py-4 md:py-6 overflow-hidden group"
            >
              <Link to="/lab" className="block">
                <h1 className="font-display font-extrabold text-[12vw] leading-none md:text-[6vw] text-center tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                  LAB
                </h1>
                <div className="moveLink absolute inset-0 flex items-center bg-gradient-to-r from-neon-violet to-neon-blue text-white">
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      PLAYGROUND • PLAYGROUND •
                    </h2>
                    <img
                      src={Nav3}
                      alt="playground"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      PLAYGROUND • PLAYGROUND •
                    </h2>
                    <img
                      src={Nav3}
                      alt="playground"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Link 4 */}
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t text-white w-full border-white/10 cursor-pointer relative py-4 md:py-6 overflow-hidden group"
            >
              <Link to="/gallary" className="block">
                <h1 className="font-display font-extrabold text-[12vw] leading-none md:text-[6vw] text-center tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                  GALLARY
                </h1>
                <div className="moveLink absolute inset-0 flex items-center bg-gradient-to-r from-neon-violet to-neon-blue text-white">
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      SEE IMAGES • SEE IMAGES •
                    </h2>
                    <img
                      src={Nav4}
                      alt="see_images"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      SEE IMAGES • SEE IMAGES •
                    </h2>
                    <img
                      src={Nav4}
                      alt="see_images"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Link 4 */}
            <div
              onClick={() => setIsNavbarOpen(false)}
              className="link origin-top border-t border-b text-white w-full border-white/10 cursor-pointer relative py-4 md:py-6 overflow-hidden group"
            >
              <a
                href="https://gauravblogs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h1 className="font-display font-extrabold text-[12vw] leading-none md:text-[6vw] text-center tracking-tight group-hover:opacity-0 transition-opacity duration-300">
                  BLOG
                </h1>
                <div className="moveLink absolute inset-0 flex items-center bg-gradient-to-r from-neon-violet to-neon-blue text-white">
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      READ ARTICLE • READ ARTICLE •
                    </h2>
                    <img
                      src={Nav3}
                      alt="read_article"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                  <div className="moveX flex items-center">
                    <h2 className="font-display font-extrabold text-[8vw] md:text-[4vw] whitespace-nowrap px-4 leading-none">
                      READ ARTICLE • READ ARTICLE •
                    </h2>
                    <img
                      src={Nav3}
                      alt="read_article"
                      className="rounded-full h-12 w-12 object-cover border border-white/25 shrink-0"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="navLink flex flex-col md:flex-row w-full justify-between items-center gap-4 text-white text-xs border-t border-white/5 pt-4">
            <IndiaTime />
            <div className="flex items-center gap-6 font-medium text-gray-400">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TheGauravsahu"
                className="hover:text-neon-violet transition-colors"
              >
                GITHUB
              </a>
              <Link to="/" className="hover:text-neon-violet transition-colors">
                HOME
              </Link>
              <Link to="/about" className="hover:text-neon-violet transition-colors">
                ABOUT
              </Link>
              <Link to="/lab" className="hover:text-neon-violet transition-colors">
                LAB
              </Link>
              <Link to="/gallary" className="hover:text-neon-violet transition-colors">
                GALLARY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;

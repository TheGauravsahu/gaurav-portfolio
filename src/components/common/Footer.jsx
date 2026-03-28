import { Link } from "react-router-dom";
import IndiaTime from "./IndiaTime";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" bg-black text-white font-[font-lausanne-300] mt-4  p-4">
      <div className="w-full flex items-center justify-between *:cursor-pointer pt-8 md:pt-0 ">
        <div>
          <span className="md:text-6xl  text-4xl rounded-full border-2 border-white px-8 py-2 hover:text-[#D3FD50] hover:border-[#D3FD50] ">
            IND
          </span>
        </div>
        <div>
          <span className="md:text-6xl  text-3xl rounded-full border-2 border-white px-8 py-2 hover:text-[#D3FD50] hover:border-[#D3FD50]">
            CONTACT
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between items-center mt-[12vw]  ">
        <IndiaTime />
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8  *:hover:text-[#D3FD50]">
          <a target="_blank" href="https://github.com/TheGauravsahu">
            GITHUB
          </a>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/gallary">GALLARY</Link>
        </div>
        <span
          onClick={scrollToTop}
          className="cursor-pointer hover:text-[#D3FD50]"
        >
          BACK TO TOP
        </span>
      </div>
    </div>
  );
};

export default Footer;

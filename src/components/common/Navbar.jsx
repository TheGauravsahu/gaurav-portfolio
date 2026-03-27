import { useContext } from "react";
import { useRef } from "react";
import { ApplicationContext } from "../../context/AppContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const isHome = useLocation().pathname === "/";
  const burgerRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useContext(ApplicationContext);

  return (
    <div className="flex items-start justify-between fixed top-0 w-full h- z-4">
      <div className="w-64 p-2">
        <Link to="/">
          <h2
            className={`text-[5vw] font-[font-lausanne-500] ${isHome ? "text-white" : "text-black"}`}
          >
            GS.
          </h2>
        </Link>
      </div>

      <div
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        onMouseEnter={() => {
          burgerRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          burgerRef.current.style.height = "0%";
        }}
        className="w-52 h-12 relative cursor-pointer bg-black"
      >
        <div
          ref={burgerRef}
          className="h-0 w-full bg-[#D3FD50] top-0 absolute transition-all flex items-center justify-center "
        />
        <div className="relative  px-12 hover:*:bg-black  flex flex-col gap-1 items-end justify-center h-full w-full">
          <div className="h-0.5 rounded-full w-16 bg-white" />
          <div className="h-0.5 rounded-full w-8 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

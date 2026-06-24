import { useContext, useRef } from "react";
import { ApplicationContext } from "../../context/AppContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useContext(ApplicationContext);
  const burgerRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lab", path: "/lab" },
    { name: "Gallary", path: "/gallary" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-bg-dark/45 backdrop-blur-md border-b border-white/5">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-violet to-neon-blue flex items-center justify-center shadow-lg shadow-neon-violet/20 group-hover:shadow-neon-violet/40 transition-all duration-300">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span className="font-display font-bold text-xl tracking-wider text-white group-hover:text-neon-violet transition-colors">
          GS.
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-sans text-sm font-medium tracking-wide uppercase py-1.5 transition-colors duration-300 ${
                isActive ? "text-neon-violet" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-violet to-neon-blue rounded-full shadow-sm shadow-neon-violet" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        onMouseEnter={() => {
          if (burgerRef.current) burgerRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          if (burgerRef.current) burgerRef.current.style.height = "0%";
        }}
        className="w-12 h-10 relative cursor-pointer overflow-hidden border border-white/10 rounded-lg bg-white/5 flex items-center justify-center group"
        aria-label="Toggle Menu"
      >
        <div
          ref={burgerRef}
          className="h-0 w-full bg-gradient-to-r from-neon-violet to-neon-blue top-0 absolute transition-all duration-300 ease-out z-0"
        />
        <div className="relative z-10 flex flex-col gap-1.5 items-end justify-center h-full w-full px-3">
          <div className="h-[2px] rounded-full w-6 bg-white group-hover:bg-bg-dark transition-colors duration-300" />
          <div className="h-[2px] rounded-full w-4 bg-white group-hover:bg-bg-dark transition-colors duration-300" />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;

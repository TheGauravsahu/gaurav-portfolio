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
    <footer className="bg-[#080414] text-white font-sans mt-4 p-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-neon-violet/5 blur-[100px] pointer-events-none" />

      <div className="w-full flex items-center justify-between pt-8 md:pt-4 relative z-10">
        <div>
          <span className="md:text-5xl text-3xl font-display font-extrabold rounded-full border border-white/10 bg-white/5 px-8 py-3 text-neon-blue hover:text-white hover:border-neon-blue hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 cursor-pointer">
            IND
          </span>
        </div>
        <div>
          <a
            href="mailto:contact@gauravsahu.com"
            className="md:text-5xl text-3xl font-display font-extrabold rounded-full border border-white/10 bg-white/5 px-8 py-3 text-neon-violet hover:text-white hover:border-neon-violet hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-300 cursor-pointer inline-block"
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between items-center mt-16 pt-6 border-t border-white/5 gap-4 relative z-10 text-sm">
        <IndiaTime />
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 font-medium">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TheGauravsahu"
            className="hover:text-neon-violet transition-colors"
          >
            GITHUB
          </a>
          <Link to="/" className="hover:text-neon-violet transition-colors">HOME</Link>
          <Link to="/about" className="hover:text-neon-violet transition-colors">ABOUT</Link>
          <Link to="/gallary" className="hover:text-neon-violet transition-colors">GALLARY</Link>
        </div>
        <button
          onClick={scrollToTop}
          className="cursor-pointer text-gray-400 hover:text-neon-pink font-semibold flex items-center gap-1 transition-colors"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;

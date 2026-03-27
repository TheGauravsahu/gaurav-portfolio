import { Link } from "react-router-dom";
import IndiaTime from "../common/IndiaTime";

const HomeBottomText = () => {
  return (
    <div>
      <div className="flex justify-end items-center absolute right-0 bottom-20 md:bottom-40">
        <p className="text-white w-[70%] md:w-1/4 text-sm font-[font-lausanne-500]">
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; Hi! I'm Gaurav Sahu, a student at DPS Kaluahi. I created
          this website for fun and as a way to explore my creativity and
          curiosity. I enjoy trying new things and learning from different
          experiences while focusing on my studies and personal growth. In my
          free time, I like solving the cube and watching movies, especially
          science fiction and thriller films. Traveling is another passion of
          mine, as I love exploring new places. Music is also an important part
          of my life.
        </p>
      </div>

      <div className="text-white  font-[font-lausanne-500] flex items-end justify-between uppercase">
        <div className="hidden md:block">
          <IndiaTime />
        </div>

        <div className="flex items-center justify-center gap-2 ">
          <Link to="/gallary">
            <h2 className="rounded-full text-[6.5vw] border-3 border-white px-8 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
              Gallary
            </h2>
          </Link>
          <Link to="/about">
            <h2 className="rounded-full text-[6.5vw] border-3 border-white px-8 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
              About
            </h2>
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomeBottomText;

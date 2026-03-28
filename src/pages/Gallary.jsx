import Img1 from "../assets/images/1.jpeg";
import Img2 from "../assets/images/2.jpeg";
import Img3 from "../assets/images/3.jpeg";
import Img4 from "../assets/images/4.jpeg";
import Img5 from "../assets/images/5.jpeg";
import Img6 from "../assets/images/6.jpeg";
import Img11 from "../assets/images/11.jpeg";
import Img15 from "../assets/images/15.jpeg";
import Img16 from "../assets/images/16.jpeg";
import Img17 from "../assets/images/17.jpeg";
import Img18 from "../assets/images/18.jpeg";
import Img19 from "../assets/images/19.jpeg";
import Img20 from "../assets/images/20.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/common/Footer";

const imgList = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img11,
  Img15,
  Img5,
  Img17,
  Img16,
  Img18,
  Img19,
  Img20,
];

const Gallary = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(".img-hero", {
      height: "600px",
      stagger: {
        amount: 0.4,
      },

      scrollTrigger: {
        trigger: ".img-container",
        start: "top 60%",
        end: "top -450%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="pt-[30vw] h-full w-full">
        <div className="px-2">
          <h1 className="font-[font-lausanne-500] text-[12vw] leading-[10vw]">
            GALLARY
          </h1>
        </div>

        <div className="img-container w-full flex items-center flex-wrap gap-1">
          {imgList.map((s, i) => (
            <div
              key={i}
              className="group w-[49%] h-20 md:h-50 relative cursor-pointer hover:rounded-4xl overflow-hidden transition-all img-hero"
            >
              <img
                src={s}
                alt={`${i}_grvImg`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex items-end justify-center">
                <h2 className="font-[font-lausanne-500] font-semibold text-white text-center">
                  #GAURAV
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallary;

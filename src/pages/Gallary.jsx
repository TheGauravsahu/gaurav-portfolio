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
    <div className="min-h-screen bg-bg-dark text-gray-100 font-sans pt-24 relative overflow-hidden">
      {/* Background glow spots */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="py-12 border-b border-white/5 mb-12">
          <span className="text-xs font-tech text-neon-violet uppercase tracking-widest font-bold">Curated Frames</span>
          <h1 className="font-display font-black text-6xl sm:text-8xl mt-2 tracking-tight text-white">
            GALLARY
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-md leading-relaxed">
            A visual documentation of travels, perspectives, creative captures, and memorable snapshots.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="img-container w-full flex items-center flex-wrap gap-4 pb-20">
          {imgList.map((imgSrc, idx) => (
            <div
              key={idx}
              className="group w-full md:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)] h-48 md:h-80 relative cursor-pointer rounded-2xl overflow-hidden border border-white/5 bg-[#110a24] hover:border-neon-violet/30 hover:shadow-[0_0_25px_rgba(167,139,250,0.15)] transition-all duration-500 img-hero"
            >
              <img
                src={imgSrc}
                alt={`${idx}_grvImg`}
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Gradient Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-tech text-neon-blue uppercase tracking-widest font-bold">IMAGE FRAME {idx + 1}</span>
                  <h2 className="font-display font-bold text-white text-xl">
                    #GAURAV
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      <Footer />
    </div>
  );
};

export default Gallary;

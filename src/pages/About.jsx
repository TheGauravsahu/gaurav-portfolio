import { useRef } from "react";
import Img6 from "../assets/images/6.jpeg";
import Img7 from "../assets/images/7.jpeg";
import Img8 from "../assets/images/8.jpeg";
import Img9 from "../assets/images/9.jpeg";
import Img10 from "../assets/images/10.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imagesList = [
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 10%",
        end: "top -140%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imgIndex;
          if (e.progress < 1) {
            imgIndex = Math.floor(e.progress * imagesList.length);
            imageRef.current.src = imagesList[imgIndex];
          } else {
            imgIndex = imagesList.length - 1;
          }
        },
      },
    });
  });

  return (
    <div>
      <div className="font-[font-lausanne-500] h-full w-full section-1 bg-[#FFFFFF] py-1">
        <div
          ref={imageDivRef}
          className="absolute top-60 bg-red-800 left-[32vw] rounded-xl w-[15vw] h-[20vw] overflow-hidden"
        >
          <img
            ref={imageRef}
            src={Img6}
            alt="Img_1"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="relative">
          <div className="pt-[60vh]">
            <h1 className="text-[18vw] text-center leading-[16vw]">
              GAURAV
              <br />
              SAHU
            </h1>
          </div>

          <div className="flex items-center justify-end pr-12">
            <p className="w-[50%] text-[3.5vw] leading-[4vw] tracking-tight">
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; We’re inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing, with values, a personality and
              a story. If we ignore that, we can achieve short-term success, but
              not influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>

          <div className="h-screen max-w-5xl mx-auto pt-42">
            <div className="flex items-start gap-80 justify-start  text-xl">
              <h4>Expertise</h4>
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>

            <div className="flex items-center gap-12 mt-32">
              <p className="text-xl font-semibold w-1/3">
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
              <p className="text-xl font-semibold w-1/3">
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
              <p className="text-xl font-semibold w-1/3">
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" font-[font-lausanne-500] h-full section-2"></div>
    </div>
  );
};

export default About;

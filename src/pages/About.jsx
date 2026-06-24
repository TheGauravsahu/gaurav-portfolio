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
        start: "top 20%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (e) => {
          let imgIndex;
          if (e.progress < 1) {
            imgIndex = Math.floor(e.progress * imagesList.length);
            if (imageRef.current) {
              imageRef.current.src = imagesList[imgIndex];
            }
          } else {
            if (imageRef.current) {
              imageRef.current.src = imagesList[imagesList.length - 1];
            }
          }
        },
      },
    });
  });

  return (
    <div className="min-h-screen bg-bg-dark text-gray-100 font-sans pt-24 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-neon-violet/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none" />

      {/* Interactive Floating Image sequences */}
      <div
        ref={imageDivRef}
        className="absolute top-40 right-[10vw] md:right-[15vw] rounded-2xl w-[80vw] h-[40vh] md:w-[22vw] md:h-[28vw] overflow-hidden border border-neon-violet/30 shadow-[0_0_40px_rgba(167,139,250,0.25)] z-20 bg-bg-dark/80 backdrop-blur-md"
      >
        <img
          ref={imageRef}
          src={Img6}
          alt="Gaurav Sahu Slideshow"
          loading="lazy"
          className="object-cover h-full w-full opacity-90 transition-all duration-300"
        />
        <div className="absolute bottom-4 left-4 bg-bg-dark/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[10px] text-neon-blue font-mono tracking-widest uppercase">
          FRAME SEQUENCE
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {/* Title */}
        <div className="pt-12 md:pt-20">
          <h1 className="text-7xl sm:text-9xl font-display font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-neon-violet/50">
            GAURAV
            <br />
            SAHU
          </h1>
        </div>

        {/* Bio Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-display font-extrabold text-white">
              Student & Creative Developer
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am inquisitive, open-minded, and motivated. As a student at{" "}
              <strong className="text-white">DPS Kaluahi</strong>, I design and
              develop modern digital interfaces to explore the intersections of
              logic, coding, and aesthetics.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              A personal project or website is a sandbox for curiosity. By experimenting with animations, 3D orbits, and interactive modules, I aim to create web experiences that look premium and function flawlessly.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col md:flex-row justify-between gap-8 md:pl-12">
            <div className="space-y-4">
              <h4 className="text-sm font-tech text-neon-pink uppercase tracking-widest font-bold">Expertise</h4>
              <ul className="space-y-2 text-gray-300 font-medium font-sans">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-violet" /> Frontend Web Dev
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" /> UI/UX Layouts
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" /> 3D CSS / GSAP Animations
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-violet" /> Mechanical Systems (Cubes)
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" /> Creative Writing
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-tech text-neon-blue uppercase tracking-widest font-bold">Interests</h4>
              <ul className="space-y-2 text-gray-300 font-semibold font-tech text-xs">
                <li>🧩 Cubing (Rubik's Solver)</li>
                <li>🎬 Sci-Fi & Thriller Movies</li>
                <li>🎵 Electronic & Lo-Fi Beats</li>
                <li>✈️ Exploration & Travel</li>
                <li>📚 Technology Science</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Philosophy grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-3">
            <div className="text-neon-violet text-3xl font-extrabold">01</div>
            <h4 className="font-display font-bold text-white text-lg">Curiosity First</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every project starts with a simple question: "How does this work?". I love breaking down complex systems to build them back stronger.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-3">
            <div className="text-neon-blue text-3xl font-extrabold">02</div>
            <h4 className="font-display font-bold text-white text-lg">Visual Excellence</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aesthetics matter. A premium design creates trust, inspires interaction, and delivers a memorable user experience.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-3">
            <div className="text-neon-pink text-3xl font-extrabold">03</div>
            <h4 className="font-display font-bold text-white text-lg">Constant Learning</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Technology evolves rapidly. Learning new stacks (React, Vite, GSAP, Tailwind v4) is a core part of my daily creative loop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

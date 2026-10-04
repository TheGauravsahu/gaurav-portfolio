import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const StairLoading = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => () => {
    document.documentElement.classList.remove("page-transitioning");
  }, []);

  useGSAP(
    function () {
      document.documentElement.classList.add("page-transitioning");

      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove("page-transitioning");
        },
      });
      tl.to(stairParentRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });

      tl.to(stairParentRef.current, {
        display: "none",
      });

      tl.to(".stair", {
        y: "0%",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
        scale: 1.2,
      });
    },
    [currentPath],
  );

  return (
    <>
      <div ref={stairParentRef} className="page-transition-overlay fixed z-10">
        <div className="page-transition-panels">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default StairLoading;

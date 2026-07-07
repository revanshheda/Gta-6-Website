import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(useGSAP);

const App = () => {
  let [showContent, setsShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(
      ".vi-mask-group",
      {
        scale: 10,
        duration: 2,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            document.querySelector(".svg").remove();
            setsShowContent(true);
            this.kill();
          }
        },
      },
      "-=1.8",
    );
  }, []);

  useGSAP(() => {
    if (!showContent) {
      return;
    }

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".city", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.9,
      rotate: 0,

      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,

      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${-30 - xMove * 0.4}%`,
      });
      gsap.to(".cloud", {
        x: xMove * 0.6,
      });
      gsap.to(".city", {
        x: xMove * 0.5,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="vimask">
              <rect width="100%" height="100%" fill="black" />

              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            className="absolute left-0 bottom--1 w-full h-auto z-0"
            href="./scenery.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#vimask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full bg-black rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-4">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-14 h-2 bg-white"></div>
                  <div className="line w-9 h-2 bg-white"></div>
                  <div className="line w-6 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-0.75 leading-none font-black text-transparent [-webkit-text-stroke:2px_white] ">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden bg-black">
              {/* Cloud */}
              <img
                src="./cloud.png"
                className="absolute scale-[1.5] rotate-[-3deg] cloud inset-0 w-full h-full object-cover z-0"
                alt=""
              />

              {/* City */}
              <img
                src="./city.png"
                className="city scale-[1.8] rotate-[-20deg] absolute inset-0 left-0 bottom--1 w-full h-auto z-0"
                alt=""
              />
              <div className="text text-white absolute flex flex-col gap-2.5 top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg] ">
                <h1 className="text-[7rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[7rem] leading-none ml-25">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-30">auto</h1>
              </div>
              <img
                src="./girl.png"
                className="absolute character left-1/2 -translate-x-1/2 -bottom-105 w-[46%] Scale-[2] rotate-[-10deg] h-auto"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-linear-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i className="text-4xl ri-arrow-down-fill"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll</h3>
              </div>
              <img
                className="h-12.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen px-10 flex items-center justify-center ">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="lg w-1/2">
                <img
                  className="absolute scale-55 top-1/2 left-1/2 -translate-x-255 -translate-y-85 "
                  src="./girl2.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%]">
                <h1 className="text-7xl">CHASE THE SUNSET</h1>
                <h1 className="text-7xl">OWN THE STREETS</h1>
                <p className="mt-10 text-xl font-[helvetica_Now_Display] ">
                  In Leonida, every mile brings a new adventure. Cruise through
                  neon-lit avenues, quiet beaches, and bustling downtown
                  districts where every decision shapes your journey.
                </p>
                <p className="mt-3 text-xl font-[helvetica_Now_Display]">
                  Powered by cinematic visuals and fluid animations, this
                  fan-made GTA VI experience captures the excitement,
                  atmosphere, and freedom of Rockstar's next generation.
                </p>
                <p className="mt-6 text-xl font-[helvetica_Now_Display]">
                  Explore. Escape. Dominate.
                </p>
                <a className="bg-yellow-500 mt-10 inline-block px-8 py-8 text-4xl text-black" href="https://www.rockstargames.com/VI" >Download Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

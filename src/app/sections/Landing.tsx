"use client";
import React, { MutableRefObject, useRef, useEffect, useState } from "react";
import Aside from "../components/Aside";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motions";
const Landing = () => {
  const hero: MutableRefObject<HTMLDivElement | null> = useRef(null);
  useEffect(() => {
    const setHeroBottomMargen = () => {
      if (!hero.current) return;
      hero.current.style.marginBottom = `${hero.current?.clientHeight * 2.7}px`;
    };

    window.onresize = () => setHeroBottomMargen();
    setHeroBottomMargen();
  }, []);

  return (
    <>
      <Aside />
      <section ref={hero} className={`mt-24 relative`}>
        <motion.h1
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="active"
          className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[36px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white text-center `}
        >
          METAVERSE
        </motion.h1>
        <div className="flex justify-center items-center">
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="active"
            className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[36px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white text-center `}
          >
            MA
          </motion.h1>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                transition: {
                  type: "keyframes",
                  duration: 0.3,
                },
              },
              active: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "keyframes",
                  duration: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="active"
            className={`lg:w-[212px] md:w-[170px] sm:w-[80px] w-[50px] lg:h-[108px] md:h-[80px] sm:h-[48px] h-[30px] md:border-[18px] border-[6px] rounded-r-[50px] border-white sm:mx-1 lg:mx-[4px] md:mx-[4px] mx-[2px] inline-block`}
          />
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="active"
            className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[40px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white text-center `}
          >
            NESS
          </motion.h1>
        </div>
        <motion.img
          alt="universe picture"
          src="/universe.webp"
          loading="eager"
          className=" absolute w-[90%] h-[200%] z-[-1] object-cover top-[85%] right-0 rounded-tl-[6rem] rounded-bl-2xl"
          variants={{
            hidden: {
              x: "100%",
            },
            show: {
              x: 0,

              transition: {
                type: "spring",
                delay: 0.2,
                duration: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
        />
        <motion.img
          variants={slideIn("right", "spring", 0, 0.2)}
          src="/mouse-scroll.png"
          alt="Explore and enter the metaverse"
          className={`absolute right-[0] top-[250%] object-cover w-28 sm:w-32 lg:w-auto md:w-44 `}
        />
      </section>
    </>
  );
};

export default Landing;

"use client";
import Title from "../components/Title";
import { fadeIn, slideIn } from "../utils/motions";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section className="relative mb-12">
      <Title text="Insight" isAnimated={true} className="mx-auto" />
      <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white text-center tracking-wider lg:mb-32 md:mb-32 mb-20">
        Insight about metaverse
      </div>
      <div className="flex flex-col gap-11">
        <motion.div
          variants={slideIn("left", "spring", 0, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="flex lg:flex-row flex-col lg:gap-[8%]  gap-4 px-20 "
        >
          <img
            src="/about-1.webp"
            alt="about planet image"
            className="object-cover lg:aspect-square  lg:max-w-[20%] ] lg:rounded-[15%] rounded-[2rem]  "
          />

          <div className=" flex gap-[10%]">
            <div className="flex flex-col lg:gap-[10%]  gap-4 ">
              <h4 className="lg:text-5xl md:text-4xl  text-sm">
                The launch of the Metaverse makes Elon musk ketar-ketir
              </h4>
              <p className="text-secondary-gray lg:text-xl text-xs">
                Magna etiam tempor orci eu lobortis elementum nibh tellus
                molestie. Diam maecenas sed enim ut sem viverra alique.
              </p>
            </div>

            <button className="basis-1/3">
              <img src="arrow.svg" alt="arrow image" />
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="flex lg:flex-row flex-col lg:gap-[8%]  gap-4 px-20 "
        >
          <img
            src="/about-2.webp"
            alt="about planet image"
            className="object-cover lg:aspect-square  lg:max-w-[20%] ] lg:rounded-[15%] rounded-[2rem]  "
          />

          <div className=" flex gap-[10%]">
            <div className="flex flex-col lg:gap-[10%]  gap-4 ">
              <h4 className="lg:text-5xl md:text-4xl  text-sm">
                7 tips to easily master the madness of the Metaverse
              </h4>
              <p className="text-secondary-gray lg:text-xl text-xs">
                Vitae congue eu consequat ac felis donec. Et magnis dis
                parturient montes nascetur ridiculus mus. Convallis tellus id
                interdum
              </p>
            </div>

            <button className="basis-1/3">
              <img src="arrow.svg" alt="arrow image" />
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0, 0.8)}
          initial="hidden"
          whileInView={"show"}
          className="flex lg:flex-row flex-col lg:gap-[8%]  gap-4 px-20 "
        >
          <img
            src="/about-3.webp"
            alt="about planet image"
            className="object-cover lg:aspect-square  lg:max-w-[20%] ] lg:rounded-[15%] rounded-[2rem]  "
          />

          <div className=" flex gap-[10%]">
            <div className="flex flex-col lg:gap-[10%]  gap-4 ">
              <h4 className="lg:text-5xl md:text-4xl  text-sm">
                With one platform you can explore the whole world virtually
              </h4>
              <p className="text-secondary-gray lg:text-xl text-xs">
                Quam quisque id diam vel quam elementum. Viverra nam libero
                justo laoreet sit amet cursus sit. Mauris in aliquam sem
              </p>
            </div>

            <button className="basis-1/3">
              <img src="arrow.svg" alt="arrow image" />
            </button>
          </div>
        </motion.div>

        <div className=" absolute gradient-1 w-[15%] h-[100%] top-0 right-0 z-[-1] lg:blur-[15rem] blur-[9rem]"></div>
        <div className=" absolute  h-[30%] w-[30%] z-[-1] top-[50%] left-[10%] rounded-[30%] lg:rotate-[70deg] rotate-[65deg]  bg-secondary-purple lg:blur-[12rem] blur-[10rem]"></div>
      </div>
    </section>
  );
};

export default About;

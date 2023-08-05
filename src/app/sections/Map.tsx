"use client";
import Title from "../components/Title";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motions";

const Map = () => {
  return (
    <section className="relative px-14 mb-24">
      <Title
        isAnimated={false}
        text="People on the World"
        className="mx-auto"
      />
      <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white text-center tracking-wider mb-5 mx-auto  ">
        Track friends around you and invite them to play together in the same
        world
      </div>
      <motion.img
        src="/map.webp"
        alt="world map "
        variants={fadeIn("up", "spring", 0, 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="w-full"
      />
      <div className=" absolute  h-[50%] w-[20%] z-[-1] top-[60%] left-[30%] rounded-[30%] lg:rotate-[70deg] rotate-[65deg]  bg-[#4298E83B] lg:blur-[5rem] blur-[1rem]" />
      <svg
        className="absolute left-0 top-[50%] z-[-1] w-80 blur-lg"
        viewBox="0 0 672 1699"
        fill="none"
      >
        <g filter="url(#filter0_f_1_18)">
          <ellipse
            cx="-188.14"
            cy="828.246"
            rx="332.5"
            ry="319"
            transform="rotate(52.0115 -188.14 828.246)"
            fill="#7AEBFB"
          ></ellipse>
        </g>
        <g filter="url(#filter1_f_1_18)">
          <ellipse
            cx="-143.997"
            cy="967.756"
            rx="171"
            ry="204"
            transform="rotate(68.8089 -143.997 967.756)"
            fill="#D225E1"
          ></ellipse>
        </g>
        <g filter="url(#filter2_f_1_18)">
          <ellipse
            cx="37.0698"
            cy="1167.83"
            rx="252"
            ry="300.5"
            transform="rotate(68.8089 37.0698 1167.83)"
            fill="#2565E1"
          ></ellipse>
        </g>
        <g filter="url(#filter3_f_1_18)">
          <ellipse
            cx="-170.786"
            cy="1111.67"
            rx="98.5"
            ry="204"
            transform="rotate(68.8089 -170.786 1111.67)"
            fill="#CFECFD"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter0_f_1_18"
            x="-1012.33"
            y="0.775879"
            width="1648.38"
            height="1654.94"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_1_18"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_1_18"
            x="-594.048"
            y="542.05"
            width="900.103"
            height="851.413"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_1_18"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_1_18"
            x="-507.626"
            y="658.917"
            width="1089.39"
            height="1017.83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_1_18"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_1_18"
            x="-464.331"
            y="893.886"
            width="587.088"
            height="435.57"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1_18"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Map;

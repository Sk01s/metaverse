"use client";
import Title from "@/components/Title";
import WorldArticle from "../components/WorldArticle";
import { motion } from "framer-motion";
import React, { useState } from "react";

const World = () => {
  const [isOpenArray, setIsOpenArray] = useState([
    { isOpen: false },
    { isOpen: true },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ]);
  const articles = [
    { title: "The Hogwarts" },
    { title: "The Upside Down" },
    { title: "Kadirojo Permai" },
    { title: "Paradise Island" },
    { title: "Hawkins Labs" },
  ];

  return (
    <section className="relative px-4">
      <Title className="mx-auto" isAnimated={false} text="The World" />
      <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white text-center tracking-wider mb-12">
        Choose the world you want to explore
      </div>
      <div className="flex gap-[1.8rem] lg:flex-row md:flex-row flex-col">
        {articles.map((article, index) => {
          return (
            <WorldArticle
              title={article.title}
              index={index}
              state={isOpenArray[index].isOpen}
              key={index}
            />
          );
        })}
      </div>
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
          />
        </g>
        <g filter="url(#filter1_f_1_18)">
          <ellipse
            cx="-143.997"
            cy="967.756"
            rx="171"
            ry="204"
            transform="rotate(68.8089 -143.997 967.756)"
            fill="#D225E1"
          />
        </g>
        <g filter="url(#filter2_f_1_18)">
          <ellipse
            cx="37.0698"
            cy="1167.83"
            rx="252"
            ry="300.5"
            transform="rotate(68.8089 37.0698 1167.83)"
            fill="#2565E1"
          />
        </g>
        <g filter="url(#filter3_f_1_18)">
          <ellipse
            cx="-170.786"
            cy="1111.67"
            rx="98.5"
            ry="204"
            transform="rotate(68.8089 -170.786 1111.67)"
            fill="#CFECFD"
          />
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
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_1_18"
            />
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
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_1_18"
            />
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
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_1_18"
            />
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
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_1_18"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default World;

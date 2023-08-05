"use client";
import IconFram from "../components/IconFram";
import Title from "../components/Title";
import { planetVariants, slideIn } from "../utils/motions";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Information({}: Props) {
  return (
    <div className="relative ">
      <section className="my-48 flex flex-col lg:flex-row md:flex-row ">
        <motion.img
          src="/planet-1.svg"
          alt="planet image"
          variants={planetVariants("left")}
          initial="hidden"
          whileInView="show"
          className="lg:w-[45%] md:w-[50%] scale-[1.1]"
          loading="lazy"
        />

        <motion.div
          className="px-8"
          variants={slideIn("right", "spring", 0, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <Title isAnimated={false} text="How Metaverus Works" />
          <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white  tracking-wider mb-12">
            Get started with just a few clicks
          </div>
          <ul className="flex flex-col gap-6">
            <li className="text-secondary-gray flex gap-7 items-center justify-start">
              <IconFram>01</IconFram> Find a world that suits you and you want
              to enter
            </li>
            <li className="text-secondary-gray flex gap-7 items-center justify-start">
              <IconFram>02</IconFram> Enter the world by reading basmalah to be
              safe
            </li>
            <li className="text-secondary-gray flex gap-7 items-center justify-start">
              <IconFram>03</IconFram> No need to beat around the bush, just stay
              on the gas and have fun
            </li>
          </ul>
        </motion.div>
      </section>
      <section className="my-48 flex flex-col-reverse lg:flex-row-reverse md:flex-row-reverse ">
        <motion.img
          src="/planet-2.svg"
          alt="planet image"
          variants={planetVariants("right")}
          initial="hidden"
          whileInView="show"
          className="lg:w-[45%] md:w-[50%] scale-[1.1]"
        />

        <motion.div
          className="px-8"
          variants={slideIn("left", "spring", 0, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white  tracking-wider mb-12">
            What&#39;s new about Metaversus?
          </div>
          <ul className="flex gap-6">
            <li className=" flex flex-col gap-4 items-start justify-start">
              <IconFram>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.69 4.04982C18.66 4.72982 15.86 5.49982 12 5.49982C8.11004 5.49982 5.05004 4.65982 3.31004 4.06982C3.15996 4.01925 2.99996 4.00532 2.8434 4.02918C2.68683 4.05304 2.53825 4.114 2.41004 4.20698C2.28183 4.29995 2.17772 4.42224 2.1064 4.56364C2.03508 4.70504 1.99861 4.86145 2.00004 5.01982V18.9998C2.00004 19.6798 2.66004 20.1698 3.31004 19.9498C5.36004 19.2598 8.10004 18.4998 12 18.4998C15.87 18.4998 18.66 19.2598 20.69 19.9498C20.8401 19.999 20.9997 20.0119 21.1557 19.9874C21.3117 19.963 21.4597 19.9019 21.5875 19.8092C21.7154 19.7165 21.8194 19.5948 21.8911 19.4541C21.9628 19.3134 22.0001 19.1577 22 18.9998V4.99982C22 4.31982 21.34 3.83982 20.69 4.04982ZM12 14.9998C9.66004 14.9998 7.48004 15.1498 5.48004 15.4098L9.17004 10.9898L11.17 13.3898L14 9.99982L18.51 15.3998C16.52 15.1498 14.3 14.9998 12 14.9998Z"
                    fill="white"
                  />
                </svg>
              </IconFram>{" "}
              <h4 className="text-2xl">A new world</h4>
              <p className="text-secondary-gray">
                we have the latest update with new world for you to try never
                mind
              </p>
            </li>
            <li className=" flex flex-col gap-4 items-start justify-start">
              <IconFram>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_3525)">
                    <path
                      d="M11.9996 1.872C14.7851 1.872 17.2886 2.8335 18.9746 4.563C20.3619 4.74342 21.6706 5.30994 22.7516 6.198C20.8601 2.223 16.9421 0 11.9996 0C7.12463 0 3.17963 2.22 1.26562 6.183C2.25673 5.37407 3.43901 4.83329 4.69913 4.6125C6.35363 2.808 8.96063 1.872 11.9996 1.872Z"
                      fill="white"
                    />
                    <path
                      d="M18.0004 18C16.4396 18.0018 14.9399 17.3935 13.8214 16.305L13.8184 16.302C13.6891 16.2049 13.5504 16.1209 13.4044 16.0515C12.9647 15.8474 12.485 15.7444 12.0004 15.75C11.3794 15.75 10.9069 15.9045 10.5979 16.0515C10.4513 16.1209 10.3121 16.2048 10.1824 16.302L10.1794 16.305C9.47408 16.9897 8.61138 17.4906 7.66713 17.7637C6.72287 18.0369 5.72597 18.0738 4.76409 17.8713C3.80221 17.6689 2.9048 17.2332 2.15078 16.6026C1.39676 15.9719 0.809212 15.1657 0.43981 14.2548C0.0704071 13.3439 -0.0695399 12.3562 0.0322737 11.3785C0.134087 10.4009 0.474543 9.46317 1.02371 8.64791C1.57287 7.83266 2.31392 7.16482 3.18169 6.7031C4.04947 6.24139 5.01739 5.99994 6.00035 6H18.0004C19.5917 6 21.1178 6.63214 22.243 7.75736C23.3682 8.88258 24.0004 10.4087 24.0004 12C24.0004 13.5913 23.3682 15.1174 22.243 16.2426C21.1178 17.3679 19.5917 18 18.0004 18Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3525">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </IconFram>{" "}
              <h4 className="text-2xl">More realistic</h4>
              <p className="text-secondary-gray">
                In the latest update, your eyes are narrow, making the world
                more realistic than ever
              </p>
            </li>
          </ul>
        </motion.div>
      </section>
      <svg
        viewBox="0 0 1440 2692"
        fill="none"
        className="absolute top-0 right-0 h-full  z-[-1]  blur-lg"
      >
        <g filter="url(#filter0_f_1_23)">
          <ellipse
            cx="1588.36"
            cy="1859.59"
            rx="332.5"
            ry="319"
            transform="rotate(-104.304 1588.36 1859.59)"
            fill="#7AEBFB"
          />
        </g>
        <g filter="url(#filter1_f_1_23)">
          <ellipse
            cx="1603.98"
            cy="1714.1"
            rx="171"
            ry="204"
            transform="rotate(-87.507 1603.98 1714.1)"
            fill="#D225E1"
          />
        </g>
        <g filter="url(#filter2_f_1_23)">
          <ellipse
            cx="1518.53"
            cy="1458.14"
            rx="252"
            ry="300.5"
            transform="rotate(-87.507 1518.53 1458.14)"
            fill="#2565E1"
          />
        </g>
        <g filter="url(#filter3_f_1_23)">
          <ellipse
            cx="706.615"
            cy="984.657"
            rx="252"
            ry="618.404"
            transform="rotate(-53.1335 706.615 984.657)"
            fill="#2D4898"
            fill-opacity="0.75"
          />
        </g>
        <g filter="url(#filter4_f_1_23)">
          <ellipse
            cx="1686.32"
            cy="1593.07"
            rx="98.5"
            ry="204"
            transform="rotate(-87.507 1686.32 1593.07)"
            fill="#CFECFD"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_23"
            x="768.444"
            y="1027.82"
            width="1639.84"
            height="1663.54"
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
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter1_f_1_23"
            x="1150.03"
            y="1293.03"
            width="907.89"
            height="842.145"
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
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter2_f_1_23"
            x="968.111"
            y="956.036"
            width="1100.84"
            height="1004.21"
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
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter3_f_1_23"
            x="-60.8525"
            y="312.324"
            width="1534.93"
            height="1344.67"
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
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
          <filter
            id="filter4_f_1_23"
            x="1382.47"
            y="1394.26"
            width="607.706"
            height="397.625"
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
              result="effect1_foregroundBlur_1_23"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
